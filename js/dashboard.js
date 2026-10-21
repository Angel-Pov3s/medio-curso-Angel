document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('auth') !== '1') {
    window.location.href = 'login.html';
    return;
  }

  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');
  const btnLogout = document.getElementById('btnLogout');
  const searchInput = document.getElementById('searchInput');
  const rows = Array.from(document.querySelectorAll('#invoiceBody tr'));
  const emptyState = document.getElementById('emptyState');

  const closeMenu = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    overlay.classList.toggle('show', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('auth');
    window.location.href = 'login.html';
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    rows.forEach((row) => {
      const match = row.textContent.toLowerCase().includes(query);
      row.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    emptyState.style.display = visible === 0 ? 'block' : 'none';
  });
});
