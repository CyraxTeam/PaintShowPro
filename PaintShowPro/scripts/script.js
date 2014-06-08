window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 900,
        height: 600
    });

    var mainLayer = new Kinetic.Layer();

    ///////////////// pen - draw free line

    var penButton = document.getElementById('penRasterBtn')
    penButton.addEventListener('click', function () { drawPen() });

    var squareButton = document.getElementById('square');
    squareButton.addEventListener('click', function () { drawRectangle() });

    function drawPen() {
        var isMouseDown = false;
        var mouseClickX;
        var mouseClickY;

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
    /////////////////
}