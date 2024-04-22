const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getsizes() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

const numStars = 140;
const stars = [];

for (let i = 0; i < numStars; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 2;
  const brightness = Math.random() * 0.7 + 0.3; // Range: 0.5 - 1.0
  stars.push({ x, y, radius, brightness });
}

function drawStars() {
  getsizes();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scrollY = window.scrollY;

  stars.forEach(star => {
    const { x, y, radius, brightness } = star;

    // Update star position based on scroll
    let newY; // Declare the variable outside the if-else statement

    if (scrollY < 2000) {
      newY = (y + scrollY * 0.005) % canvas.height;
    } else {
      newY = (y + 2000 * 0.005) % canvas.height;
    }
    

    ctx.beginPath();
    ctx.arc(x, newY, radius, 0, Math.PI * 2);
    ctx.closePath();

    ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
    ctx.fill();

    // Update star position in the stars array
    star.y = newY;
  });

  requestAnimationFrame(drawStars);
}

drawStars();
