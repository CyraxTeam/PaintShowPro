function clearDrawBoard(e) {
    var stage = e.target.stage,
        mainLayer = e.target.mainLayer;

    mainLayer.destroy();

    var mainLayer = new Kinetic.Layer();
    stage.add(mainLayer);

    var introLayer = document.getElementById('holder');
    introLayer.innerHTML = "";
}