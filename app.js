const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener("click", ()=>{
    
    navLinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    });
});

//hover over gif
const gif = document.querySelector('.giphy-embed');

gif.addEventListener("mouseenter", (e) =>{
    gif.style.transform = "translateZ(150px) translateX(-35px) translateY(20px)";
    gif.style.filter = "drop-shadow(-1px -1px 12px red)";
})

gif.addEventListener("mouseleave", (e) =>{
    gif.style.transform = "translateZ(0px)";
    gif.style.filter = "none";
})