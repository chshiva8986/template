$(document).ready(function()
{
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        responsive:{
            0:{
                
            },
            600:{
              
            },
            1000:{
             
            }
        }
    })
});


 //counter

  document.addEventListener('DOMContentLoaded', function () {

    let counters = document.querySelectorAll('.purecounter');
    counters.forEach(function (counter) {
      new PureCounter(counter, {
        duration: counter.getAttribute('data-purecounter-duration') || 2,
        start: counter.getAttribute('data-purecounter-start') || 0,
        end: counter.getAttribute('data-purecounter-end') || 100,
      });
    });
  });


/* arrow */
  document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    });

    scrollButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  
  $(document).ready(function() {
    // Fade in the "About Us" section when the page loads
    $("#about").fadeIn(1500); // You can adjust the duration (in milliseconds) as needed
  });

