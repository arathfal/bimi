$(document).ready(() => {
  AOS.init();
  $(window).scroll(() => {
    if ($(document).scrollTop() > 100) {
      $(".navbar").removeClass("fadeIn");
      $("#buttonNav").removeClass("button-one");
      $("#buttonNav").addClass("button-two");
      $("body").addClass("shrink");
      $(".navbar").addClass("animated fadeInDown");
    } else {
      $(".navbar").removeClass("fadeInDown");
      $("#buttonNav").removeClass("button-two");
      $("#buttonNav").addClass("button-one");
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
    prevArrow: '<i class="fa-2x fas fa-long-arrow-alt-left arrow-prev" data-aos="fade-left"></i>',
    nextArrow: '<i class="fa-2x fas fa-long-arrow-alt-right arrow-next" data-aos="fade-left"></i>',
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
  //Table Home
  const rowsPerPage = 5;
  const rows = $("#tableAnalysist tbody tr");
  const rowsCount = rows.length;
  const pageCount = Math.ceil(rowsCount / rowsPerPage);
  const numbers = $(".page-number");

  for (var i = 0; i < pageCount; i++) {
    numbers.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }

  $(".page-number li:first-child a").addClass("active");

  displayRows(1);

  $(".page-number li a").click(function (e) {
    var $this = $(this);
    e.preventDefault();
    $(".page-number li a").removeClass("active");
    $this.addClass("active");
    displayRows($this.text());
  });

  function displayRows(index) {
    var start = (index - 1) * rowsPerPage;
    var end = start + rowsPerPage;
    rows.hide();
    rows.slice(start, end).show();
  }
});
