// Multi-section screenshot using native WebSocket (no ws module needed)
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function screenshotAtScroll(url, filename, scrollY) {
  const port = 9230 + Math.floor(Math.random() * 10);
  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,900',
    `--remote-debugging-port=${port}`,
    url
  ]);

  await new Promise(r => setTimeout(r, 2800));
  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page');
    if (!pageTab) { console.log('No tab at', port); return; }

    // Use fetch-based CDP instead of WebSocket
    const sessRes = await fetch(`http://127.0.0.1:${port}/json/new`);
    
    // Scroll via eval
    await fetch(`http://127.0.0.1:${port}/json/runtime/evaluate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression: `window.scrollTo(0,${scrollY})` })
    }).catch(() => {});

    await new Promise(r => setTimeout(r, 1000));

    // Screenshot via /json
    const ssRes = await fetch(`http://127.0.0.1:${port}/json/screenshot`).catch(() => null);
    
    // Fallback: use Page.captureScreenshot via WebSocket text protocol
    // Since native WebSocket available in Node 22+
    const wsUrl = pageTab.webSocketDebuggerUrl;
    
    const result = await new Promise((resolve, reject) => {
      const wsProc = spawn('node', ['-e', `
const url = '${wsUrl}';
(async () => {
  const ws = new WebSocket(url);
  ws.addEventListener('open', () => {
    ws.send(JSON.stringify({id:1,method:'Runtime.evaluate',params:{expression:'window.scrollTo(0,${scrollY})'}}));
    setTimeout(() => {
      ws.send(JSON.stringify({id:2,method:'Page.captureScreenshot',params:{format:'png'}}));
    }, 1000);
  });
  ws.addEventListener('message', (evt) => {
    const d = JSON.parse(evt.data);
    if (d.id === 2 && d.result && d.result.data) {
      process.stdout.write(d.result.data);
      ws.close();
    }
  });
  ws.addEventListener('error', (e) => { process.stderr.write(e.message); process.exit(1); });
})();
      `], { timeout: 15000 });
      
      let chunks = [];
      wsProc.stdout.on('data', d => chunks.push(d));
      wsProc.on('close', () => {
        const b64 = Buffer.concat(chunks).toString();
        if (b64.length > 100) resolve(b64);
        else reject(new Error('No data'));
      });
      wsProc.on('error', reject);
    });
    
    const buffer = Buffer.from(result, 'base64');
    fs.writeFileSync(filename, buffer);
    console.log(`Saved ${path.basename(filename)} (${buffer.length} bytes)`);
  } catch (e) {
    console.error(`Error for ${filename}:`, e.message);
  } finally {
    chromeProc.kill();
    await new Promise(r => setTimeout(r, 500));
  }
}

(async () => {
  const dir = path.join(__dirname, '');
  await screenshotAtScroll('http://localhost:4173/', path.join(dir, 'ss_brands.png'), 820);
  await screenshotAtScroll('http://localhost:4173/', path.join(dir, 'ss_dining.png'), 1700);
})();
