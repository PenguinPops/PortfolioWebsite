window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
  
    var opacity = -0.3 + 2 * (scrollY / document.body.scrollHeight);
  
    document.getElementById('color-fill-section').style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
  });
  