var $logo = $('.logo');
var $logoOffsetTop = $logo.offset().top;

$(window).scroll(function() {
  if( $(this).scrollTop() > ($logoOffsetTop) ) {
    $logo.addClass("fixed");
  } else {
    $logo.removeClass("fixed");
  }
});
