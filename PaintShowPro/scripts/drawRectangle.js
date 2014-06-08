function drawRectangle(stage) {
    var isMouseDown = false,
        mouseClickX,
        mouseClickY,
        rectStroke = document.getElementById('strokeColor').value,
        rectStrokeWidth = document.getElementById('strokeWeight').value,
        rectFill = document.getElementById('fillColor').value,
        rectLayer = new Kinetic.Layer;


    var dynamicRectangle = new Kinetic.Rect({
        width: 100,
        height: 100,
        fill: rectFill,
        stroke: rectStroke,
        strokeWidth: rectStrokeWidth
    });

    rectLayer.add(dynamicRectangle);
    stage.add(rectLayer);
}