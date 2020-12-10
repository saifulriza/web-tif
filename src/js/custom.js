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
function insertCarouselDesktop() {
  let carousel = `
  <div class="col-8" >
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
<div id="menu-desktop">
<div class="col-12 mt-4 d-flex justify-content-center">
<h2>APLIKASI TEKNIK INFORMATIKA UNIMAL</h2>
</div>
  <div class="col-12 d-flex justify-content-center  mt-3" >

    <div class="row" data-aos="fade-up">
      <div class="col-1 mr-0 ml-0 mt-1 mb-1 ">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-0 ml-0 mt-1 mb-1 ">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div class="col-1 mr-1 ml-1 mt-1 mb-1">
        <div class="img-container" style="max-height: 100px; max-width: 250px;cursor:pointer">
          <img data-src="https://placehold.it/100x100" class="lazy">
          <div class="overlay">
            <span>Menu</span>
          </div>
        </div>
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
  let news = `
  <div class="container-fluid" id="news-desktop" data-aos="fade-up">
  <div class="info">
</div>
<div class="row">
  <div class="col-3 mb-4" >
      <!-- Post-->
      <div class="post-module">
          <!-- Thumbnail-->
          <div class="thumbnail">
              <div class="date">
                  <div class="day">27</div>
                  <div class="month">Mar</div>
              </div><img data-src="news.jpg" class="lazy" height="200px" widht="400px"/></div>
          <!-- Post Content-->
          <div class="post-content">
              <div class="category">Photos</div>
              <h1 class="title">City Lights in New York</h1>
              <h2 class="sub_title">The city that never sleeps.</h2>
              <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
              <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
          </div>
      </div>
  </div>

  <div class="col-3 mb-4" >
  <!-- Post-->
  <div class="post-module">
      <!-- Thumbnail-->
      <div class="thumbnail">
          <div class="date">
              <div class="day">27</div>
              <div class="month">Mar</div>
          </div><img data-src="news.jpg" class="lazy" height="200px" widht="400px" /></div>
      <!-- Post Content-->
      <div class="post-content">
          <div class="category">Photos</div>
          <h1 class="title">City Lights in New York</h1>
          <h2 class="sub_title">The city that never sleeps.</h2>
          <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
          <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
      </div>
  </div>
</div>

<div class="col-3 mb-4" >
<!-- Post-->
<div class="post-module">
    <!-- Thumbnail-->
    <div class="thumbnail">
        <div class="date">
            <div class="day">27</div>
            <div class="month">Mar</div>
        </div><img data-src="news.jpg" class="lazy" height="200px" widht="400px"/></div>
    <!-- Post Content-->
    <div class="post-content">
        <div class="category">Photos</div>
        <h1 class="title">City Lights in New York</h1>
        <h2 class="sub_title">The city that never sleeps.</h2>
        <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
        <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
    </div>
</div>
</div>

<div class="col-3 mb-4" >
<!-- Post-->
<div class="post-module">
    <!-- Thumbnail-->
    <div class="thumbnail">
        <div class="date">
            <div class="day">27</div>
            <div class="month">Mar</div>
        </div><img data-src="news.jpg" class="lazy" height="200px" widht="400px"/></div>
    <!-- Post Content-->
    <div class="post-content">
        <div class="category">Photos</div>
        <h1 class="title">City Lights in New York</h1>
        <h2 class="sub_title">The city that never sleeps.</h2>
        <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
        <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
    </div>
</div>
</div>



</div> 
</div>
`;
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
} else {
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

  insertCarouselMobile();
  insertMenuMobile();
  insertNewsMobile();
}

$(window).resize(function () {
  //   let width = parseInt($('#width').text($(this).width()));
  // let height = parseInt($("#height").text($(this).height()));
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
