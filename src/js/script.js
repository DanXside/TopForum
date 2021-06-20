new Swiper('.reviews-slider', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    freeMode: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: true,
      },
    loop: true
});

new Swiper('.clients-slider', {
  autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false
    },
  slidesPerView: 6,
  loop: true,
  spaceBetween: 10,
});