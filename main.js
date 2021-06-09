canvas = document.getElementById("myCanvas");
color = "blue";
 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(210, 200, 40 ,0 , 2 * Math.PI)
ctx.stroke();
 
canvas = document.getElementById("myCanvas");
color = "black";
 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 200, 40 ,0 , 2 * Math.PI)
ctx.stroke();

canvas = document.getElementById("myCanvas");
color = "red";
 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(390, 200, 40 ,0 , 2 * Math.PI)
ctx.stroke();

canvas = document.getElementById("myCanvas");
color = "yellow";
 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(250, 240, 40 ,0 , 2 * Math.PI)
ctx.stroke();


canvas = document.getElementById("myCanvas");
color = "green";
 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(350, 240, 40 ,0 , 2 * Math.PI)
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
 
function my_mousedown(e)
{
   mouse_x = e.clientX - canvas.offsetLeft;
   mouse_y = e.clientY - canvas.offsetTop;
 
   console.log("X = " + mouse_x + " ,Y = " + mouse_y);
   circle(mouse_x , mouse_y);
 
}

canvas = document.getElementById("myCanvas");
color = "grey";
 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;
ctx.rect(140, 147, 320 ,150 , 20 * Math.PI)
ctx.stroke();
 

