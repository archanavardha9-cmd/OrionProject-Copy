const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function screenshot(url, filename) {
  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,900',
    '--remote-debugging-port=9226',
    url
  ]);

  await new Promise(r => setTimeout(r, 2000));
  try {
    const listRes = await fetch('http://127.0.0.1:9226/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page' && t.url.includes('4173'));
    if (!pageTab) return;

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
    };

    // Wait 3.5 seconds for render
    await new Promise(r => setTimeout(r, 3500));

    ws.send(JSON.stringify({
      id: 2,
      method: 'Page.captureScreenshot',
      params: { format: 'png' }
    }));

    await new Promise((resolve) => {
      ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.id === 2) {
          const buffer = Buffer.from(data.result.data, 'base64');
          fs.writeFileSync(filename, buffer);
          console.log(`Saved screenshot to ${filename} (${buffer.length} bytes)`);
          resolve();
        }
      };
    });

    ws.close();
  } catch (e) {
    console.error('Screenshot error:', e.message);
  } finally {
    chromeProc.kill();
  }
}

async function run() {
  const dir = __dirname;
  await screenshot('http://localhost:4173/', path.join(dir, 'screenshot_home_redesign.png'));
  await screenshot('http://localhost:5174/stores', path.join(dir, 'screenshot_stores_redesign.png'));
  await screenshot('http://localhost:5174/dining', path.join(dir, 'screenshot_dining_redesign.png'));
  await screenshot('http://localhost:5174/entertainment', path.join(dir, 'screenshot_ent_redesign.png'));
  await screenshot('http://localhost:5174/visit', path.join(dir, 'screenshot_visit_redesign.png'));
}

run();
