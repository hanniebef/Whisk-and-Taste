
// AOS
  AOS.init();

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

const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


// LOAD MORE

$(document).ready(function () {
  $('#toggleButton').on('click', function () {
    const newRow = $('#newRow');
    if (newRow.is(':visible')) {
      newRow.slideUp();
      $(this).text('Load More');
    } else {
      newRow.slideDown();
      $(this).text('Close');
    }
  });
});

// GALLERY 2

$(document).ready(function() {
  $(".gallery-2").on("mouseleave", function() {
      $(this).removeClass("hover");
  });
});

// PARALLAX 

window.addEventListener("scroll", function () {
  const parallaxImage = document.querySelector(".parallax-image");
  const parallaxContainer = document.querySelector(".parallax-container");

  if (parallaxContainer && parallaxImage) { // Verifica que ambos elementos existan
    const containerHeight = parallaxContainer.offsetHeight;
    let scrollOffset = window.pageYOffset;
    let parallaxSpeed = 0.3; 
    let parallaxAmount = (scrollOffset * parallaxSpeed); 

    if (parallaxAmount > containerHeight) {
        parallaxAmount = containerHeight;
    } else if (parallaxAmount < -containerHeight) {
        parallaxAmount = -containerHeight; 
    }

    parallaxImage.style.transform = `translateY(${parallaxAmount}px)`;
  }
});










