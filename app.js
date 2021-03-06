const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const jsMode = document.getElementById("jsMode");
const jsClear = document.getElementById("jsClear");
const jsBlack = document.getElementById("jsBlack");
const jsWhite = document.getElementById("jsWhite");
const jsRed = document.getElementById("jsRed");
const jsOrange = document.getElementById("jsOrange");
const jsYellow = document.getElementById("jsYellow");
const jsGreen = document.getElementById("jsGreen");
const jsSkyblue = document.getElementById("jsSkyblue");
const jsBlue = document.getElementById("jsBlue");
const jsViolet = document.getElementById("jsViolet");
const jsSave = document.getElementById("jsSave");

var jsRange = document.getElementById("jsRange");

var ctxColor = `black`;

canvas.width = 700;
canvas.height = 700;

let painting = false;

function stopPaining() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function changeBlack() {
	ctxColor = `black`;
}

function changeWhite() {
	ctxColor = `white`;
}

function changeRed() {
	ctxColor = "red";
}

function changeOrange() {
	ctxColor = `orange`;
}

function changeYellow() {
	ctxColor = `Yellow`;
}

function changeGreen() {
	ctxColor = `Green`;
}

function changeSkyblue() {
	ctxColor = `skyblue`;
}

function changeBlue() {
	ctxColor = `blue`;
}

function changeViolet() {
	ctxColor = `violet`;
}

function fillCanvas() {
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = ctxColor;
	ctx.fill();
}

var download = function(){
	var link = document.createElement('a');
	link.download = 'filename.png';
	link.href = document.getElementById('jsCanvas').toDataURL()
	link.click();
  }

function clearCanvas() {
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = `white`;
	ctx.fill();
}
if (jsBlack) {
	jsBlack.addEventListener("click", changeBlack);
}

if (jsRed) {
	jsRed.addEventListener("click", changeRed);
}

if (jsWhite) {
	jsWhite.addEventListener("click", changeWhite);
}

if (jsOrange) {
	jsOrange.addEventListener("click", changeOrange);
}

if (jsYellow) {
	jsYellow.addEventListener("click", changeYellow);
}

if (jsGreen) {
	jsGreen.addEventListener("click", changeGreen);
}

if (jsSkyblue) {
	jsSkyblue.addEventListener("click", changeSkyblue);
}

if (jsBlue) {
	jsBlue.addEventListener("click", changeBlue);
}

if (jsViolet) {
	jsViolet.addEventListener("click", changeViolet);
}

if (jsMode) {
	jsMode.addEventListener("click", fillCanvas);
}

if (jsSave) {
	jsSave.addEventListener("click", download);
}

if (jsClear) {
	jsClear.addEventListener("click", clearCanvas);
}


function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.strokeStyle = ctxColor;
		ctx.lineWidth = jsRange.value;
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPaining);
	canvas.addEventListener("mouseleave", stopPaining);
}
