function register() {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const password2 = document.getElementById("register-password2").value.trim();
  const errorBox = document.getElementById("register-error");

  if (!username || !password || !password2) {
    errorBox.textContent = "Lütfen tüm alanları doldurun.";
    return;
  }

  if (password !== password2) {
    errorBox.textContent = "Şifreler eşleşmiyor.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(u => u.username === username);

  if (userExists) {
    errorBox.textContent = "Bu kullanıcı adı zaten kayıtlı.";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Kayıt başarılı! Giriş yapabilirsiniz.");
  window.location.href = "login.html";
}
