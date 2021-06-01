const descriptSlider = new Swiper(".descript-slider", {
  // повтор
  loop: true,

  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  // Навигационные кнопки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
