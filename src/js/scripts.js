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
  $('.parallax-window').parallax({
    //imageSrc: '/assets/img/mainbg.png',
    imageSrc: 'showcase/app/assets/img/mainbg.png',
    speed: 0.5
  });

  // FAQ icon switch
  $("#section-faq .panel-heading").addClass("collapsed");

})(jQuery); // End of use strict
