// Run the code when the page loads
window.addEventListener('DOMContentLoaded', function() {
    checkWindowDimensions();
  
    // Run the code every 100 milliseconds to continuously check the window dimensions
    setInterval(checkWindowDimensions, 100);
  });
  
  function checkWindowDimensions() {
    var overlay = document.getElementById('overlay');
  
    if (window.innerWidth < 1.5 * window.innerHeight) {
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
    text.textContent = 'Please resize the window or rotate your device';
  
    overlay.appendChild(text);
    document.body.appendChild(overlay);
  }
  
  function removeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.parentNode.removeChild(overlay);
  }
  