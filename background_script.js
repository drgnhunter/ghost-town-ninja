const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 900;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'background_layers/1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'background_layers/2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'background_layers/3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'background_layers/4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'background_layers/5.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'background_layers/6.png';
const backgroundLayer7 = new Image();
backgroundLayer6.src = 'background_layers/7.png';


class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 1920;
        this.height = 900;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    //correct
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);

    }
}

const layer1 = new Layer(backgroundLayer1, 0.4);
const layer2 = new Layer(backgroundLayer2, 0.6);
const layer3 = new Layer(backgroundLayer3, 0.8);
const layer4 = new Layer(backgroundLayer4, 1.0);
const layer5 = new Layer(backgroundLayer5, 1.2);
const layer6 = new Layer(backgroundLayer6, 1.4);
const layer7 = new Layer(backgroundLayer7, 1.6);

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7];


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });

    requestAnimationFrame(animate);
}

animate();