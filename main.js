function preload() {

}

function setup() {
    canvas = createCanvas(640, 450);
    canvas.position(440, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 100, 80, 440, 290);
    tint(tint_color);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(580, 50 ,50);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(50, 50 ,50);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(50, 390 ,50);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    circle(580, 390 ,50);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(60, 30, 510, 40);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(60, 370, 510, 40);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(30, 40, 40, 340);

    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(560, 40, 40, 340);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}