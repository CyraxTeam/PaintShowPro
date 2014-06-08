window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 900,
        height: 600
    });

    var mainLayer = new Kinetic.Layer();
    stage.add(mainLayer);


    ///////////////// pen - draw free line

    var penButton = document.getElementById('penRasterBtn')
    penButton.addEventListener('click', function () { drawPen() });

    var squareButton = document.getElementById('square');
    squareButton.addEventListener('click', drawRectangle(stage, mainLayer));

    var circleButton = document.getElementById('circle');
    circleButton.addEventListener('click', function () { drawCircle(stage, mainLayer) });

    var elipseButton = document.getElementById('elipse');
    elipseButton.addEventListener('click', function () { drawElipse(stage,mainLayer) });

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

    function updateMouseCoord() {
        (function () {
            var canvas = document.getElementById('canvas-container');

            function writeMessage(canvas, message) {
                var CoordCont = document.getElementById('coordinates');
                CoordCont.innerHTML = message;
            }

            function getMousePos(canvas, evt) {
                var rect = canvas.getBoundingClientRect();
                return {
                    x: evt.clientX - rect.left,
                    y: evt.clientY - rect.top
                };
            }

            canvas.addEventListener('mousemove', function (evt) {
                var mousePos = getMousePos(canvas, evt);
                var message = 'X: ' + mousePos.x + ' Y: ' + mousePos.y;
                writeMessage(canvas, message);
            }, false);
        }())
    }
    updateMouseCoord();
    /////////////////

}