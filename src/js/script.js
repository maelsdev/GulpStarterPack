window.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu__item");
  const catalogNav = document.querySelector('.catalog__navigator-sub a')
  menuItems.forEach((item) => {
    
    item.addEventListener("click", (e) => {
      if(e.target.innerHTML === 'Головна'){
        catalogNav.innerHTML =  ''
      }else{
        catalogNav.innerHTML =  e.target.innerHTML
      }
      menuItems.forEach((res) => res.classList.remove("active"));
      if (item === e.target.parentNode) {
        item.classList.add("active");
      }
    });
  });
});



const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".menu__mobile");
const close = document.querySelector(".close");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  mobile.style.display = "block";
  hamburger.style.display = 'none'
});
close.addEventListener("click", () => {
  mobile.style.display = "none";
  hamburger.style.display = 'block'
});




