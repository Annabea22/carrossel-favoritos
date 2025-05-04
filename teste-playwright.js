const swipers = document.querySelectorAll('.swiper');

swipers.forEach((swiperEl, index) => {
  new Swiper(swiperEl, {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 25,
    loop: false,
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev')
    },
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true
    }  

});
});

