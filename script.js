var image="";

function preload() {
    image = loadImage("dogCat.jpg");
}

function setup() {
    canvas = createCanvas(590, 400);
    canvas.center();
}

function draw() {
    image(image, 0, 0, 590, 400);
    fill("#ff8a82");
    text("dog", 40, 69);
    noFill();
    stroke("#ff8a82");
    rect(40, 62,400, 320);
}