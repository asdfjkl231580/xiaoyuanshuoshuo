/**
 * 生财活动站 · 风格切换器
 * 在 5 套 demo 之间快速切换。注入到右下角浮动胶囊。
 */
(function(){
  const styles = [
    { id: 'poster',    name: '海报版',    file: 'site-poster.html',    sub: 'Brutalist · 红黄黑',   color: '#EF3B2C' },
    { id: 'studio',    name: '工作室版',  file: 'site-studio.html',    sub: 'Zine · 软陶橙',        color: '#D97757' },
    { id: 'editorial', name: '编辑部版',  file: 'site-editorial.html', sub: 'Editorial · 极简墨绿',  color: '#0E5C4F' },
    { id: 'library',   name: '图书馆版',  file: 'site-library.html',   sub: 'Penguin · 麻布酒红',   color: '#7B2C1B' },
    { id: 'y2k',       name: 'Y2K 版',    file: 'site-y2k.html',       sub: 'Cyber · 荧光撞色',     color: '#FF2EA0' },
  ];

  const current = (location.pathname.match(/site-(\w+)\.html/) || [])[1] || '';

  const wrap = document.createElement('div');
  wrap.id = 'sx-switcher';
  wrap.innerHTML = `
    <button class="sx-fab" aria-label="切换风格">
      <span class="sx-dot" style="background:${(styles.find(s=>s.id===current)||styles[0]).color}"></span>
      <span class="sx-fab-text">风格</span>
      <span class="sx-fab-icon">⌃</span>
    </button>
    <div class="sx-menu" role="menu">
      <div class="sx-title">5 套风格 · 第 19 场已上线</div>
      ${styles.map(s => `
        <a href="${s.file}" class="sx-opt${s.id===current?' active':''}" data-id="${s.id}">
          <span class="sx-dot" style="background:${s.color}"></span>
          <span class="sx-name">
            <b>${s.name}</b>
            <small>${s.sub}</small>
          </span>
          ${s.id===current?'<span class="sx-tick">·当前·</span>':'<span class="sx-arrow">→</span>'}
        </a>`).join('')}
      <a href="index.html" class="sx-back">返回 17 场目录主页</a>
    </div>
  `;
  document.body.appendChild(wrap);

  const css = `
    #sx-switcher { position: fixed; bottom: 22px; right: 22px; z-index: 99999; font-family: -apple-system, 'PingFang SC', 'Noto Sans SC', sans-serif; line-height: 1.4; }
    #sx-switcher *, #sx-switcher *::before, #sx-switcher *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .sx-fab {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 12px 18px; background: #0A0A0A; color: #FFF;
      border: 1.5px solid rgba(255,255,255,0.14); border-radius: 100px;
      cursor: pointer; font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
      box-shadow: 0 12px 30px rgba(0,0,0,0.38), 0 2px 8px rgba(0,0,0,0.24);
      transition: transform 0.2s, box-shadow 0.2s; font-family: inherit;
    }
    .sx-fab:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.3); }
    .sx-fab .sx-dot { width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 0 2px rgba(255,255,255,0.18); }
    .sx-fab-icon { font-size: 11px; opacity: 0.6; transition: transform 0.25s; }
    #sx-switcher.open .sx-fab-icon { transform: rotate(180deg); }
    .sx-menu {
      display: none; position: absolute; bottom: calc(100% + 12px); right: 0;
      background: #0F0F12; color: #FFF; min-width: 280px; max-width: 320px;
      border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
      padding: 10px; box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.3);
      backdrop-filter: blur(14px);
    }
    #sx-switcher.open .sx-menu { display: block; animation: sx-fade 0.22s ease-out; }
    @keyframes sx-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    .sx-title {
      font-size: 10px; color: #888; padding: 8px 12px 12px;
      letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700;
      border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 6px;
    }
    .sx-opt {
      display: flex; align-items: center; gap: 12px;
      padding: 11px 12px; color: #FFF; text-decoration: none;
      border-radius: 10px; transition: background 0.15s;
    }
    .sx-opt:hover { background: rgba(255,255,255,0.07); }
    .sx-opt.active { background: rgba(255,255,255,0.11); }
    .sx-opt .sx-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 0 2px rgba(255,255,255,0.18); }
    .sx-name { flex: 1; display: flex; flex-direction: column; gap: 1px; }
    .sx-name b { font-size: 14px; font-weight: 700; }
    .sx-name small { font-size: 11px; color: rgba(255,255,255,0.55); font-weight: 400; letter-spacing: 0.02em; }
    .sx-arrow { color: rgba(255,255,255,0.4); font-size: 14px; }
    .sx-tick { font-size: 9px; color: #00E5A0; letter-spacing: 0.18em; font-weight: 700; }
    .sx-back {
      display: block; padding: 10px 12px; margin-top: 6px;
      border-top: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.6); text-decoration: none;
      font-size: 12px; text-align: center; transition: color 0.15s;
    }
    .sx-back:hover { color: #FFF; }
    @media (max-width: 640px) {
      #sx-switcher { bottom: 14px; right: 14px; }
      .sx-fab-text { display: none; }
      .sx-menu { min-width: 260px; }
    }
  `;
  const style = document.createElement('style');
  style.id = 'sx-switcher-css';
  style.textContent = css;
  document.head.appendChild(style);

  const fab = wrap.querySelector('.sx-fab');
  fab.addEventListener('click', e => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') wrap.classList.remove('open');
  });
})();
