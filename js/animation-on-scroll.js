$(window).one('scroll', function() {
  if ($("#worktitle").is(':visible')) {
    $("#worktitle").addClass(" zoom-in-left");
  }

});

$(window).one('scroll', function() {
  if ($("#previewimg1, #previewimg2").is(':visible')) {
    $("#previewimg1, #previewimg2").addClass(" zoom-in-center");
  }
});

$(window).one('scroll', function() {
  if ($("#contact-title").is(':visible')) {
    $("#previewimg3, #about-title").addClass(" zoom-in-center");
  }

});

$(window).one('scroll', function() {
  if ($("#contact-title").is(':visible')) {
    $("#icons").addClass(" zoom-in-icons");
  }

});

/*
$(window).one('scroll', function() {
  if ($("#previewimg3, #about-title").is(':visible')) {
    $("#previewimg3, #about-title").addClass(" zoom-in-center");
  }

});

$(window).one('scroll', function() {
  if ($("#icons").is(':visible')) {
    $("#icons").addClass(" zoom-in-icons");
  }

});
*/