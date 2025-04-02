let WIDTH = 800;
let HEIGHT = 600;

const config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let ball;
let ballSize = 80;
let yspeed = 1.5;
let xspeed = 1.0;

function preload() {
    this.load.image("ball", "assets/ball.png"); // watch out for case sensitivity
}

function create() {
    ball = this.add.sprite(WIDTH / 2, HEIGHT / 2, "ball"); // x, y, and the ball "key"
    ball.setDisplaySize(ballSize, ballSize); // width, height
}

function update() {
    ball.y += yspeed;
    ball.x += xspeed;

    // The || sign means "or"
    if (ball.y >= HEIGHT - ballSize / 2 || ball.y <= ballSize / 2) {
        // Multiplying by -1 will "flip" the direction
        yspeed *= -1;
    }

    if (ball.x >= WIDTH - ballSize / 2 || ball.x <= ballSize / 2) {
        xspeed *= -1;
    }
}


// ...existing code...

let ball;
let ballVelocityX = 200; // Initial X velocity
let ballVelocityY = 200; // Initial Y velocity

function preload() {
    // Load the ball texture
    this.load.image('ball', 'assets/ball.png'); // Replace with the correct path to your ball image
}

function create() {
    // Create the ball sprite
    ball = this.physics.add.sprite(400, 300, 'ball');
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
    ball.setVelocity(ballVelocityX, ballVelocityY);

    // Make the ball interactive
    ball.setInteractive();

    // Add a click event listener to the ball
    ball.on('pointerdown', () => {
        // Reduce the ball's size by 10%
        ball.setScale(ball.scaleX * 0.9, ball.scaleY * 0.9);

        // Increase the ball's speed by 10%
        ballVelocityX *= 1.1;
        ballVelocityY *= 1.1;
        ball.setVelocity(ballVelocityX, ballVelocityY);
    });
}

function update() {
    // Game loop logic (if any)
}

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialize the Phaser game
const game = new Phaser.Game(config);