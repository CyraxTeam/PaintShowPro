function drawText(e) {
    var inputField = document.createElement('textarea'),
        stage = e.target.stage,
        mainLayer = e.target.mainLayer;
    inputField.id = 'textarea-text-to-draw';
    var styles = 'width: 500px; height: 100px; top: 200px; left: 200px; position: absolute';
    inputField.setAttribute('style', styles);
    inputField.focus();

    document.body.appendChild(inputField);
    document.getElementById('textarea-text-to-draw').focus();

    document.addEventListener('keypress', function readText(e) {
        var key = e.which || e.keyCode;
        if (key == 13) { // 13 is enter
            var textarea = document.getElementById('textarea-text-to-draw');
            var textToAdd = textarea.value;

            textarea.parentNode.removeChild(textarea);
            var text = new Kinetic.Text({
                x: 10,
                y: 15,
                text: textToAdd,
                fontFamily: 'Calibri',
                fill: document.getElementById('fillColor').value,
                stroke: document.getElementById('strokeColor').value,
                fontSize: 30 + document.getElementById('strokeWeight').value * 5,
                draggable: true
            });
            mainLayer.add(text);
            stage.add(mainLayer);
            document.removeEventListener('keypress', readText);
        }
    });


}