$(window).on('scroll', function() {
  var $elem = $('#intro');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#intro').addClass(' leftfade');
  }
});



$(window).on('scroll', function() {
  var $elem = $('.next');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#sentimental').addClass(' sent');
  }
});


$(window).on('scroll', function() {
  var $elem = $('#soon');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#soon, #prevbox').addClass(' scalefade');
  }
});

$(window).on('scroll', function() {
  var $elem = $('#intro');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#slideshow-container').addClass(' scalefade');
  }
});


$(window).on('scroll', function() {
  var $elem = $('#butthen');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#butthen').addClass(' grows');
  }
});


$(window).on('scroll', function() {
  var $elem = $('#stars');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#happier').addClass(' type');
  }
});



$(window).on('scroll', function() {
  var $elem = $('#free');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#free').addClass(' colorscale');
  }
});

$(window).on('scroll', function() {
  var $elem = $('#credits');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#contacts').addClass(' contacts');
  }
});