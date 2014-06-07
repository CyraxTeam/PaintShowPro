// changed background color just for testing
window.onload = function () {
    document.body.style.backgroundColor = 'rgba(231, 142, 218, 1)';

    ///////////////// pen - draw free line
    var canvas = document.getElementById('sheet');
    var ctx = canvas.getContext('2d');

    var penButton = document.getElementById('penRasterBtn')
    penButton.addEventListener('click', function () { drawPen() });

    function drawPen() {
        var isMouseDown = false;
        var mouseClickX;
        var mouseClickY;

        canvas.addEventListener('mousedown', function (ev) {
            isMouseDown = true;
            mouseClickX = ev.pageX - this.offsetLeft;
            mouseClickY = ev.pageY - this.offsetTop;
            ctx.lineWidth = document.getElementById('strokeWeight').value;
            ctx.strokeStyle = document.getElementById('strokeColor').value;
        });
        canvas.addEventListener('mouseup', function () { isMouseDown = false; });
        canvas.addEventListener('mousemove', function (ev) {
            canvas.style.cursor = 'crosshair';
            if (isMouseDown) {
                ctx.beginPath();
                ctx.moveTo(mouseClickX, mouseClickY);
                ctx.lineCap = 'round';
                ctx.lineTo(ev.pageX - this.offsetLeft, ev.pageY - this.offsetTop);
                ctx.stroke();

                mouseClickX = ev.pageX - this.offsetLeft;
                mouseClickY = ev.pageY - this.offsetTop;
            }
        });
    }
    /////////////////
}
// end of testing - Can be deleted