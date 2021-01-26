// smooth scroll

$(document).ready(function () {
  $('html').smoothScroll();
  $('html').smoothScroll(500);
})


// counter up
$(document).ready(function () {
 $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

})


// ===== Scroll to Top ==== 
var btn = $('#returnToTop');

btn.removeClass('show');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $("html").offset().top},
    'slow');
});