const btnLogout = document.getElementById('btnLogout');
const btnToggleMenu = document.getElementById('btnToggleMenu');
const btnCloseSidebar = document.getElementById('btnCloseSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

btnLogout.addEventListener('click', () => {
  sessionStorage.removeItem('usuario_activo');
  window.location.href = 'login.html';
});

function abrirSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
}

function cerrarSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

btnToggleMenu.addEventListener('click', abrirSidebar);
btnCloseSidebar.addEventListener('click', cerrarSidebar);
overlay.addEventListener('click', cerrarSidebar);
