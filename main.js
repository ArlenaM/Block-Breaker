let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

function drawPaddle(){
	ctx.fillRect(150, 350, 75, 10);
}

function drawBall(){
	ctx.beginPath();
	ctx.arc(185, 250, 10, 0, 2 * Math.PI);
	ctx.stroke();
}

function generateBlocks(){

}

function movePaddle(){

}

function breakBlock(){

}

function didIWin(){

}

function playGame(){
	drawPaddle();
	drawBall();
}

playGame();