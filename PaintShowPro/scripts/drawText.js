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

            console.log(textToAdd);
            console.log('ENTER!!!');
            textarea.parentNode.removeChild(textarea);
            var text = new Kinetic.Text({
                x: 10,
                y: 15,
                text: textToAdd,
                fontSize: 30,
                fontFamily: 'Calibri',
                fill: 'green',
                draggable: true
            });
            mainLayer.add(text);
            stage.add(mainLayer);
            document.removeEventListener('keypress', readText);
        }
    });


}