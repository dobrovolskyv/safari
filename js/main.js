$(function () {
  $(".nav-link").hover(
    function () {
      $(this).addClass("nav-link-border ");
    },
    function () {
      $(this).removeClass("nav-link-border ");
    }
  );
  $(".about__video-link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".gallery__slider").slick({
    prevArrow: `<button type="button" class="slide-btn slick-prev"><img src="./images/slide-left.svg"></button>`,
    nextArrow: `<button type="button" class="slide-btn slick-next"><img src="./images/slide-right.svg"></button>`,
  });

  $(".slider__inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
});
