function drawPen(e) {
    var isMouseDown = false;
    var mouseClickX;
    var mouseClickY,
        stage = e.target.stage,
        mainLayer = e.target.mainLayer;


    canvas.addEventListener('mousedown', function (ev) {
        isMouseDown = true;
        mouseClickX = ev.pageX - this.offsetLeft;
        mouseClickY = ev.pageY - this.offsetTop;
        ctx.lineWidth = document.getElementById('strokeWeight').value;
        ctx.strokeStyle = document.getElementById('strokeColor').value;
    });
    canvas.addEventListener('mouseup', function () { isMouseDown = false; });
    canvas.addEventListener('mousemove', function (ev) {
        canvas.style.cursor = 'crosshair';
        if (isMouseDown) {
            ctx.beginPath();
            ctx.moveTo(mouseClickX, mouseClickY);
            ctx.lineCap = 'round';
            ctx.lineTo(ev.pageX - this.offsetLeft, ev.pageY - this.offsetTop);
            ctx.stroke();

            mouseClickX = ev.pageX - this.offsetLeft;
            mouseClickY = ev.pageY - this.offsetTop;
        }
    });
}