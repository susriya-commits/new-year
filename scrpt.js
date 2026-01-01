/* 🎉 Personal New Year Wish */
function personalWish() {
  let name = document.getElementById("name").value;

  if (name === "") {
    alert("Please enter your name 😊");
  } else {
    alert("🎉 Happy New Year " + name + "! 🎉");
  }
}


const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let fireworks = [];

function Firework(x, y) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 2 + 1;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  this.life = 60;
}

function createFirework() {
  fireworks.push(
    new Firework(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    )
  );
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((fw, index) => {
    ctx.beginPath();
    ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
    ctx.fillStyle = fw.color;
    ctx.fill();

    fw.life--;
    fw.radius += 0.3;

    if (fw.life <= 0) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(animateFireworks);
}

setInterval(createFirework, 300);
animateFireworks();

