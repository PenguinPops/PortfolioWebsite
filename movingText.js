window.addEventListener('scroll', function() {
    var text = document.getElementById('scrolling-text');
    var text2 = document.getElementById('scrolling-text-2');
    var text3 = document.getElementById('scrolling-text-3');
    var scrollY = window.pageYOffset;
  
    // Update text position based on scroll
    var newY = (scrollY * 0.008) % window.innerHeight;
    newY *= 10;
  
    text.style.transform = 'translateX(' + newY + 'vw)';
    text2.style.transform = 'translateX(' + (newY*-1) + 'vw)';
    newY *= 9/10;
    text3.style.transform = 'translateX(' + newY + 'vw)';

});