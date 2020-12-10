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
  $('#menu-btn-scroll-left').click(function (event) {
    event.preventDefault();
    $('#mwnu-desktop').animate(
      {
        scrollLeft: '+=300px',
      },
      'slow',
    );
  });
  // $('#base-container-desktop').scheletrone();
});
