const { spawn } = require('child_process');
const fs = require('fs');

async function shot(url, name) {
  const p = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new', '--disable-gpu', '--window-size=1440,900', '--remote-debugging-port=9226', url
  ]);
  await new Promise(r => setTimeout(r, 2000));
  try {
    const r = await fetch('http://127.0.0.1:9226/json');
    const tabs = await r.json();
    const pt = tabs.find(t => t.type === 'page');
    if (!pt) { p.kill(); return; }
    const ws = new WebSocket(pt.webSocketDebuggerUrl);
    ws.onopen = () => ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
    await new Promise(r => setTimeout(r, 3500));
    ws.send(JSON.stringify({ id: 2, method: 'Page.captureScreenshot', params: { format: 'png' } }));
    await new Promise(res => {
      ws.onmessage = m => {
        const d = JSON.parse(m.data);
        if (d.id === 2) {
          fs.writeFileSync(name, Buffer.from(d.result.data, 'base64'));
          console.log('saved', name);
          res();
        }
      };
    });
    ws.close();
  } catch (e) { console.error(e.message); } finally { p.kill(); }
}

(async () => {
  await shot('http://localhost:4173/', 'C:\\Users\\hp\\Desktop\\OrionProject - Copy\\client\\screenshot_home_before.png');
})();