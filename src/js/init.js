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
  $('#switch').click(function () {
    $('#toggle-icon').toggleClass(function () {
      return $(this).is('.fa-sun, .fa-moon') ? 'fa-sun fa-moon' : 'fa-sun';
    });
    $('body').toggleClass('dark-mode');
    $('#fill').toggleClass('shape-fill');
    $('.menu').toggleClass('menu-dark');
    $('#switch').toggleClass(function () {
      return $(this).is('.light, .dark') ? 'light dark' : 'light';
    });

    $('.bg-white').css('background', '#575252');
  });
  // $('#base-container-desktop').scheletrone();
});
