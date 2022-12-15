function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(9);
    stroke(700, 100, 35);
    noFill();
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    strokeWeight(7);
    stroke(600, 400, 35);
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);


    strokeWeight(5);
    stroke(400, 100, 170);
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    push();
    rotate(secondAngle);
    stroke(700, 100, 35);
    strokeWeight(2);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(600, 400, 35);
    strokeWeight(3);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(hourAngle);
    stroke(400, 100, 170);
    strokeWeight(5);
    line(0, 0, 50, 0);
    pop();

    stroke(255);
    point(0, 0);

}