let typed = new Typed('#typing', {
  stringsElement: '#typed-strings',
  showCursor: false,
  startDelay: 0,
  typeSpeed: 20,
});

AOS.init();

$(function () {
  $('.carousel').carousel();
  $('.lazy').lazy();
  // $('#base-container-desktop').scheletrone();
});
