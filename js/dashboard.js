/**
 * DASHBOARD - NEXUS ERP (GRUPO A)
 * Control de menú y cierre de sesión
 */

const btnLogout = document.getElementById('btnLogout');
const btnToggleMenu = document.getElementById('btnToggleMenu');
const btnCloseSidebar = document.getElementById('btnCloseSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// 1. Cierre de sesión y retorno al login
btnLogout.addEventListener('click', () => {
  sessionStorage.removeItem('usuario_activo');
  window.location.href = 'login.html';
});

// 2. Control del menú en dispositivos móviles
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
