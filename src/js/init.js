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
    $('.list-menu-mobile').toggleClass('menu-dark').removeClass('bg-white');
    $('.list-news-mobile').toggleClass('menu-dark').removeClass('bg-white');
    $('#switch').toggleClass(function () {
      return $(this).is('.light, .dark') ? 'light dark' : 'light';
    });
  });
  // $('#base-container-desktop').scheletrone();
});
