let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

let registerBtn = document.querySelector(".accout-form .register-btn");
let loginBtn = document.querySelector(".accout-form .login-btn");

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  document.querySelector(".accout-form .login-form").classList.remove("active");
  document.querySelector(".accout-form .register-form").classList.add("active");
};
loginBtn.onclick = () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  document.querySelector(".accout-form .login-form").classList.add("active");
  document.querySelector(".accout-form .register-form").classList.remove("active");
};

let accountForm = document.querySelector(".accout-form");

document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};
document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};
