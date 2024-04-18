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
		
		hexagon.id = `hexagon_${i}_${j}`;
		
        hexagon.style.marginRight = '0px';
        row.appendChild(hexagon);
		//const rect = hexagon.getBoundingClientRect();
		//console.log("x:"+rect.left+"y:"+rect.top);
    }
    container.appendChild(row);
}
function hexagonShift(mouseX,mouseY) {
    const hexagonPositions = [];

    for (let i = 0; i < hexagonPattern.length; i++) {
        for (let j = 0; j < hexagonPattern[i]; j++) {
            const hexagonId = `hexagon_${i}_${j}`;
            const hexagonElement = document.getElementById(hexagonId);
            const rect = hexagonElement.getBoundingClientRect();
            const x1 = rect.left + rect.width / 2;
            const x2 = mouseX;
            const y1 = rect.top + rect.height / 2;
            const y2 = mouseY;

            const scaley =  Math.min(1.05,(Math.sqrt(Math.abs(x1-x2)**2+Math.abs(y1-y2)**2))/300);
            hexagonElement.style.transform = `scale(${scaley}, ${scaley})`;
            //console.log(Math.min(1,(Math.sqrt(Math.abs(x1-x2)^2+Math.abs(y1-y2)^2))/20));
            // Push the position of the hexagon to the array
            hexagonPositions.push({
                id: hexagonId,
                x: rect.left,
                y: rect.top
            });
        }
    }

    return hexagonPositions;
}
// const positions = getHexagonPositions();
// console.log(positions);

(function() {
    var mousePos;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }
    function getMousePosition() {
        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            hexagonShift(pos.x,pos.y);
        }
    }
})();