
var	
	canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = '#9b0000';
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';


ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(128.5, 10);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(271.5, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 10);
ctx.lineTo(130, 0);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270, 10);
ctx.lineTo(270, 0);
ctx.stroke();
//вертикальная линия


ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(200, 50);
ctx.stroke();



ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(365, 50);
ctx.stroke();

//черточкаи вниз

ctx.beginPath();
ctx.moveTo(365, 50);
ctx.lineTo(365, 60);
ctx.stroke();
//////////////////////
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(30, 50);
ctx.stroke();

//черточкаи вниз

ctx.beginPath();
ctx.moveTo(30, 50);
ctx.lineTo(30, 60);
ctx.stroke();



///ВТОРОЕ ПОКОЛЕНИЕ


var	
	canvas = document.getElementById('canvas2'),
	ctx = canvas.getContext('2d');
	ctx.lineWidth = 3;
	ctx.strokeStyle = '#9b0000';
	ctx.lineJoin = 'round';

	ctx.shadowOffsetX=3;
	ctx.shadowOffsetY=3;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black';
	
// линия Урди

ctx.beginPath();
ctx.moveTo(1330, 0);
ctx.lineTo(1330, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1325, 20);
ctx.lineTo(850, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(850, 20);
ctx.lineTo(850, 61);
ctx.stroke();

// линия Угъланагьа

ctx.beginPath();
ctx.moveTo(1125, 20);
ctx.lineTo(1125, 60);
ctx.stroke();

// линия Гьяжирамазан

ctx.beginPath();
ctx.moveTo(1325, 20);
ctx.lineTo(1375, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1375, 20);
ctx.lineTo(1375, 60);
ctx.stroke();

// линия Герек 

ctx.beginPath();
ctx.moveTo(1375, 20);
ctx.lineTo(1625, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1625, 20);
ctx.lineTo(1625, 60);
ctx.stroke();


// линия Аьбдурагьман 

ctx.beginPath();
ctx.moveTo(1625, 20);
ctx.lineTo(1875, 20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1875, 20);
ctx.lineTo(1875, 60);
ctx.stroke();

// линия Мягьмуд

ctx.beginPath();
ctx.moveTo(1665, 0);
ctx.lineTo(1665, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1665, 10);
ctx.lineTo(2540, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2540, 10);
ctx.lineTo(2540, 60);
ctx.stroke();


// линия Аьлиэкбер

ctx.beginPath();
ctx.moveTo(2540, 10);
ctx.lineTo(2750, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2750, 10);
ctx.lineTo(2750, 60);
ctx.stroke();

// линия Зюгьре

ctx.beginPath();
ctx.moveTo(2750, 10);
ctx.lineTo(2960, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(2960, 10);
ctx.lineTo(2960, 60);
ctx.stroke();
