$(".show-search").click(function () {
  //   if (!$(".search-form-on-click").is(":visible")) {
  //     $(".search-form-on-click").addClass("search-form-on-click--visible");
  //   } else $(".search-form-on-click").removeClass("search-form-on-click--visible");
  $(".search-form-on-click").slideToggle(400);
  $(".show-search__svg").toggle();
  $(".show-search__text").toggle();
});
