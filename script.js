   
 /*==toggle icon navbar */
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }; 

/*===auto typing effect */
const typed=new Typed('.multiple-text',{
    
    strings:['Frontend Devloper','YouTuber','Vlogger','Video Editor'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
  
  
});

/*===scroll section active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header');
window.onscroll= () =>{
    console.log(sections)
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };

    });
    /*===sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 100);


     /*==remove toggle icon  and navbar when click navbar link(scroll)*/
     menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
/* scroll reveal */

ScrollReveal({
    reset:true,
    distance: '80px'
    duration:2000,
    delay: 200

});
 ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
 
 ScrollReveal().reveal('.home-img, .service-container,.portfolio-box, .contact form',{origin:'top'});

1:08:34
