let hits=0;
const hitCounter = document.getElementById("counter");
const pop = new Audio('pop.mp3');
console.log(document.cookie);
if(document!="") {
    const nam="counter=";
    let c = document.cookie;
    c = c.substring(nam.length,c.length);
    if(c!="") hits=c;
    hitCounter.innerHTML = "Hits: " + hits;
}

function setRand(avoid) {
    let random = avoid;
    while(avoid == random) {
        random = "b"+(Math.floor(Math.random() * 20) + 1);
    }
    console.log(random);
    return document.getElementById(random);
}

function newRand(ele) {
    ele.removeEventListener("click", handleClick);
    ele.removeAttribute("class")
    ele.innerHTML="";
    addclick(ele.getAttribute("id"));
}

function handleClick(event) {
    newRand(event.currentTarget);
    hits++;
    document.cookie="counter="+hits+"; path=/";
    console.log(document.cookie);
    pop.play();
    hitCounter.innerHTML = "Hits: " + hits;
}

function addclick(id) {
    let element = setRand(id);
    
    if (!element) {
        console.error("Element not found");
        return;
    }

    element.innerHTML = "Hit";
    element.setAttribute("class","hitme");
    element.addEventListener("click", handleClick);
    
}

addclick("b0");