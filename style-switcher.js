/**
 * 生财活动站 · 整站风格切换器（无 UI 版）
 *
 * 职责：
 *   1. 自动注入 themes-extra.css（路径自适应主页 / sessions 子页）
 *   2. 应用 localStorage 中保存的 data-style（跨页同步）
 *   3. 暴露 window.setSiteStyle('xxx') 给页面 nav 按钮调用
 *
 * UI（切换按钮）由各页面自行在顶部 nav 渲染，按钮 onclick="setSiteStyle('library')" 即可。
 */
(function () {
  // ════════════════════════════════════════════════
  // 1. 自动注入 themes-extra.css（路径自适应）
  // ════════════════════════════════════════════════
  const cssHref = (() => {
    const sel = document.currentScript || document.querySelector('script[src$="style-switcher.js"]');
    const src = sel ? sel.getAttribute('src') : '';
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
  // 2. 切换逻辑
  // ════════════════════════════════════════════════
  const SITE_STYLES = ['', 'studio', 'editorial', 'library', 'y2k'];
  function getCurrent() {
    const saved = localStorage.getItem('sc-style');
    return SITE_STYLES.includes(saved) ? saved : '';
  }
  function applyStyle(s) {
    if (s) document.documentElement.setAttribute('data-style', s);
    else document.documentElement.removeAttribute('data-style');
    document.querySelectorAll('[data-style-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.styleBtn === s);
    });
  }
  function setStyle(s) {
    if (!SITE_STYLES.includes(s)) return;
    localStorage.setItem('sc-style', s);
    applyStyle(s);
  }
  // 初始恢复
  applyStyle(getCurrent());
  // 跨页/跨标签同步
  window.addEventListener('storage', e => {
    if (e.key === 'sc-style') applyStyle(getCurrent());
  });

  // 暴露给页面 nav 上的 onclick="setSiteStyle('xxx')"
  window.setSiteStyle = setStyle;
})();
