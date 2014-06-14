function drawElipse(e) {
    var isMouseDown = false,
        stage = e.target.stage,
        mainLayer = e.target.mainLayer,
        startX,
        startY,
        canvasOffset = $("#canvas-container").offset(),
        offsetX = canvasOffset.left,
        offsetY = canvasOffset.top,
        dynamicElipse,
        elipseStroke = document.getElementById('strokeColor').value,
        elipseStrokeWidth = document.getElementById('strokeWeight').value,
        elipseFill = document.getElementById('fillColor').value,
        elipseLayer = new Kinetic.Layer;


    $("#canvas-container").mousedown(function (e) {
        handleMouseDown(e);
    });

    $("#canvas-container").mousemove(function (e) {
        handleMouseMove(e);
    });

    $("#canvas-container").mouseup(function (e) {
        handleMouseUp(e);
    });


    function handleMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        var mousePos = stage.getPointerPosition();
        startX = mousePos.x;
        startY = mousePos.y;
        isMouseDown = true;
    }

    function handleMouseMove(e) {
        if (!isMouseDown) {
            return;
        }

        elipseLayer.removeChildren();
        e.preventDefault();
        e.stopPropagation();
        var mousePos = stage.getPointerPosition();
        mouseX = mousePos.x;
        mouseY = mousePos.y;
        drawDynamicElipse();
        elipseLayer.add(dynamicElipse);
        stage.add(elipseLayer);
    }

    function handleMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        mainLayer.add(dynamicElipse)
        stage.add(mainLayer);
        elipseLayer.destroy();
        $("#canvas-container").unbind();
        isMouseDown = false;
    }


    function drawDynamicElipse() {

        dynamicElipse = new Kinetic.Ellipse({
            x: startX,
            y: startY,
            width: Math.abs(mouseX - startX) * 2,
            height: Math.abs(mouseY - startY) * 2,
            fill: document.getElementById('fillColor').value,
            stroke: document.getElementById('strokeColor').value,
            strokeWidth: document.getElementById('strokeWeight').value,
            draggable: true
        });
    }
}