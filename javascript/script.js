var $fixedNav = $("#fixedNav");
var $navHeight = $fixedNav.outerHeight();
var $introHeight = $('.intro').outerHeight();

$('.nav-wrapper').height($navHeight);

$(window).scroll(function() {
  if( $(this).scrollTop() > ($introHeight) ) {
    $fixedNav.addClass("fixed");
  } else {
    $fixedNav.removeClass("fixed");
  }
});
