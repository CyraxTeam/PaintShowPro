function drawDashedLine(stage, mainLayer) {

    var dashedLineButton = document.getElementById('dahedline');
    dashedLineButton.addEventListener('click', function () {

        var div = document.getElementById('lineProperties');
        div.style.visibility = 'visible';
         function getDashLineProp(){
            var dashValue = document.getElementById('dash').value;
            var gapValue = document.getElementById('gap').value;
            var lineProperty = [dashValue * 1, gapValue * 1];
            return lineProperty;
         }

        var paper = document.getElementById('canvas-container'),
            mouseClickX,
            mouseClickY;

        paper.addEventListener('mousedown', function (ev) {
            mouseClickX = ev.layerX
            mouseClickY = ev.layerY
            lineWeight = document.getElementById('strokeWeight').value;
            strokeColor = document.getElementById('strokeColor').value;
        });

        paper.addEventListener('mouseup', function (ev) {
            paper.style.cursor = 'crosshair';
            var dashedLine = new Kinetic.Line({
                points: [mouseClickX, mouseClickY, ev.layerX, ev.layerY],
                stroke: document.getElementById('strokeColor').value,
                strokeWidth: document.getElementById('strokeWeight').value,
                lineCap: 'round',
                lineJoin: 'round',
                dash:getDashLineProp()
            })

            mainLayer.add(dashedLine);
            stage.add(mainLayer);
        });

    }, false);
}