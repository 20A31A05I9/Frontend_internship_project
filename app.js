var typed = new Typed('.typing', {
    strings: ['Front end developer !','Android app developer !' ,'Ios app developer !'],
    typeSpeed: 70,
    loop:true,
  });

 const ham=document.querySelector('.hamburger');
 const nav=document.querySelector('nav');
 const home=document.querySelector('.home');
ham.addEventListener("click",function() {
    nav.classList.toggle('navtoggle');
    console.log(nav);
});
home.addEventListener("click",function(){
    nav.classList.remove("navtoggle");
});

const scroll=document.querySelector(".scroll");
window.onscroll=function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 100) {
      scroll.classList.add("scrolltoggle");
    }
    else{
        scroll.classList.remove("scrolltoggle");
    }
}
