function drawPoligon(ev) {
       
        var stage = ev.target.stage;
        var mainLayer = ev.target.mainLayer;
        
        var mouseClickX,
          mouseClickY;
        var points = [];
        if (points.lenght!==0) {
            points = [];
        }
        $('#canvas-container').on('mousedown', function (ev) {
            collectMouseCoord(ev);
        });
        
        $('#canvas-container').on('dblclick', function (ev) {
            drawFigure(ev, stage, mainLayer);
        });
        //$('#canvas-container').off('mousedown', function (ev) {
        //    collectMouseCoord(ev);
        //});
        //$('#canvas-container').off('dblclick', function (ev) {
        //    drawFigure(ev, stage, mainLayer);
        //});
       
        function collectMouseCoord(ev) {
            
            mouseClickX = ev.pageX
            mouseClickY = ev.pageY
            points.push(mouseClickX * 1);
            points.push(mouseClickY * 1);
        }

        function drawFigure(ev, stage, mainLayer) {
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