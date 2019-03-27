var canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function animate() {

    requestAnimationFrame(animate);

    ctx.clearRect(0,0,innerWidth, innerHeight);

    c.fillStyle = 'rgb(50,100,50)';

    ctx.beginPath();
    ctx.arc(window.innerWidth/2, window.innerHeight/2, 100, 0, 2 * Math.PI);
    ctx.stroke();

}

animate();