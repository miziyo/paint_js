const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const jsMode = document.getElementById("jsMode");
const jsClear = document.getElementById("jsClear");

canvas.width = 700;
canvas.height = 700;

ctx.strokestyle = `black`;
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
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function fillCanvas() {
	ctx.rect(0, 0, 700, 700);
	ctx.fillStyle = `black`;
	ctx.fill();
}

function clearCanvas() {
	ctx.rect(0, 0, 700, 700);
	ctx.fillStyle = `white`;
	ctx.fill();
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
