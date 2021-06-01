$(document).ready(function () {
  const flowersSlider = new Swiper(".flowers-slider", {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,

    // Навигационные стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // настройки адаптивной версии
    breakpoints: {
      // если бразуер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // wесли браузер >= 768px
      992: {
        slidesPerView: 6,
      },
    },
  });
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,

    // Навигационные стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $("#review-1").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "https://source.unsplash.com/IvfoDk30JnI/1500x1000",
          opts: {
            caption: "First caption",
            thumb: "https://source.unsplash.com/IvfoDk30JnI/240x160",
          },
        },
        {
          src: "https://source.unsplash.com/0JYgd2QuMfw/1500x1000",
          opts: {
            caption: "Second caption",
            thumb: "https://source.unsplash.com/0JYgd2QuMfw/240x160",
          },
        },
        {
          src: "https://source.unsplash.com/0JYgd2QuMfw/1500x1000",
          opts: {
            caption: "Second caption",
            thumb: "https://source.unsplash.com/0JYgd2QuMfw/240x160",
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });
  $("#review-2").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "https://source.unsplash.com/IvfoDk30JnI/1500x1000",
          opts: {
            caption: "First caption",
            thumb: "https://source.unsplash.com/IvfoDk30JnI/240x160",
          },
        },
        {
          src: "https://source.unsplash.com/0JYgd2QuMfw/1500x1000",
          opts: {
            caption: "Second caption",
            thumb: "https://source.unsplash.com/0JYgd2QuMfw/240x160",
          },
        },
        {
          src: "https://source.unsplash.com/0JYgd2QuMfw/1500x1000",
          opts: {
            caption: "Second caption",
            thumb: "https://source.unsplash.com/0JYgd2QuMfw/240x160",
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });
  const counter = function () {
    const btns = document.querySelectorAll(".counter-button");

    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector(".counter-input");
        const currentValue = +inp.value;
        let newValue;

        if (direction === "plus") {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
      });
    });
  };

  counter();
});
