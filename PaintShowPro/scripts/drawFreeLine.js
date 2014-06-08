function drawPen(stage, layer) {
    //var penButton = document.getElementById('penRasterBtn')

    var isMouseDown = false;
    var mouseClickX;
    var mouseClickY;
    var lineWeight = 1;
    var strokeColor = 'black';

    var paper = document.getElementById('canvas-container');

    paper.addEventListener('mousedown', function (ev) {
        isMouseDown = true;
        mouseClickX = ev.layerX
        mouseClickY = ev.layerY
        lineWeight = document.getElementById('strokeWeight').value;
        strokeColor = document.getElementById('strokeColor').value;

    });

    paper.addEventListener('mouseup', function () {
        isMouseDown = false;
        //penButton.removeEventListener('click', drawPen)
    });

    paper.addEventListener('mousemove', function (ev) {
        paper.style.cursor = 'crosshair';
        if (isMouseDown) {
            var freeLine = new Kinetic.Line({
                points: [mouseClickX, mouseClickY, ev.layerX, ev.layerY],
                stroke: strokeColor,
                strokeWidth: lineWeight,
                lineCap: 'round',
                lineJoin: 'round'
            })

            mouseClickX = ev.layerX
            mouseClickY = ev.layerY

            layer.add(freeLine);
            stage.add(layer);
        }
    });
}