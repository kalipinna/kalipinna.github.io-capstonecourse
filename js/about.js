function show(element) {
  var a = document.getElementById('previewimg');
  var b = element.style.backgroundImage;
  a.style.backgroundImage = b;

  document.getElementById('description').innerHTML = element.nextElementSibling.innerHTML;
}