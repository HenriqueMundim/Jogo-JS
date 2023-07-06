let person;
let grass;
let fim;
const tamanho = 64;
const velocidade = 64;

let andarX = 0;
let andarY = 0;
let fimX = 512;
let fimY = 512;
let restart;

function setup() {
    createCanvas(576, 576);
    person = loadImage('person.png');
    grass = loadImage('grass.jpg');
    carne = loadImage('carne.png');
}

function draw() {
    background(220);

    if (andarX < 0) {
        andarX = 0;
    }
    if (andarY < 0) {
        andarY = 0;
    }
    if (andarX > tamanho * 8) {
        andarX = tamanho * 8;
    }
    if (andarY > tamanho * 8) {
        andarY = tamanho * 8;
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grass, tamanho * i, tamanho * j, tamanho, tamanho);
        }
    }
    image(carne, fimX, fimY, tamanho, tamanho);
    image(person, andarX, andarY, tamanho, tamanho);

    if (andarX === fimX && andarY === fimY) {
        rect(160, 160, 256, 256);
        textSize(35);
        text('Ganhou', 220, 300);
        restart = createButton('Reiniciar');
        restart.mousePressed(reset);
        noLoop();
    }

    text(`x:${andarX} y:${andarY}`, 10, 566);
}

function reset() {
    andarX = 0;
    andarY = 0;
    restart.remove();
    textSize(12)
    fimX = parseInt(random(0, 8), 10) * 64;
    fimY = parseInt(random(0, 8), 10) * 64;
    loop();
}

function keyPressed() {
    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade;
    }
    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade;
    }
    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade;
    }
}
