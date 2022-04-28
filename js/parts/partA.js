const HUD_HEIGHT = 80;



let dwords;

let background;

let words;

let carrito;



let partAState = {
    preload: preloadPartAState,
    create: createPartAState,
    update: updatePartAState
};

function preloadPartAState () {
    game.load.image('background',
    'assets/imgs/supermercado.jpg');
    game.load.image('carrito',
    'assets/imgs/carrito.png');
};

function createPartAState () {
    let w = game.world.width;
    let h = game.world.height;
    background = game.add.tileSprite(
        0, 0, w, h, 'background');

    createCarrito();
    createHUD();

    words = game.add.group();
    words.inputEnableChildren = true;
    dwords=game.add.group();
    game.input.keyboard.onDownCallback = getKeyboardInput;

};

function updatePartAState () {
    background.tilePosition.y += 1;
};


function getKeyboardInput(e) {
    if (e.keyCode >= Phaser.Keyboard.A && e.keyCode <= Phaser.Keyboard.Z) {
        let a = game.add.text(Math.random() * game.width, Math.random() * game.height, e.key, {fontSize: '40px', fill: '#FA2'}, words); // group to add to
        a.anchor.setTo(0.5, 0.5);
    }
};
function displaywords(){
    
}

function createCarrito() {
    let x = game.world.centerX;
    let y = game.world.height - HUD_HEIGHT;
    carrito = game.add.sprite(x, y, 'carrito');
    carrito.anchor.setTo(0.5, 0.5);
    carrito.scale.setTo(0.3);
    game.physics.arcade.enable(carrito);
    //carrito.body.collideWorldBounds = true;
}
