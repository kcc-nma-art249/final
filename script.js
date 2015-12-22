// SMOOTH SCROLL
$(".main-nav a").click(function(e) {
  e.preventDefault();

  var $this = $(this);
  var sectionId = $this.attr('href');
  var offset = -20; // Give header 20px breathing room

  $('html, body').animate({
    scrollTop: $(sectionId).offset().top + offset
  }, 750);
});


// STICKY NAV
var $mainNav = $(".main-nav");
var $navHeight = $mainNav.outerHeight();
var $headerHeight = $('header').outerHeight();

$('.nav-wrapper').height($navHeight);

$(window).scroll(function() {
  if( $(this).scrollTop() > ($headerHeight) ) {
    $mainNav.addClass("fixed");
  } else {
    $mainNav.removeClass("fixed");
  }
});
