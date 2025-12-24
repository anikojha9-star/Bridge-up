const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 100,
      centeredSlides: true,
    });
}

swiperAnimation()
var loader=document.querySelector("#loader")
setTimeout(function(){
      loader.style.top="-100%"
},4200)