document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if ((email=="admin") && (password=="1234")) {
      window.location.href = "http://127.0.0.1:5500/dashboard.html";
    } else {
      alert(`Clave incorrecta`);
    }
    
  });
});