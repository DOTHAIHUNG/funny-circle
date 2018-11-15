function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRanNum() {
    return Math.floor(Math.random() * 255);
}

function getRanCol() {
    let red = getRanNum();
    let green = getRanNum();
    let blue = getRanNum();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function creatCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let rad = Math.random() * 200;
    let col = getRanCol();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let myCir = new Circle(x, y, rad);
    ctx.beginPath();
    ctx.arc(myCir.x, myCir.y, myCir.radius, 0, 2 * Math.PI);
    ctx.fillStyle = col;
    ctx.fill();
}

function creatMultiCir() {
    for (let i = 0; i < 20; i++) {
        creatCircle();
    }
}

creatMultiCir();