$(".hamburger").click(function () {
  if (!$(".sidebar").is(":visible")) {
    $(".hamburger").addClass("hamburger--active");
  } else $(".hamburger").removeClass("hamburger--active");
  $(".sidebar").toggle();
});
$(".sidebar__backdrop").click(function () {
  $(".hamburger").click();
});

$(".swiper-wrapper").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});
