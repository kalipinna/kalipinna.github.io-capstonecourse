function show(element) {
  var a = document.getElementById('previewimg');
  var b = element.style.backgroundImage;
  a.style.backgroundImage = b;

  document.getElementById('description').innerHTML = element.nextElementSibling.innerHTML;
  document.getElementById('x').style.display = "block";
}

function back() {

  document.getElementById('previewimg').style.backgroundImage = "url('images/6.jpg')";
  document.getElementById('description').innerHTML = "if you haven't clicked on anything, here's a nice landscape for you."


}