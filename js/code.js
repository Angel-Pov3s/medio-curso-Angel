document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorModal = document.getElementById('errorModal');
  const retryBtn = document.getElementById('retryBtn');
  const passwordInput = document.getElementById('password');

  const closeModal = () => {
    errorModal.classList.remove('show');
    passwordInput.focus();
    passwordInput.select();
  };

  retryBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && errorModal.classList.contains('show')) {
      closeModal();
    }
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    const usuariosValidos = ["admin", "admin@dev.com"];

    if (usuariosValidos.includes(email) && password === "1234") {
      window.location.href = "dashboard.html";
    } else {
      errorModal.classList.add('show');
      retryBtn.focus();
    }
    
  });
});