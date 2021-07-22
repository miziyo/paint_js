const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokestyle = "#000000";
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

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPaining);
	canvas.addEventListener("mouseleave", stopPaining);
}
