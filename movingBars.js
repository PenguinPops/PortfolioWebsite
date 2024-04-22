window.addEventListener('scroll', function() {
    var scrollY = window.pageYOffset;
  
    var length = 40 + 120 * (scrollY / document.body.scrollHeight);
    
    for(var element of document.getElementsByClassName('the-progress')) {
        element.style.width = length + '%';
        element.style.backgroundColor = 'rgba('+(length)+','+(100+length)+','+(length)+',1)';
    }
  });