// AOS
  AOS.init();


// CARRUSEL

$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
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

// MEMBERS

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


// Load more

$(document).ready(function () {
  $('#toggleButton').on('click', function () {
    const newRow = $('#newRow');
    if (newRow.is(':visible')) {
      // Ocultar la fila y cambiar el botón a "Load More"
      newRow.slideUp();
      $(this).text('Load More');
    } else {
      // Mostrar la fila y cambiar el botón a "Close"
      newRow.slideDown();
      $(this).text('Close');
    }
  });
});


  
// SCROLL IMG 2

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".reveal").forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top 99%", 
            end: "top 5%", 
            toggleActions: "play none none none", 
        }
    });

    tl.to(container, { autoAlpha: 1, duration: 0 });
    tl.from(container, { xPercent: -100, duration: 0.5, ease: "power2.out" }); 
    tl.from(image, { xPercent: 100, scale: 1.3, duration: 1, ease: "power2.out" }); 
});

// BOTONES
$('.center').slick({
  slidesToShow: 3, 
  slidesToScroll: 1,
  arrows: true, 
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2, 
        arrows: true, 
      }
    },
    {
      breakpoint: 576, 
      settings: {
        slidesToShow: 1,
        arrows: true, s
      }
    }
  ]
});