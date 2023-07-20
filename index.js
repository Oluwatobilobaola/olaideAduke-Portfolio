gsap.from('.box', { duration: 2, y: '-100%', ease: 'bounce' })
// gsap.from('.skills', { duration: 3, opacity: 0, delay: 1, stagger: .5 })
gsap.fromTo('.home-text h1', {opacity: 0, scale: 0, rotation: 720}, {duration: 1, delay: 1 , opacity: 1, scale: 1, rotation: 0 })
gsap.from('.about-part h3 span', { duration: 3, opacity: 0, delay: 1, stagger: .5 })


const header = document.querySelector('header');
window.addEventListener ('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 100)
});

let menu = document.querySelector('#menu-list');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

window.addEventListener('scroll',function(){
    var anime = document.querySelectorAll('.animeX');

    for(var s = 0; s < anime.length; s++){
        var windowheight = window.innerHeight;
        var animetop = anime[s].getBoundingClientRect().top;
        var animepoint = 150;

        if(animetop < windowheight - animepoint){
            anime[s].classList.add('active');
        }
        else{
            anime[s].classList.remove('active');
        }

    }
})
 

