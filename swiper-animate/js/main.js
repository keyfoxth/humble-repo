var mySwiper = new Swiper(".swiper-container", {
  direction: 'vertical',
  onInit: function(swiper){
    swiperAnimateCache(swiper);
    swiperAnimate(swiper);
  },
  onSlideChangeEnd: function(swiper){
    swiperAnimate(swiper);
  }
})
