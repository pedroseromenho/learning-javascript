var c = document.getElementById("flag");
var ctx = c.getContext("2d");

// Drappeau Portugal

ctx.beginPath();
ctx.fillStyle = "#00661a";
ctx.fillRect(20,20,150,200);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#ff0017";
ctx.fillRect(170,20,200,200);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#fefe53"
ctx.arc(170, 120, 55, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

// Drappeau Marroc

ctx.beginPath();
ctx.fillStyle = "#c62430";
ctx.fillRect(470,20,350,200);
ctx.closePath();

var canvas, ctx, length = 35;
ctx.translate(625, 120);
ctx.rotate((Math.PI * 1 / 10));
for (var i = 5; i--;) {
    ctx.lineTo(0, length);
    ctx.translate(0, length);
    ctx.rotate((Math.PI * 2 / 10));
    ctx.lineTo(0, -length);
    ctx.translate(0, -length);
    ctx.rotate(-(Math.PI * 6 / 10));
}
ctx.lineTo(0, length);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

var d = document.getElementById("boat");
var ctx = d.getContext("2d");

// Bateau

// Voile
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 400);
ctx.lineTo(400, 400);
ctx.closePath();
ctx.fillStyle = "rgb(0, 0, 255, 0.5)";
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "rgb(0, 0, 255, 1)";
ctx.stroke();

// Coque

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(200,450);
ctx.stroke();
ctx.moveTo(50,450);
ctx.lineTo(400,450);
ctx.stroke();
ctx.moveTo(50,450);
ctx.lineTo(100,500);
ctx.stroke();
ctx.moveTo(100,500);
ctx.lineTo(350,500);
ctx.stroke();
ctx.moveTo(350,500);
ctx.lineTo(400,450);
ctx.stroke();
ctx.closePath();

// Maison

var d = document.getElementById("house");
var ctx = d.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "rgb(255, 0, 0, 1)";
ctx.lineWidth = 5;
ctx.strokeRect(200,200,400,400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(0, 255, 0, 1)";
ctx.moveTo(200, 200);
ctx.lineTo(400, 0);
ctx.lineTo(600, 200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "rgb(0, 0, 255, 1)";
ctx.lineWidth = 5;
ctx.strokeRect(250,250,50,50);
ctx.stroke();
ctx.strokeStyle = "rgb(0, 0, 255, 1)";
ctx.lineWidth = 5;
ctx.strokeRect(500,250,50,50);
ctx.stroke();
ctx.strokeStyle = "rgb(0, 0, 255, 1)";
ctx.lineWidth = 5;
ctx.strokeRect(350,450,100,150);
ctx.stroke();
ctx.closePath();
