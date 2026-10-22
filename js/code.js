const USUARIO_CORRECTO = 'angel';
const CLAVE_CORRECTA = 'angel123';

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
const errorModal = document.getElementById('errorModal');
const retryBtn = document.getElementById('retryBtn');

togglePassword.addEventListener('click', () => {
  const esPassword = passwordInput.type === 'password';
  passwordInput.type = esPassword ? 'text' : 'password';
  eyeIcon.className = esPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});

function mostrarError() {
  errorModal.hidden = false;
  retryBtn.focus();
}

function cerrarError() {
  errorModal.hidden = true;
  passwordInput.value = '';
  passwordInput.focus();
}

retryBtn.addEventListener('click', cerrarError);

errorModal.addEventListener('click', (e) => {
  if (e.target === errorModal) cerrarError();
});

// 5. Validación del formulario al hacer submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  // Comprobar credenciales
  const esUsuarioValido = usuario === USUARIO_CORRECTO || usuario === `${USUARIO_CORRECTO}@ejemplo.com` || usuario === 'correo@ejemplo.com';
  const esClaveValida = password === CLAVE_CORRECTA;

  if (esUsuarioValido && esClaveValida) {
    // Si la clave es correcta: pasar al Dashboard
    sessionStorage.setItem('usuario_activo', USUARIO_CORRECTO);
    window.location.href = 'dashboard.html';
  } else {
    // Si la clave es incorrecta: mostrar alerta
    mostrarError();
  }
});