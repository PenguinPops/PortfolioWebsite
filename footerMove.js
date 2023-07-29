const img = document.getElementById('footerImg');
const block = document.getElementById('center-text');
const title = document.getElementById('title-p');
const insidetxt = document.getElementById('center-p');
window.addEventListener('scroll', function() {
  
    // Update text position based on scroll
    var move = -1 * (53 - (window.scrollY * 0.008) % window.innerHeight);

    // console.log(move);
    block.style.marginRight = 10 + move + 'vh';
    insidetxt.style.marginLeft = 5 - move + 'vh';
    title.style.marginRight = 30 + 3*move + 'vh';
    img.style.marginLeft = -16 + 2*move + 'vh';
});