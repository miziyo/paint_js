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

var ctxColor = `black`;

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 2.5;

let painting = false;

function stopPaining() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.strokeStyle = ctxColor;
		ctx.lineTo(x, y);
		ctx.stroke();
	}
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

function fillCanvas() {
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = ctxColor;
	ctx.fill();
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
}
if (jsMode) {
	jsMode.addEventListener("click", fillCanvas);
}

if (jsClear) {
	jsClear.addEventListener("click", clearCanvas);
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPaining);
	canvas.addEventListener("mouseleave", stopPaining);
}
