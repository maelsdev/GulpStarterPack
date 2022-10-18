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

const catalogItem = document.querySelectorAll('.catalog__item-head')

catalogItem.forEach(item=>{
  item.addEventListener('click',()=>{
    item.querySelector('.arrows').classList.toggle('arrows__active')
    item.parentNode.querySelector('.catalog__item-options').classList.toggle('active')
  })
})
const vid = document.getElementById('vid')
const range = document.querySelector('.range')
range.addEventListener('input',(e)=>{
  vid.value = e.target.value;
})





