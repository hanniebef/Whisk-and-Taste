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

  
  
