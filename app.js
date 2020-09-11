const showMenu = (toogleId,navId) =>{
    const toggle = document.querySelector(toogleId);
    const nav = document.querySelector(navId);

        if(toggle && nav){
            console.log("qwqwqw")
            toggle.addEventListener('click', ()=>{
                console.log("asass")
                nav.classList.toggle('show')
                
            })
        }
}
showMenu('#nav-toggle','#nav-menu')
// Active and remove menu
const navLink = document.querySelectorAll('.nav__link')
// const test = Array.isArray(navLink)
// console.log(test)
function linkAction(){

    // ActiveLink
    navLink.forEach( n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove Menu Mobile
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration : 2000,
    reset : true
})
// Scroll Reveal #Home
sr.reveal('.home__title',{})
sr.reveal('.button',{delay : 200})
sr.reveal('.home__img',{delay : 400})
sr.reveal('.home__social-icon',{interval : 200})
// Scroll reveal #about 
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay : 200})
sr.reveal('.about__text',{delay : 400})
// Scroll Reveal #skills

sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay : 200})
sr.reveal('.skills__data',{interval : 200})
sr.reveal('.skills__img',{delay : 400})
// Scroll Reveal #Work
sr.reveal('.work__img',{interval : 200})
// Scroll Reveal #Contact
sr.reveal('.contact__input',{interval : 200})


// Send Email
