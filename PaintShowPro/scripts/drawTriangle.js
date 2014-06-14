function drawTriangle(ev, stage, mainLayer) {
    var stage = ev.target.stage;
    var mainLayer = ev.target.mainLayer;
    var clickCounter = 0;
    var mouseClickX,
      mouseClickY;
    var points = [];
    if (points.lenght !== 0) {
        points = [];
    }

    $('#canvas-container').on('mousedown', function (ev) {
        collectMouseCoord(ev);
        if (++clickCounter === 3) {
            drawTriangleFigure(ev, stage, mainLayer);
        }
    });

    function collectMouseCoord(ev) {
        var mousePos = stage.getPointerPosition();
        mouseClickX = mousePos.x;
        mouseClickY = mousePos.y;
        points.push(mouseClickX * 1);
        points.push(mouseClickY * 1);
    }

    function drawTriangleFigure(ev, stage, mainLayer) {
        collectMouseCoord(ev);

        var poly = new Kinetic.Line({
            points: points,
            fill: document.getElementById('fillColor').value,
            stroke: document.getElementById('strokeColor').value,
            strokeWidth: document.getElementById('strokeWeight').value,
            closed: true,
            draggable: true
        });

        mainLayer.add(poly);
        stage.add(mainLayer);
        points = [];
        $("#canvas-container").unbind();
    }
}