window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 900,
        height: 600
    });

    var mainLayer = new Kinetic.Layer();
    stage.add(mainLayer);

    ///draw resizable circle
    var circleButton = document.getElementsByClassName('circle')[0];
    circleButton.addEventListener('click', function () { drawResizableCircle() });
    var canvasOffset = $("#canvas-container").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    var startX;
    var startY;
    var isDown = false;

    function drawResizableCircle() {

        $("#canvas-container").mousedown(function (e) {
            handleMouseDown(e);
        });
        $("#canvas-container").mousemove(function (e) {
            handleMouseMove(e);
        });
        $("#canvas-container").mouseup(function (e) {
            handleMouseUp(e);
        });
        $("#canvas-container").mouseout(function (e) {
            handleMouseOut(e);
        });
    }

    function handleMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        startX = parseInt(e.clientX - offsetX);
        startY = parseInt(e.clientY - offsetY);
        isDown = true;
    }

    function handleMouseUp(e) {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        isDown = false;
    }

    function handleMouseOut(e) {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        isDown = false;
    }

    function handleMouseMove(e) {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);
        drawOval(mouseX, mouseY);
    }

    function drawOval(x, y) {
        var oval = new Kinetic.Shape({
            sceneFunc: function (context) {
                context.clearRect(0, 0, 900, 600);
                context.beginPath();
                context.moveTo(startX, startY + (y - startY) / 2);
                context.bezierCurveTo(startX, startY, x, startY, x, startY + (y - startY) / 2);
                context.bezierCurveTo(x, y, startX, y, startX, startY + (y - startY) / 2);
                context.closePath();
                context.stroke();
            }
        });
        mainLayer.add(oval);
        stage.add(mainLayer);
    }

    ///////////////// pen - draw free line

    var penButton = document.getElementById('penRasterBtn')
    penButton.addEventListener('click', function () { drawPen() });

    var squareButton = document.getElementById('square');
    squareButton.addEventListener('click', function () { drawRectangle(stage, mainLayer) });

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