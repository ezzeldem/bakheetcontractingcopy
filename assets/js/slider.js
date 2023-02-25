$(document).ready(function () {
  let interleaveOffset = 0.5;
  new Swiper(".intro-slider", {
    loop: true,
    speed: 2000,
    // autoplay: {
    //   delay: 4000,
    // },
    loopAdditionalSlides: 10,
    watchSlidesProgress: true,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        function numberAppend(d) {
          return d < 10 ? "0" + d.toString() : d.toString();
        }
        return (
          '<span class="swiper-pagination-current">' +
          numberAppend(current) +
          '</span><span class="swiper-pagination-line"></span> <span class="swiper-pagination-total">' +
          numberAppend(total) +
          "</span>"
        );
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".projects-slider", {
    grabCursor: true,
    loop: true,
    effect: "creative",
    slidesPerView: 1,
    spaceBetween: 0,
    lazy: true,
    breakpoints: {
      772: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
    navigation: {
      nextEl: ".projects-swiper-button-next",
      prevEl: ".projects-swiper-button-prev",
    },
  });
  var mySwiper = new Swiper(".projects-details-slider", {
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    lazy: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".projects-swiper-button-next",
      prevEl: ".projects-swiper-button-prev",
    },
  });

  $(".swiper-wrapper").mouseenter(function () {
    mySwiper.autoplay.stop();
    console.log("slider stopped");
  });

  $(".swiper-wrapper").mouseleave(function () {
    mySwiper.autoplay.start();
    console.log("slider started again");
  });

  new Swiper(".about-swiper", {
    slidesPerView: 2,
    loop: true,
    lazy: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      772: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
});
