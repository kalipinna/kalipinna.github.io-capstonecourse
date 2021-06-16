$(window).on('scroll', function() {
  if ($("#slideshow-container").is(':visible')) {
    $("#intro").addClass(" scalefade");
  }

});

$(window).on('scroll', function() {
  if ($("#intro").is(':visible')) {
    $("#sentimental").addClass(" fade");
  }

});

$(window).on('scroll', function() {
  if ($("#slideshow-container").is(':visible')) {
    $("#slideshow-container").addClass(" scalefade");
  }

});

$(window).on('scroll', function() {
  if ($("#stars").is(':visible')) {
    $("#butthen").addClass(" grows");
  }

});

$(window).on('scroll', function() {
  if ($("#happier").is(':visible')) {
    $("#happier").addClass("type");
  }

});

$(window).on('scroll', function() {
  if ($("#because").is(':visible')) {
    $("#free").addClass(" colorscale");

  }

});