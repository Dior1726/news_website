const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },

    1024: {
      slidesPerView: 6,
    }
  }
});