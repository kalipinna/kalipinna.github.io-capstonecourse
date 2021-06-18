$(window).on('scroll', function() {
  var $elem = $('#click');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#click, #clickandscroll').addClass(' skewing');
  }
});

$(window).on('scroll', function() {
  var $elem = $('#intro-to-bio');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#intro-to-bio, #intro-to-bio2').addClass(' small');
  }
});


$(window).on('scroll', function() {
  var $elem = $('#ido');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#ido').addClass(' scale3d');
  }
});

$(window).on('scroll', function() {
  var $elem = $('#ido');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#ido1, #ido2, #ido3').addClass(' move');
  }
});


$(window).on('scroll', function() {
  var $elem = $('#thanks');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#thanks').addClass(' thanks');
  }
});