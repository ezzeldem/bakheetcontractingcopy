$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }
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
  var projectsSwiper = new Swiper(".projects-details-slider", {
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

  new Swiper(".about-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    lazy: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });

  $(".swiper-wrapper").mouseenter(function () {
    projectsSwiper.autoplay.stop();
  });

  $(".swiper-wrapper").mouseleave(function () {
    projectsSwiper.autoplay.start();
  });

  // slick slider

  $(".news-slider").slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: `<div class="prev-arrow arrow-box slick-arrow " >
    <i class="fas fa-angle-right"></i>
  </div>`,
    nextArrow: `<div class="next-arrow arrow-box slick-arrow" >
    <i class="fas fa-angle-left"></i>
  </div>`,
    infinite: true,
    rtl: dir_lang,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
