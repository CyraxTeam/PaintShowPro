function drawLine(ev) {
    var stage = ev.target.stage;
    var mainLayer = ev.target.mainLayer;
    var points = [];
    var mouseClickX,
    mouseClickY;

    $('#canvas-container').on('mousedown', function (ev) {
        getPointCooord(ev);
    });

    $('#canvas-container').on('mouseup', function (ev) {
        drawLine(ev);
    });

    function getPointCooord(ev) {
        var mousePos = stage.getPointerPosition();
        mouseClickX = mousePos.x;
        mouseClickY = mousePos.y;
        points.push(mouseClickX * 1);
        points.push(mouseClickY * 1);
    }

    function drawLine(ev) {

        getPointCooord(ev);
        var dashedLine = new Kinetic.Line({
            points: points,
            stroke: document.getElementById('strokeColor').value,
            strokeWidth: document.getElementById('strokeWeight').value,
            draggable: true
        })
        mainLayer.add(dashedLine);
        stage.add(mainLayer);
        points = [];
        $('#canvas-container').unbind();
    }
}