let burgerBtn = document.getElementById('burger-open')
let burger = document.getElementById('burger')
let navbar = document.querySelector('.nav-bar')
let header = document.querySelector('header')
let hero = document.querySelector('.hero')
let start = document.querySelector('.start')
let num01 = document.querySelector('.num01')
let num02 = document.querySelector('.num02')
let num03 = document.querySelector('.num03')
burgerBtn.addEventListener('click', ()=>{
    burger.classList.toggle('open')
    navbar.classList.toggle('d-block')

})
let page = window.addEventListener("scroll", (e)=>{
    //sous ma baniere il se color
    console.log(window.scrollY);
    if (window.scrollY<750){
        start.classList.add('color')
        header.classList.remove('header-bg')
        num01.classList.remove('color')
    }else if(window.scrollY>750&&window.scrollY<1226){
        start.classList.remove('color')
        num02.classList.remove('color')
        header.classList.add('header-bg')
        num01.classList.add('color')
    }else if(window.scrollY>900&&window.scrollY<1750){
        num01.classList.remove('color')
        num02.classList.add('color')
        num03.classList.remove('color')
    }else if(window.scrollY>2300&&window.scrollY<3000){
        num02.classList.remove('color')
        num03.classList.add('color')
    }
})
// let options = {
//     root: document.querySelector("#scrollArea"),
//     rootMargin: "0px",
//     threshold: 1.0,
//   };
  
//   let observer = new IntersectionObserver(callback, options);
