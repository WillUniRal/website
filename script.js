function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

const container = document.querySelector('.container');
const hexagonPattern = [13, 12, 13, 12, 13, 12, 13, 12, 13, 12];

for (let i = 0; i < hexagonPattern.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < hexagonPattern[i]; j++) {
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');
        // Add spacing between hexagons
        hexagon.style.marginRight = '0px';
        row.appendChild(hexagon);
    }
    container.appendChild(row);
}
function mouse_position() {
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    document.Form1.posx.value = posX;
    document.Form1.posy.value = posY;

    var t = setTimeout(mouse_position,100);

}