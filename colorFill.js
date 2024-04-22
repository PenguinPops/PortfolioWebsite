

function opcon() {
  var scrollY = window.scrollY;
  var opacity = 0.3 + 1.5 * (scrollY / document.body.scrollHeight);
  document.getElementById('color-fill-section').style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
}

window.addEventListener("load", function(event) {
  opcon(); // Call opcon function on page load
  window.addEventListener('scroll', opcon); // Call opcon function on scroll
});
