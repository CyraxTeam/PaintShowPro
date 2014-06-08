function drawCircle(stage, mainLayer) {
    var isMouseDown = false,
        startX,
        startY,
        mouseX,
        mouseY,
        endX,
        endY,
        dynamicRectangle,
        circleStroke = document.getElementById('strokeColor').value,
        circleStrokeWidth = document.getElementById('strokeWeight').value,
        circleFill = document.getElementById('fillColor').value,
        circleLayer = new Kinetic.Layer;


    $("#canvas-container").mousedown(function (e) {
        handleMouseDown(e);
    });

    $("#canvas-container").mousemove(function (e) {
        handleMouseMove(e);
    });

    $("#canvas-container").mouseup(function (e) {
        handleMouseUp(e);
        return;
    });

    function drawDynamicCircle() {
        dynamicCircle = new Kinetic.Circle({
            x: startX,
            y: startY,
            radius: Math.sqrt(Math.pow(mouseX-startX,2) + Math.pow(mouseY-startY,2)),
            //width: (mouseX - startX),
            //height: (mouseY - startY),
            fill: circleFill,
            stroke: circleStroke,
            strokeWidth: circleStrokeWidth,
            draggable: true

        });

    }

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

        circleLayer.removeChildren();
        e.preventDefault();
        e.stopPropagation();
        var mousePos = stage.getPointerPosition();
        mouseX = mousePos.x;
        mouseY = mousePos.y;
        drawDynamicCircle();
        circleLayer.add(dynamicCircle);
        stage.add(circleLayer);
    }

    function handleMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        mainLayer.add(dynamicCircle)
        stage.add(mainLayer);
        isMouseDown = false;
    }
}