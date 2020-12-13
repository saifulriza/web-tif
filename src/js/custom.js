function handleScrollDown() {
  let body = document.getElementById('body');
  let btnScrollDown = document.getElementById('btn-scroll-down');
  let btnScrollUp = document.getElementById('btn-scroll-up');
  body.style.overflow = 'visible';
  btnScrollDown.style.display = 'none';
  btnScrollUp.style.display = 'block';
}

function handleScrollUp() {
  let body = document.getElementById('body');
  let btnScrollDown = document.getElementById('btn-scroll-down');
  let btnScrollUp = document.getElementById('btn-scroll-up');
  body.style.overflow = 'hidden';
  btnScrollDown.style.display = 'block';
  btnScrollUp.style.display = 'none';
}
//Get the button
var mybutton = document.getElementById('btn-scroll-up');
let btnScrollDown = document.getElementById('btn-scroll-down');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
    btnScrollDown.style.display = 'none';
  } else {
    mybutton.style.display = 'none';
    btnScrollDown.style.display = 'block';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function insertNavigationDesktop() {
  let navigation = `        <nav class="navigation" id="navigation-desktop">
<ul class="nav__list">
    <li class="nav__item big_sq bg_green">
        <a href="#" class="nav__link"><i class="fa fa-home" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item bg_yellow">
        <a href="#" class="nav__link"><i class="fa fa-code" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item bg_red">
        <a href="#" class="nav__link"><i class="fa fa-download" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item bg_blue">
        <a href="#" class="nav__link"><i class="fa fa-envelope" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item vert_sq bg_green">
        <a href="#" class="nav__link"><i class="fa fa-thumb-tack" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item bg_purple">
        <a href="#" class="nav__link"><i class="fa fa-space-shuttle" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item bg_orange">
        <a href="#" class="nav__link"><i class="fa fa-ship" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item big_sq bg_yellow">
        <a href="#" class="nav__link"><i class="fa fa-unlock-alt" aria-hidden="true"></i></a>
    </li>
    <li class="nav__item bg_orange">
        <a href="#" class="nav__link"><i class="fa fa-taxi" aria-hidden="true"></i></a>
    </li>
</ul>

<div class="hamburger">
    <div class="patty"></div>
</div>
<!-- <button class="btn btn-success hamburger">Menu</button> -->
</nav>`;

  let base = document.getElementById('base-navigation-desktop');
  base.insertAdjacentHTML('beforeend', navigation);
  function menu() {
    let nav = document.querySelector('.navigation');
    let burger = document.querySelector('.hamburger');

    burger.addEventListener('click', function (e) {
      e.preventDefault();
      nav.classList.toggle('active');
    });
  }

  menu();
}
function insertCarouselDesktop() {
  let carousel = `
  <div class="col-7" >
  <div id="carousel-desktop">
  <div id="carousel" class="carousel slide mt-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/carousel.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/carousel.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/carousel.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div>
</div>`;
  let base = document.getElementById('base-carousel-desktop');
  base.insertAdjacentHTML('beforeend', carousel);
}

function insertCarouselMobile() {
  let carousel = `
  <div class="col-12">
  <div class="container carousel-mobile" id="carousel-mobile"> 
  <div class="row text-center no-gutters" data-aos="fade-up">
  <div class="col-6 pr-1 pl-1"><img data-src="/assets/images/mobile/carousel/carousel.jpg" class="lazy card-img-top" height="100px" widht="127px" alt="Teknik Informatika"></div>
 <div class="col-6 pr-1 pl-1"><img data-src="/assets/images/mobile/carousel/carousel.jpg" class="lazy card-img-top" height="100px" widht="127px" alt="Teknik Informatika"></div>
 <div class="col-6 pr-1 pl-1"><img data-src="/assets/images/mobile/carousel/carousel.jpg" class="lazy card-img-top" height="100px" widht="127px" alt="Teknik Informatika"></div>
 <div class="col-6 pr-1 pl-1"><img data-src="/assets/images/mobile/carousel/carousel.jpg" class="lazy card-img-top" height="100px" widht="127px" alt="Teknik Informatika"></div>
 <div class="col-6 pr-1 pl-1"><img data-src="/assets/images/mobile/carousel/carousel.jpg" class="lazy card-img-top" height="100px" widht="127px" alt="Teknik Informatika"></div>
 <div class="col-6 pr-1 pl-1"><img data-src="/assets/images/mobile/carousel/carousel.jpg" class="lazy card-img-top" height="100px" widht="127px" alt="Teknik Informatika"></div>
  </div>
</div> 
</div>`;
  let base = document.getElementById('base-carousel-mobile');
  base.insertAdjacentHTML('beforeend', carousel);
}

function insertMenuMobile() {
  let menu = `
    <div class="container" id="menu-mobile"> 
  
    <div class="row text-center mt-4 no-gutters" style="overflow-x: hidden" data-aos="fade-down">
    <div class="col-6">
    <div class="card shadow-sm p-2 mr-0 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Akademik</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 mr-0 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Kemahasiswaan</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 mr-0  m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Perpustakaan</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Keuangan</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Kepegawaian</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Beasiswa</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh">E-learning</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Alumni</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    E-Quisioner</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Layanan Dan Pengaduan</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Inventaris</div>
    </div>
    <div class="col-6">
    <div class="card shadow-sm p-2 m-1 bg-white rounded btn-ripple" style="height:10vh"> 
    Kuliah Kerja Nyata</div>
    </div>
    </div>
   </div>
  </div>
   `;
  let base = document.getElementById('base-menu-mobile');
  base.insertAdjacentHTML('beforeend', menu);
}

function insertMenuDesktop() {
  let menu = `  
<div id="menu-desktop" class="mb-4 mt-4">
<div class="container-fluid">
<div class="row d-flex justify-content-center " data-aos="fade-up">

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">
<img src="/assets/images/desktop/Akademik.svg" alt="..." style="z-index:1"/>

</div>
<p>Akademik</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Mahasiswa.svg" alt="..." style="z-index:1"/>


</div>
<p>Kemahasiswaan</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4 ">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Perpustakaan.svg" alt="..." style="z-index:1"/>

</div>
<p>Perpustakaan</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Keuangan.svg" alt="..." style="z-index:1"/>

</div>
<p>Keuangan</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Kepegawaian.svg" alt="..." style="z-index:1"/>

</div>
<p>Kepegawaian</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">


<img src="/assets/images/desktop/Beasiswa.svg" alt="..." style="z-index:1"/>

</div>
<p>Beasiswa</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">


<img src="/assets/images/desktop/Elearning.svg" alt="..." style="z-index:1"/>


</div>
<p>E-learning</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Alumni.svg" alt="..." style="z-index:1"/>

</div>
<p>Alumni</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Quisioner.svg" alt="..." style="z-index:1"/>

</div>
<p>E-Quisioner</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Layanan.svg" alt="..." style="z-index:1"/>

</div>
<p>Layanan</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/Inventaris.svg" alt="..." style="z-index:1"/>

</div>
<p>Inventaris</p>
</a>
</div>

<div class="col-xl-2 col-md-3">
<a href="#" class="menu wallet pt-3 mb-4">
<div class="overlay"></div>
<div class="circle">

<img src="/assets/images/desktop/KKN.svg" alt="..." style="z-index:1"/>


</div>
<p>KKN</p>
</a>
</div>
</div>
  </div>
  </div>`;
  let base = document.getElementById('base-menu-desktop');
  base.insertAdjacentHTML('beforeend', menu);
}

function insertWave() {
  let wave = `    
  <div class="custom-shape-divider-bottom-1606916478" id="wave">
    <svg data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
  `;
  let base = document.getElementById('base-wave');
  base.insertAdjacentHTML('beforeend', wave);
}

function insertNewsMobile() {
  let news = `    <div class="row text-center mt-4 mb-5" id="news-mobile">
    <div class="col-12 " data-aos="fade-up">
      <div class="card shadow-sm p-2 mr-0 m-1 bg-white rounded mb-4" ><img
          data-src="news.jpg" class="lazy card-img-top" height="100px" widht="200px"
          alt="...">
        <div class="card-body">
        <small>17 October 2019 | Umum, Kegiatan, Prestasi </small>
        <hr/>
          <h5 class="card-title">	
          Mengukir sejarah : Tim Teknik Informatika Menjuarai PRAKTEK CUP 2019 cabang Volly Putri</h5>
          <p><small>Badan Eksekutif Mahasiswa (BEM) Fakultas Teknik Universitas Malikussaleh Mengadakan beberapa perlombaan dalam rangka menyambut acara Peusijuk Rakan Aneuk Teknik (PRAKTEK) 2019. </small></p>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card shadow-sm p-2 mr-0 m-1 bg-white rounded mb-4 "><img
          data-src="news.jpg" class="lazy card-img-top"
          alt="..." height="100px" widht="200px">
        <div class="card-body">
        <small>13 September 2019 | Umum, Kegiatan,  </small>
        <hr/>
          <h5 class="card-title">Kunjungan Industri Teknik Informatika Unimal ke PT. INALUM</h5>
          <p><small>Pada tahun ini, Teknik Informatika Universitas Malikussaleh mengirim mahasiswa untuk mengunjungi PT. Indonesia Asahan Aluminium (INALUM) pada kamis, 12 september 2019.  </small></p>
        </div>
      </div>
    </div>

  </div>`;

  let base = document.getElementById('base-news-mobile');
  base.insertAdjacentHTML('beforeend', news);
}

function insertFooterDesktop() {
  let footer = `<footer id="footer-desktop">
    <div class="container-fluid">
      <div class="row">
        
        <div class="col-lg-4 col-md-6">
          <h3 style="color:#E3A413">Site Map</h3>
          <ul class="list-unstyled three-column">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Code</li>
            <li>Design</li>
            <li>Host</li>
            <li>Contact</li>
            <li>Company</li>
          </ul>
          <ul class="list-unstyled socila-list">
            <li><img data-src="https://placehold.it/48x48" alt="" class="lazy" /></li>
            <li><img data-src="https://placehold.it/48x48" alt="" class="lazy" /></li>
            <li><img data-src="https://placehold.it/48x48" alt="" class="lazy" /></li>
            <li><img data-src="https://placehold.it/48x48" alt="" class="lazy" /></li>
            <li><img data-src="https://placehold.it/48x48" alt="" class="lazy" /></li>
            <li><img data-src="https://placehold.it/48x48" alt="" class="lazy" /></li>
          </ul>
        </div>
        
        <div class="col-lg-4 col-md-6">
          <h3 style="color:#E3A413">latest News</h3>
          <div class="media">
            <a href="#" class="pull-left">
              <img data-src="https://placehold.it/64x64" alt="" class="lazy media-object" />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Programming</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          
          <div class="media">
            <a href="#" class="pull-left">
              <img data-src="https://placehold.it/64x64" alt="" class="lazy media-object" />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Coding</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          
          <div class="media">
            <a href="#" class="pull-left">
              <img data-src="https://placehold.it/64x64" alt="" class="lazy media-object" />
            </a>
            <div class="media-body">
              <h4 class="media-heading">Web Sesign</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          
        </div>
        
        <div class="col-lg-4">
          <h3 style="color:#E3A413">Alamat</h3>
          Universitas Malikussaleh ACEH
          Kampus Utama Cot Tengku Nie Reuleut
          Muara Batu, Aceh Utara, Provinsi Aceh, Indonesia<br/>
          <br/>
          
          Telp : +62.645.41373, Fax : +62.645.44450
          - informatika@unimal.ac.id
        </div>
        
      </div>
    </div>
    <div class="copyright text-center">
      Copyright &copy; ${new Date().getFullYear()} <span>Teknik Informatika</span>
    </div>
  </footer>`;

  let base = document.getElementById('base-footer-desktop');
  base.insertAdjacentHTML('beforeend', footer);
}

function insertNewsDesktop() {
  let news = `    <!--Start code-->
  <div class="container" id="news-desktop">
 <div class="row" >
     <div class="col-12 pb-5">
         <!--SECTION START-->
         <section class="row">
             <!--Start slider news-->
             <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                 <div id="featured" class="carousel slide carousel" data-ride="carousel">
                     <!--dots navigate-->
                     <ol class="carousel-indicators top-indicator">
                         <li data-target="#featured" data-slide-to="0" class="active"></li>
                         <li data-target="#featured" data-slide-to="1"></li>
                         <li data-target="#featured" data-slide-to="2"></li>
                         <li data-target="#featured" data-slide-to="3"></li>
                     </ol>
                     
                     <!--carousel inner-->
                     <div class="carousel-inner">
                         <!--Item slider-->
                         <div class="carousel-item active">
                             <div class="card border-0 rounded-0 text-light overflow zoom">
                                 <div class="position-relative">
                                     <!--thumbnail img-->
                                     <div class="ratio_left-cover-1 image-wrapper">
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <img class="img-fluid w-100"
                                                  src="https://bootstrap.news/source/img1.jpg"
                                                  alt="Bootstrap news template">
                                         </a>
                                     </div>
                                     <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                         <!--title-->
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <h2 class="h3 post-title text-white my-1">Bootstrap 4 template news portal magazine perfect for news site</h2>
                                         </a>
                                         <!-- meta title -->
                                         <div class="news-meta">
                                             <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                             <span class="news-date">Oct 22, 2019</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                         <!--Item slider-->
                         <div class="carousel-item">
                             <div class="card border-0 rounded-0 text-light overflow zoom">
                                 <div class="position-relative">
                                     <!--thumbnail img-->
                                     <div class="ratio_left-cover-1 image-wrapper">
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <img class="img-fluid w-100"
                                                  src="https://bootstrap.news/source/img2.jpg"
                                                  alt="Bootstrap news theme">
                                         </a>
                                     </div>
                                     <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                         <!--title-->
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <h2 class="h3 post-title text-white my-1">Walmart shares up 10% on online sales lift</h2>
                                         </a>
                                         <!-- meta title -->
                                         <div class="news-meta">
                                             <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                             <span class="news-date">Oct 22, 2019</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                         <!--Item slider-->
                         <div class="carousel-item">
                             <div class="card border-0 rounded-0 text-light overflow zoom">
                                 <div class="position-relative">
                                     <!--thumbnail img-->
                                     <div class="ratio_left-cover-1 image-wrapper">
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <img class="img-fluid w-100"
                                                  src="https://bootstrap.news/source/img3.jpg"
                                                  alt="Bootstrap blog template">
                                         </a>
                                     </div>
                                     <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                         <!--title-->
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <h2 class="h3 post-title text-white my-1">Bank chief warns on Brexit staff moves to other company</h2>
                                         </a>
                                         <!-- meta title -->
                                         <div class="news-meta">
                                             <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                             <span class="news-date">Oct 22, 2019</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                         <!--Item slider-->
                         <div class="carousel-item">
                             <div class="card border-0 rounded-0 text-light overflow zoom">
                                 <div class="position-relative">
                                     <!--thumbnail img-->
                                     <div class="ratio_left-cover-1 image-wrapper">
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <img class="img-fluid w-100"
                                                  src="https://bootstrap.news/source/img4.jpg"
                                                  alt="Bootstrap portal template">
                                         </a>
                                     </div>
                                     <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                         <!--title-->
                                         <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                             <h2 class="h3 post-title text-white my-1">The world's first floating farm making waves in Rotterdam</h2>
                                         </a>
                                         <!-- meta title -->
                                         <div class="news-meta">
                                             <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                             <span class="news-date">Oct 22, 2019</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <!--end item slider-->
                     </div>
                     <!--end carousel inner-->
                 </div>
                 
                 <!--navigation-->
                 <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                 </a>
                 <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                 </a>
             </div>
             <!--End slider news-->
             
             <!--Start box news-->
             <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                 <div class="row">
                     <!--news box-->
                     <div class="col-6 pb-1 pt-0 pr-1">
                         <div class="card border-0 rounded-0 text-white overflow zoom">
                             <div class="position-relative">
                                 <!--thumbnail img-->
                                 <div class="ratio_right-cover-2 image-wrapper">
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <img class="img-fluid"
                                              src="https://bootstrap.news/source/img5.jpg"
                                              alt="simple blog template bootstrap">
                                     </a>
                                 </div>
                                 <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                     <!-- category -->
                                     <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Lifestyle</a>

                                     <!--title-->
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <!--news box-->
                     <div class="col-6 pb-1 pl-1 pt-0">
                         <div class="card border-0 rounded-0 text-white overflow zoom">
                             <div class="position-relative">
                                 <!--thumbnail img-->
                                 <div class="ratio_right-cover-2 image-wrapper">
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <img class="img-fluid"
                                              src="https://bootstrap.news/source/img6.jpg"
                                              alt="bootstrap templates for blog">
                                     </a>
                                 </div>
                                 <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                     <!-- category -->
                                     <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Motocross</a>
                                     <!--title-->
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <h2 class="h5 text-white my-1">Three myths about Florida elections recount</h2>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <!--news box-->
                     <div class="col-6 pb-1 pr-1 pt-1">
                         <div class="card border-0 rounded-0 text-white overflow zoom">
                             <div class="position-relative">
                                 <!--thumbnail img-->
                                 <div class="ratio_right-cover-2 image-wrapper">
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <img class="img-fluid"
                                              src="https://bootstrap.news/source/img7.jpg"
                                              alt="bootstrap blog wordpress theme">
                                     </a>
                                 </div>
                                 <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                     <!-- category -->
                                     <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Fitness</a>
                                     <!--title-->
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <h2 class="h5 text-white my-1">Finding Empowerment in Two Wheels and a Helmet</h2>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <!--news box-->
                     <div class="col-6 pb-1 pl-1 pt-1">
                         <div class="card border-0 rounded-0 text-white overflow zoom">
                             <div class="position-relative">
                                 <!--thumbnail img-->
                                 <div class="ratio_right-cover-2 image-wrapper">
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <img class="img-fluid"
                                              src="https://bootstrap.news/source/img8.jpg"
                                              alt="blog website templates bootstrap">
                                     </a>
                                 </div>
                                 <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                     <!-- category -->
                                     <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Adventure</a>
                                     <!--title-->
                                     <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                         <h2 class="h5 text-white my-1">Ditch receipts and four other tips to be a shopper</h2>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <!--end news box-->
                 </div>
             </div>
             <!--End box news-->
         </section>
         <!--END SECTION-->
     </div>
 </div>
 </div>
 <!--end code-->`;
  let base = document.getElementById('base-news-desktop');
  base.insertAdjacentHTML('beforeend', news);
}

function insertSvgDesktop() {
  let svg = `      
  <div id="svg-desktop">
  <div id="svg-1" class="rellax" data-rellax-speed="-3" data-aos="fade-down"></div>
    <div id="svg-2" class="rellax" data-rellax-speed="3" data-aos="fade-up"></div>
  </div>
  `;
  let base = document.getElementById('base-svg-desktop');
  base.insertAdjacentHTML('beforeend', svg);
}

if (screen && screen.width > 990) {
  insertCarouselDesktop();
  insertWave();
  insertMenuDesktop();
  insertFooterDesktop();
  insertNewsDesktop();
  insertSvgDesktop();
  insertNavigationDesktop();
} else {
  let navigationDesktop = document.getElementById('navigation-desktop');
  let carouselDesktop = document.getElementById('carousel-desktop');
  let wave = document.getElementById('wave');
  let menuDestop = document.getElementById('menu-desktop');
  let footerDesktop = document.getElementById('footer-desktop');
  let newsDesktop = document.getElementById('news-desktop');
  let svgDesktop = document.getElementById('svg-desktop');
  if (carouselDesktop) carouselDesktop.remove();
  if (wave) wave.remove();
  if (menuDestop) menuDestop.remove();
  if (footerDesktop) footerDesktop.remove();
  if (newsDesktop) newsDesktop.remove();
  if (svgDesktop) svgDesktop.remove();
  if (navigationDesktop) navigationDesktop.remove();

  insertCarouselMobile();
  insertMenuMobile();
  insertNewsMobile();
}

$(window).resize(function () {
  //   let width = parseInt($('#width').text($(this).width()));
  // let height = parseInt($("#height").text($(this).height()));
  let navigationDesktop = document.getElementById('navigation-desktop');
  let carouselDesktop = document.getElementById('carousel-desktop');
  let carouselMobile = document.getElementById('carousel-mobile');
  let menuMobile = document.getElementById('menu-mobile');
  let newsMobile = document.getElementById('news-mobile');
  let wave = document.getElementById('wave');
  let menuDestop = document.getElementById('menu-desktop');
  let footerDesktop = document.getElementById('footer-desktop');
  let newsDesktop = document.getElementById('news-desktop');
  let svgDesktop = document.getElementById('svg-desktop');
  if (carouselDesktop) {
    if (screen && screen.width > 990) {
      //   base.style.display = 'block';
      if (carouselMobile) {
        carouselMobile.remove();
      }
      if (menuMobile) {
        menuMobile.remove();
      }
      if (newsMobile) {
        newsMobile.remove();
      }
    } else {
      navigationDesktop.remove();
      carouselDesktop.remove();
      wave.remove();
      menuDestop.remove();
      footerDesktop.remove();
      newsDesktop.remove();
      svgDesktop.remove();
      insertCarouselMobile();
      insertMenuMobile();
      insertNewsMobile();
    }
  } else {
    if (screen && screen.width > 990) {
      if (carouselMobile) {
        carouselMobile.remove();
      }
      if (menuMobile) {
        menuMobile.remove();
      }
      if (newsMobile) {
        newsMobile.remove();
      }
      insertCarouselDesktop();
      insertWave();
      insertMenuDesktop();
      insertFooterDesktop();
      insertNewsDesktop();
      insertSvgDesktop();
      insertNavigationDesktop();
    }
  }
});

function cekUrl() {
  let body = document.getElementById('body');
  if (window.location.href.includes('#')) {
    body.style.overflow = 'visible';
  }
}

cekUrl();
