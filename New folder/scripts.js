document.addEventListener('DOMContentLoaded', function () {
    // Swiper Initialization for Featured Artworks
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  
    // Responsive Navigation Menu
    var menuBtn = document.querySelector('.menu-icon');
    var navLinks = document.querySelector('.nav__links');
  
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
      });
    }
  });
  