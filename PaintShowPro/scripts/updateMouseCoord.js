(function () {
    var canvas = document.getElementById('canvas-container');

    function writeMessage(canvas,message) {
        var CoordCont = document.getElementById('coordinates');
        CoordCont.innerHTML = message;
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'X: ' + mousePos.x + ' Y: ' + mousePos.y;
        writeMessage(canvas, message);
    }, false);
}())