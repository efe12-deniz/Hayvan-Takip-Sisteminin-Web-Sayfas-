function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("activeUser", username);
    window.location.href = "anasayfa.html";
  } else {
    document.getElementById("error").textContent = "Kullanıcı adı veya şifre hatalı!";
  }
}
