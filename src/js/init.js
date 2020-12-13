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
  if (document.getElementsByClassName('rellax')) {
    let rellax = new Rellax('.rellax');
  }
  // $('#base-container-desktop').scheletrone();
});
