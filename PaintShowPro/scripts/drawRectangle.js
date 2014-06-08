﻿function drawRectangle(stage, mainLayer) {
    var isMouseDown = false,
        startX,
        startY,
        mouseX,
        mouseY,
        endX,
        endY,
        dynamicRectangle,
        rectStroke = document.getElementById('strokeColor').value,
        rectStrokeWidth = document.getElementById('strokeWeight').value,
        rectFill = document.getElementById('fillColor').value,
        rectLayer = new Kinetic.Layer,
        squareButton = document.getElementById('square');

    squareButton.removeEventListener('click', drawRectangle);

    $("#canvas-container").mousedown(function (e) {
        handleMouseDown(e);
    });

    $("#canvas-container").mousemove(function (e) {
        handleMouseMove(e);
    });

    $("#canvas-container").mouseup(function (e) {
        handleMouseUp(e);
    });

    function drawDynamicRectangle() {
        dynamicRectangle = new Kinetic.Rect({
            x: startX,
            y: startY,
            width: (mouseX - startX),
            height: (mouseY - startY),
            fill: rectFill,
            stroke: rectStroke,
            strokeWidth: rectStrokeWidth,
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

        rectLayer.removeChildren();
        e.preventDefault();
        e.stopPropagation();
        var mousePos = stage.getPointerPosition();
        mouseX = mousePos.x;
        mouseY = mousePos.y;
        drawDynamicRectangle();
        rectLayer.add(dynamicRectangle);
        stage.add(rectLayer);
    }

    function handleMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        mainLayer.add(dynamicRectangle)
        stage.add(mainLayer);
        isMouseDown = false;
    }

}