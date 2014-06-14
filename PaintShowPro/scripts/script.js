window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 900,
        height: 600
    });

    var mainLayer = new Kinetic.Layer();
    stage.add(mainLayer);


    ///////////////// pen - draw free line

    var penButton = document.getElementById('penRasterBtn')
    penButton.addEventListener('click', drawPen);
    penButton.stage = stage;
    penButton.mainLayer = mainLayer;

    var squareButton = document.getElementById('square');
    squareButton.addEventListener('click', drawRectangle);
    squareButton.stage = stage;
    squareButton.mainLayer = mainLayer;

    var circleButton = document.getElementById('circle');
    circleButton.addEventListener('click', drawCircle);
    circleButton.stage = stage;
    circleButton.mainLayer = mainLayer;

    var elipseButton = document.getElementById('elipse');
    elipseButton.addEventListener('click', drawElipse);
    elipseButton.stage = stage;
    elipseButton.mainLayer = mainLayer;

    var textButton = document.getElementById('text');
    textButton.addEventListener('click', drawText);
    textButton.stage = stage;
    textButton.mainLayer = mainLayer;

    var dashedLineButton = document.getElementById('dashedline');
    dashedLineButton.addEventListener('click', drawDashedLine);
    dashedLineButton.stage = stage;
    dashedLineButton.mainLayer = mainLayer;

    var poligonButton = document.getElementById('poligon');
    poligonButton.addEventListener('click', drawPoligon);
    poligonButton.stage = stage;
    poligonButton.mainLayer = mainLayer;

    var clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clearDrawBoard);
    clearButton.stage = stage;
    clearButton.mainLayer = mainLayer;

    var triangleButton = document.getElementById('triangle');
    triangleButton.addEventListener('click', drawTriangle);
    triangleButton.stage = stage;
    triangleButton.mainLayer = mainLayer;

    var introButton = document.getElementById('intro');
    introButton.addEventListener('click', createAnimation);
    introButton.stage = stage;
    introButton.mainLayer = mainLayer;
}