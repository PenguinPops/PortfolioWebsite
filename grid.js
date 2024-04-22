const gridItems = document.querySelectorAll('.grid-text-box');

gridItems.forEach((gridItem, index) => {
  const imageSrc = gridItem.dataset.imageSrc;
  gridItem.addEventListener('mouseover', (event) => showEffect(event, imageSrc, index));
  gridItem.addEventListener('mouseout', hideEffect);
});

function showEffect(event, imageSrc, index) {
  const square = document.createElement('div');
  square.classList.add('rounded-square');

  const image = document.createElement('img');
  image.src = imageSrc;

  square.appendChild(image);

  if (index === 2) {
    square.style.width = '400px';
    square.style.height = '600px';
    square.style.right = `${document.documentElement.clientWidth - event.clientX}px`;
  } else if (index === 5) {
    square.style.right = `${document.documentElement.clientWidth - event.clientX}px`;
  } else {
    square.style.left = `${event.clientX}px`; 
  }

  square.style.top = `${event.clientY}px`; 
  
  square.style.opacity = '0';
  
  document.body.appendChild(square);
  square.style.opacity = '1';
}

function hideEffect() {
  const square = document.querySelector('.rounded-square');
  square.style.opacity = '0';
  document.body.removeChild(square);
}
