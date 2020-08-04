// navbar starts
const slide = ()=>{
    const hamburger = document.querySelector(".hamburger");
    const items = document.querySelector(".nav-items");

    hamburger.addEventListener('click', ()=>{
        items.classList.toggle('nav-active');
        hamburger.classList.toggle('change');
    });



}
slide();

AOS.init({
    easing:'ease',
    duration:1500
});

$(window).load(function() {
    $("body").removeClass("preload");
  });