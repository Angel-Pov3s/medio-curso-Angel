document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();

    const usuariosValidos = ["admin", "admin@dev.com"];

    if (usuariosValidos.includes(email) && password === "1234") {
      sessionStorage.setItem("auth", "1");
      window.location.href = "dashboard.html";
    } else {
      alert(`Clave incorrecta`);
    }
    
  });
});