  AOS.init();

  $(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });

  // NAVBAR

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.dropdown-menu .dropdown-submenu').forEach(function (element) {
      element.addEventListener('mouseover', function (e) {
          let submenu = element.querySelector('.dropdown-menu');
          if (submenu) submenu.classList.add('show');
      });
      element.addEventListener('mouseleave', function (e) {
          let submenu = element.querySelector('.dropdown-menu');
          if (submenu) submenu.classList.remove('show');
      });
  });
});

  
  
