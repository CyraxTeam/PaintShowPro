function drawElipse(e) {
    var canvasOffset = $("#canvas-container").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    var startX;
    var startY;
    var isDown = false;
    var stage = e.target.stage;
    var mainLayer = e.target.mainLayer;


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
        $("#canvas-container").unbind();
        isDown = false;
    }

    function handleMouseOut(e) {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        $("#canvas-container").unbind();
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
}