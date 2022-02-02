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

var swiper = new Swiper(".home-slider", {
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  loop:true,
  grabCursor:true
});

var swiper = new Swiper(".home-courses-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});