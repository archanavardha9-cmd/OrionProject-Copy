const { spawn } = require('child_process');
const fs = require('fs');

async function evalJs(url, js, wait=2000) {
  const p = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new', '--disable-gpu', '--window-size=1440,900', '--remote-debugging-port=9226', url
  ]);
  await new Promise(r => setTimeout(r, wait));
  try {
    const r = await fetch('http://127.0.0.1:9226/json');
    const tabs = await r.json();
    const pt = tabs.find(t => t.type === 'page');
    if (!pt) { p.kill(); return 'no page'; }
    const ws = new WebSocket(pt.webSocketDebuggerUrl);
    ws.onopen = () => ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
    await new Promise(r => setTimeout(r, 1000));
    let msgId = 2;
    return await new Promise(res => {
      ws.onmessage = m => {
        const d = JSON.parse(m.data);
        if (d.id === msgId) { ws.close(); res(d.result?.result?.value ?? JSON.stringify(d)); }
      };
      ws.send(JSON.stringify({ id: msgId, method: 'Runtime.evaluate', params: { expression: js, returnByValue: true } }));
    });
  } catch (e) { p.kill(); return 'err: ' + e.message; }
}

(async () => {
  const url = 'http://localhost:4173/';
  const checks = [
    'document.querySelector(".om-persistent-video") ? "VIDEO_EXISTS" : "NO_VIDEO"',
    '(() => { const v = document.querySelector(".om-persistent-video"); if (!v) return "no video"; const cs = getComputedStyle(v); const parent = v.parentElement ? getComputedStyle(v.parentElement) : null; return JSON.stringify({w: v.offsetWidth, h: v.offsetHeight, display: cs.display, visibility: cs.visibility, opacity: cs.opacity, parentBg: parent ? parent.background : "none", parentDisplay: parent ? parent.display : "none", src: v.currentSrc }); })()',
    '(() => { const el = document.querySelector(".om-hero-glass-hero"); if (!el) return "no hero"; const cs = getComputedStyle(el); return JSON.stringify({bg: cs.background, bg2: cs.backgroundColor, blur: cs.backdropFilter, w: el.offsetWidth, h: el.offsetHeight, opacity: cs.opacity}); })()',
    '(() => { const els = document.querySelectorAll(".om-section-panel"); return Array.from(els).map((e,i) => { const cs = getComputedStyle(e); return i + ":" + cs.backgroundColor + "|" + cs.backdropFilter; }).join("; "); })()',
    '(() => { const v = document.querySelector(".om-persistent-video"); return v ? JSON.stringify({paused: v.paused, currentTime: v.currentTime, duration: v.duration, readyState: v.readyState, videoWidth: v.videoWidth, videoHeight: v.videoHeight}) : "no video"; })()',
    '(() => { const cards = document.querySelectorAll(".om-editorial-brand-card"); return cards.length; })()',
    '(() => { const marq = document.querySelector(".om-marquee-content"); return marq ? marq.offsetWidth : "no marquee"; })()',
    'document.querySelectorAll(".om-section-panel").length',
  ];
  for (const c of checks) {
    const r = await evalJs(url, c);
    console.log('CHECK:', c.substring(0,60), '=>', r);
  }
})();