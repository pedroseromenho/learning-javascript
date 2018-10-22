var c = document.getElementById("piu");
var ctx = c.getContext("2d");
var h = parseInt(document.getElementById("piu").getAttribute("height"));
var w = parseInt(document.getElementById("piu").getAttribute("width"));

// background
ctx.fillStyle = "black";
ctx.fillRect(0,0,w,h);

// cible
ctx.beginPath();
ctx.arc(300,75,50,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(300,75,40,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(300,75,30,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(300,75,20,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(300,75,10,0,2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

// canon
ctx.beginPath();
ctx.moveTo(255, 570);
ctx.lineTo(275, 440);
ctx.stroke();
ctx.strokeStyle="white";
ctx.moveTo(345, 570);
ctx.lineTo(315, 440);
ctx.lineWidth=5;
ctx.stroke();
ctx.strokeStyle="white";
ctx.closePath();
ctx.beginPath();
ctx.ellipse(295, 440, 5, 22, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.ellipse(300, 610, 50, 70, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.strokeStyle="white";
ctx.closePath();

