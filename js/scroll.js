$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".scrollToTop").show(300);
  } else {
    $(".scrollToTop").hide(300);
  }
});
