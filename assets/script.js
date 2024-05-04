let collapse = document.querySelector(".collapse");
let navLinks = document.querySelector(".nav-links");

collapse.addEventListener("click", function(){
    navLinks.classList.toggle("show-nav");
})