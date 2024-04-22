var ovFlag = false;

// Run the code when the page loads
window.addEventListener('DOMContentLoaded', function () {
  checkWindowDimensions();

  // Run the code every 100 milliseconds to continuously check the window dimensions
  setInterval(checkWindowDimensions, 100);
});

function checkWindowDimensions() {
  var overlay = document.getElementById('overlay');

  if (window.innerWidth < 1.5 * window.innerHeight && !ovFlag ) {
    if (!overlay) {
      createOverlay();
    }
  } else {
    if (overlay) {
      removeOverlay();
    }
  }
}

function createOverlay() {
  var overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0, 0.9)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '9999';

  var text = document.createElement('p');
  text.style.color = '#fff';
  text.style.fontSize = '30px'; // Increase the font size to 30px
  text.style.textAlign = 'center';
  text.textContent = 'Website is best viewed in landscape, continue anyway?';

  var overlaybutton = document.createElement('button');
  overlaybutton.id = 'overlaybutton';
  overlaybutton.style.position = 'fixed';
  overlaybutton.style.top = '60%';
  overlaybutton.style.width = '20%';
  overlaybutton.style.height = '10%';
  overlaybutton.style.backgroundColor = 'rgba(0,0,0, 0.9)';
  overlaybutton.style.display = 'flex';
  overlaybutton.style.alignItems = 'center';
  overlaybutton.style.justifyContent = 'center';
  overlaybutton.style.zIndex = '9999';
  var text2 = document.createElement('p');
  text2.style.color = '#fff';
  text2.style.fontSize = '27px';
  text2.style.textAlign = 'center';
  text2.textContent = 'Let me in!';

  overlaybutton.style.transition = 'background-color 0.3s ease'; // Smooth transition
  overlaybutton.addEventListener('mouseover', function () {
    overlaybutton.style.backgroundColor = 'rgba(255,255,255,0.7)'; // Change background color on hover
  });
  overlaybutton.addEventListener('mouseout', function () {
    overlaybutton.style.backgroundColor = 'rgba(0,0,0,0.9)'; // Revert back to original background color when not hovered
  });
  overlaybutton.addEventListener('click', function() {
    ovFlag = true;
    removeOverlay();
  })

  overlay.appendChild(overlaybutton);
  overlaybutton.appendChild(text2);
  overlay.appendChild(text);
  document.body.appendChild(overlay);


}

function removeOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.parentNode.removeChild(overlay);
}
