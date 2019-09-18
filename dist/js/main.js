// Select DOM Objects

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-brand");
const navItems  = document.querySelectorAll(".menu-item");
const senderName = document.querySelector("#senderName");
const senderMsg = document.querySelector("#senderMsg");
// Set initial state of the menu;
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

// functions
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add("close");  
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBrand.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
        showMenu = true;
    // Set menu state
    } else {
        menuBtn.classList.remove("close");  
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBrand.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        showMenu = false;
    }
}
let date = new Date();
let yearPos = document.getElementById("year");
let year = date.getFullYear();

yearPos.innerHTML = year;
