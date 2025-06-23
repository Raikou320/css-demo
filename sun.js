const canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = Math.min(window.innerHeight / 5, window.innerWidth / 5);
canvas.height = Math.min(window.innerHeight / 5, window.innerWidth / 5);
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const branchCount = 10;

function drawBranch(x, y, width, height, angle) {
    ctx.fillStyle = '#EFB54A';
    ctx.save();
    ctx.fillRect(x, y, width, height);
    ctx.rotate(angle);
    ctx.restore();
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.fillStyle = '#EFB54A';
    ctx.arc(centerX, centerY, canvas.width / 3, 0, 2 * Math.PI);
    ctx.shadowColor = '#FFF54A';
    ctx.shadowBlur = 25;
    ctx.fill();
    requestAnimationFrame(draw);
}

draw();