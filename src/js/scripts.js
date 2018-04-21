(function($) {
  "use strict"; // Start of use strict

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /* Grid masonry view animation
    new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
  });*/

  // Parallax Header
  /*$('.parallax-window').parallax({
    imageSrc: '/assets/img/mainbg.png',
    //imageSrc: 'app/assets/img/mainbg.png',
    speed: 0.5
  });*/

  // Check width
  var $window = $(window);
  
  function checkWidth() {
      var windowsize = $window.width();
      if (windowsize < 768) {
          //if the window is greater than 440px wide then turn on jScrollPane..
          $('#mainNav').removeClass('fixed-top');
      }
  }
  // Execute on load
  checkWidth();

  // FAQ icon switch
  $("#section-faq .panel-heading").addClass("collapsed");

  $(window).on("load", function() {
    // Preloader
    var onLoadPage;

    function loadPage() {
        onLoadPage = setTimeout(showPage, 2000);
    }

    function showPage() {
      $('#loader').fadeOut();
      $('.wrapper').fadeIn();
      // WOW JS
      var wow = new WOW(
        {
          boxClass: 'wow',
          mobile: false
        }
      );
      wow.init();
    }

    loadPage()
  });

})(jQuery); // End of use strict
