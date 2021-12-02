$(document).ready(function () {
  $(".scrollToTop").hide();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".scrollToTop").show(300);
  } else {
    $(".scrollToTop").hide(300);
  }
});
