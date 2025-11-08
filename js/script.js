const images = ["./images/virat.png", "./images/abhishek.png", "./images/ishan.png", "./images/rohit.png", "./images/shubhman.png", "./images/shreyas.png", "./images/ravindra.png"]

let index = 0;
const slide = document.getElementById("slide");

function next() {
    if (index < images.length - 1) {
        index++;
    }
    else {
        index = 0;
    }
    slide.src = images[index];
}

function prev() {
    if (index > 0) {
        index--;
    }
    else {
        index = images.length - 1;
    }
    slide.src = images[index];
}

setInterval(next, 3000);