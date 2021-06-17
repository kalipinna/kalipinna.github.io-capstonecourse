$(window).on('scroll', function() {
  var $elem = $('#header');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#worktitle').addClass(' zoom-in-left');
  }
});



$(window).on('scroll', function() {
  var $elem = $('#previewimg1');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#previewimg1, #previewimg2').addClass(' zoom-in-center');
  }
});


$(window).on('scroll', function() {
  var $elem = $('#about-title');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#about-title, #previewimg3').addClass(' zoom-in-center');
  }
});

$(window).on('scroll', function() {
  var $elem = $('#icons');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {

    $('#icons').addClass(' zoom-in-icons');
  }
});