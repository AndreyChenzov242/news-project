$(".hamburger").click(function () {
  if (!$(".sidebar").is(":visible")) {
    $(".hamburger").addClass("hamburger--active");
  } else $(".hamburger").removeClass("hamburger--active");
  $(".sidebar").toggle();
});
$(".sidebar__backdrop").click(function () {
  $(".hamburger").click();
});
