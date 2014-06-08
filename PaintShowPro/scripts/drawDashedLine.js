(function () {
    var lineButton = document.querySelector('button.dahedline');
    lineButton.addEventListener('click', onDashLienButtonClick);

    function onDashLienButtonClick(ev) {
        var lineProp = document.getElementById('lineProperties');
        lineProp.style.visibility = 'visible';
        var dash = document.getElementById('dash');
        var gap = document.getElementById('gap');
        dash.addEventListener('change', getDashValue);
        dash.addEventListener('change', getGapValue);
        var dashValue = document.getElementById('dash').value;
        var gapValue = document.getElementById('gap').value;
        var dash = [dashValue * 1, gapValue * 1];



        function getDashValue() {
            var dashValue = document.getElementById('dash').value;
            return dashValue;
        }
        function getGapValue() {
            var gapValue = document.getElementById('gap').value;
            return gapValue;
        }
    }


}())