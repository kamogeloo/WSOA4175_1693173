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
    gif.style.transform = "translateZ(-100px)";
    gif.style.width = "60%";
    
});

gif.addEventListener("mouseleave", (e) =>{
    gif.style.transform = "translateZ(100px)";
    gif.style.filter = "none";
    gif.style.width = "80%";
});

