/*!
 * Seeds
 * Seeds
 * https://agacat31.github.io/myprofile/
 * @author Aga Atmaja
 * @version 1.0.0
 * Copyright 2018. MIT licensed.
 */
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-shrink");
      $(".scroll-top-wrapper").fadeIn();
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $(".scroll-top-wrapper").fadeOut();
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
          $('#mainNav').removeClass('fixed-top');
      }
  }
  // Execute on load
  checkWidth();

  // FAQ icon switch
  $("#section-faq .panel-heading").addClass("collapsed");

  $('.bg-wrapper').lazy({
      afterLoad: function(element) {
          // Preloader
          var onLoadPage;

          var loadPage = function() {
              onLoadPage = setTimeout(showPage, 1000);
          }

          var showPage = function() {
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
          loadPage();
      },

      onError: function(element) {
          var imageSrc = element.data('src');
          console.log('image "' + imageSrc + '" could not be loaded');
      },

      onFinishedAll: function() {
          //console.log('finished loading all images');
      }
  });

})(jQuery); // End of use strict
