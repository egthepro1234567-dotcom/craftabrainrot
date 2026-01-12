const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


class Shape {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 10 + Math.random() * 20;
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = (Math.random() - 0.5) * 0.2;
    this.opacity = 0.05 + Math.random() * 0.15;
    this.opacitySpeed = 0.0005 + Math.random() * 0.001;
    this.type = Math.random() < 0.5 ? "cube" : "circle";
    const darkShade = 30 + Math.floor(Math.random() * 50);
    this.color = `rgba(${darkShade},${darkShade},${darkShade},`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity += this.opacitySpeed;
    if (this.opacity > 0.3 || this.opacity < 0.05) this.opacitySpeed *= -1;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = this.color + this.opacity + ")";
    if (this.type === "cube") {
      ctx.fillRect(this.x, this.y, this.size, this.size);
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

const shapes = [];
for (let i = 0; i < 40; i++) shapes.push(new Shape());


let bgShade = 20; 
let bgDir = 1;


const minShade = 20;
const maxShade = 50;
const cycleTime = 300; 
const fps = 60; 
const deltaShade = ((maxShade - minShade) * 2) / (cycleTime * fps); 
function animate() {

  bgShade += deltaShade * bgDir;
  if (bgShade >= maxShade || bgShade <= minShade) bgDir *= -1;

  ctx.fillStyle = `rgb(${bgShade},${bgShade},${bgShade})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  shapes.forEach(s => {
    s.update();
    s.draw();
  });

  requestAnimationFrame(animate);
}
animate();
