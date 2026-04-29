/**
 * 生财活动站 · 整站风格切换器（换皮模式）
 * 注入到任何页面后自动获得：
 *   1. themes-extra.css 引用（自动判断相对路径）
 *   2. 右下角浮动胶囊 UI（4 套主题 + 经典）
 *   3. 点击切换 <html data-style="X"> → 整页换肤
 *   4. localStorage 持久化（与主页 nav 切换器联动）
 */
(function () {
  // ════════════════════════════════════════════════
  // 1. 自动注入 themes-extra.css（路径自适应）
  // ════════════════════════════════════════════════
  const cssHref = (() => {
    const sel = document.currentScript || document.querySelector('script[src$="style-switcher.js"]');
    const src = sel ? sel.getAttribute('src') : '';
    // src 形如 "style-switcher.js" / "../style-switcher.js"
    const prefix = src.replace(/style-switcher\.js$/, '');
    return prefix + 'themes-extra.css';
  })();
  if (!document.querySelector(`link[href="${cssHref}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssHref;
    document.head.appendChild(link);
  }

  // ════════════════════════════════════════════════
  // 2. 主题数据
  // ════════════════════════════════════════════════
  const styles = [
    { id: '',          name: '经典',     sub: '夜昼纸海 · 默认配色',  color: '#888888' },
    { id: 'studio',    name: '工作室版', sub: 'Zine · 软陶橙',        color: '#D97757' },
    { id: 'editorial', name: '编辑部版', sub: 'Editorial · 极简墨绿',  color: '#0E5C4F' },
    { id: 'library',   name: '图书馆版', sub: 'Penguin · 麻布酒红',   color: '#7B2C1B' },
    { id: 'y2k',       name: 'Y2K 版',   sub: 'Cyber · 荧光撞色',     color: '#FF2EA0' },
  ];

  // ════════════════════════════════════════════════
  // 3. 切换逻辑
  // ════════════════════════════════════════════════
  function getCurrent() {
    const saved = localStorage.getItem('sc-style');
    return styles.some(s => s.id === saved) ? saved : '';
  }
  function applyStyle(s) {
    if (s) document.documentElement.setAttribute('data-style', s);
    else document.documentElement.removeAttribute('data-style');
    // 同步 nav 上 data-style-btn 的高亮
    document.querySelectorAll('[data-style-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.styleBtn === s);
    });
    // 同步右下角胶囊上的当前色点
    const fabDot = document.querySelector('#sx-switcher .sx-fab .sx-dot');
    if (fabDot) {
      const cur = styles.find(x => x.id === s) || styles[0];
      fabDot.style.background = cur.color;
    }
    // 高亮菜单中当前项
    document.querySelectorAll('#sx-switcher .sx-opt').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.styleId === s);
    });
  }
  function setStyle(s) {
    if (!styles.some(x => x.id === s)) return;
    localStorage.setItem('sc-style', s);
    applyStyle(s);
  }
  // 初始恢复
  applyStyle(getCurrent());
  // 跨页/跨标签同步
  window.addEventListener('storage', e => {
    if (e.key === 'sc-style') applyStyle(getCurrent());
  });

  // ════════════════════════════════════════════════
  // 4. 注入右下角浮动 UI
  // ════════════════════════════════════════════════
  const cur = getCurrent();
  const wrap = document.createElement('div');
  wrap.id = 'sx-switcher';
  wrap.innerHTML = `
    <button class="sx-fab" aria-label="切换风格">
      <span class="sx-dot" style="background:${(styles.find(s => s.id === cur) || styles[0]).color}"></span>
      <span class="sx-fab-text">风格</span>
      <span class="sx-fab-icon">⌃</span>
    </button>
    <div class="sx-menu" role="menu">
      <div class="sx-title">整站换皮 · 4 套封面风格</div>
      ${styles.map(s => `
        <a class="sx-opt${s.id === cur ? ' active' : ''}" data-style-id="${s.id}" href="javascript:void(0)">
          <span class="sx-dot" style="background:${s.color}"></span>
          <span class="sx-name"><b>${s.name}</b><small>${s.sub}</small></span>
          ${s.id === cur ? '<span class="sx-tick">·当前·</span>' : '<span class="sx-arrow">→</span>'}
        </a>`).join('')}
    </div>
  `;
  document.body.appendChild(wrap);

  // ════════════════════════════════════════════════
  // 5. UI CSS（独立于站点其他 CSS，不受换肤影响）
  // ════════════════════════════════════════════════
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
    .sx-fab .sx-dot { width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 0 2px rgba(255,255,255,0.18); transition: background 0.25s; }
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
      padding: 11px 12px; color: #FFF !important; text-decoration: none !important;
      border-radius: 10px; transition: background 0.15s; cursor: pointer;
    }
    .sx-opt:hover { background: rgba(255,255,255,0.07); }
    .sx-opt.active { background: rgba(255,255,255,0.11); }
    .sx-opt .sx-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 0 2px rgba(255,255,255,0.18); }
    .sx-name { flex: 1; display: flex; flex-direction: column; gap: 1px; }
    .sx-name b { font-size: 14px; font-weight: 700; }
    .sx-name small { font-size: 11px; color: rgba(255,255,255,0.55); font-weight: 400; letter-spacing: 0.02em; }
    .sx-arrow { color: rgba(255,255,255,0.4); font-size: 14px; }
    .sx-tick { font-size: 9px; color: #00E5A0; letter-spacing: 0.18em; font-weight: 700; }
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

  // ════════════════════════════════════════════════
  // 6. 事件
  // ════════════════════════════════════════════════
  const fab = wrap.querySelector('.sx-fab');
  fab.addEventListener('click', e => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });
  wrap.querySelectorAll('.sx-opt').forEach(opt => {
    opt.addEventListener('click', e => {
      e.preventDefault();
      const id = opt.dataset.styleId;
      setStyle(id);
      // 重新渲染菜单当前态
      wrap.querySelectorAll('.sx-opt').forEach(o => {
        o.classList.toggle('active', o.dataset.styleId === id);
        const tickEl = o.querySelector('.sx-tick, .sx-arrow');
        if (tickEl) {
          tickEl.outerHTML = o.dataset.styleId === id
            ? '<span class="sx-tick">·当前·</span>'
            : '<span class="sx-arrow">→</span>';
        }
      });
      wrap.classList.remove('open');
    });
  });
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') wrap.classList.remove('open');
  });

  // 暴露给页面 nav 上的 onclick="setSiteStyle('xxx')" 调用
  window.setSiteStyle = setStyle;
})();
