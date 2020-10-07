$(document).ready(() => {
  $(window).scroll(() => {
    if ($(document).scrollTop() > 100) {
      $(".navbar").removeClass("fadeIn");
      $("body").addClass("shrink");
      $(".navbar").addClass("animated fadeInDown");
    } else {
      $(".navbar").removeClass("fadeInDown");
      $("body").removeClass("shrink");
      $(".navbar").addClass("animated fadeIn");
    }
  });
  $("#project-slider").slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-2x fas fa-long-arrow-alt-left arrow-prev"></i>',
    nextArrow: '<i class="fa-2x fas fa-long-arrow-alt-right arrow-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
