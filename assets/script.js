
(function () {
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') body.classList.add('dark');

  const buttons = document.querySelectorAll('[data-theme-toggle]');
  function updateButtons() {
    buttons.forEach((btn) => {
      btn.textContent = body.classList.contains('dark') ? '☀' : '☾';
      btn.setAttribute('aria-label', body.classList.contains('dark') ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
  updateButtons();
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      updateButtons();
    });
  });

  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('open');
      menuButton.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
  }
})();
