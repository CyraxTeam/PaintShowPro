var drawLine = document.getElementById('line');

drawLine.addEventListener('click', function () {

    var canvas = document.getElementById('the-canvas');
    canvas.style.display = 'block';
    var ctx = canvas.getContext('2d');
    var oldX;
    var oldY;
    var newX;
    var newY;
    var isTheMouseDown = false;
    canvas.addEventListener('mousedown', function (event) {

        isTheMouseDown = true;
        var x = event.x;
        var y = event.y;
        var canvas = document.getElementById('the-canvas');
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        oldX = x;
        oldY = y;
    });

    canvas.addEventListener('mouseup', function (event) {

        isTheMouseDown = false;
        var x = event.x;
        var y = event.y;
        var canvas = document.getElementById('the-canvas');
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        newX = x;
        newY = y;

        var stroke = document.getElementById('strokeColor').value;
        var strokeWidth = document.getElementById('strokeWeight').value;

        ctx.beginPath();
        ctx.strokeStyle = stroke;
        ctx.lineWidth = strokeWidth;
        ctx.moveTo(oldX, oldY);
        ctx.lineTo(newX, newY);
        ctx.stroke();
    });
});

