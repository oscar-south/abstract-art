var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function randomColor() {
  return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

function draw() {
  ctx.fillStyle = randomColor();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 50; i++) {
    ctx.fillStyle = randomColor();
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var size = Math.random() * 100;
    ctx.fillRect(x, y, size, size);
  }
  requestAnimationFrame(draw);
}

draw();
