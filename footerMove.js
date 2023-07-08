const texts = document.querySelectorAll('.center-p');
const title = document.getElementById('center-h2');
const img = document.getElementById('footerImg');
window.addEventListener('scroll', function() {

    var scrollY = window.pageYOffset;
  
    // Update text position based on scroll
    var move = -1 * (53 - (scrollY * 0.008) % window.innerHeight);

    // console.log(move);
  
    for (var i = 1; i <= texts.length; i++) {
        var text = texts[i-1];
        text.style.marginRight = 30+((move)*(i*0.5)) + 'vh';
      }

    title.style.marginRight = 40+move+'vh';
    img.style.marginLeft = -16 + 2*move+'em';
});