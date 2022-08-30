window.sr = ScrollReveal({ reset: true})
ScrollReveal().reveal('h1', {
    delay: 700, duration:2000,
        rotate:{x:0, y:100, z:0, duration:200}

})

ScrollReveal().reveal('.caixaServices', {
    delay: 200, 
    duration:2000,
    origin:"top",
    distance:"50px",
    duration:2000
        

})

ScrollReveal().reveal('.caixaServices2', {
    delay: 600, 
    duration:2000,
    origin:"top",
    distance:"50px",
    duration:2000
        

})

ScrollReveal().reveal('.caixaServices3', {
    delay: 1000, 
    duration:2000,
    origin:"top",
    distance:"50px",
    duration:2000
        

})
 var x=0;
 var y=0;

function mobileMenuJs(){
if (x == 0){
    
    var t = document.getElementsByClassName("mobile-menu");
    var u = document.getElementsByClassName("mobile-menuHub");

    
    t[0].style.display="block";
    u[0].style.backgroundColor="red";

    x =1;
}
else{
    
    var f = document.getElementsByClassName("mobile-menu");

    f[0].style.display="none";

    x = 0;

}
}