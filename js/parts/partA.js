const HUD_HEIGHT = 80;
const TIMER_RHYTHM=0.1*Phaser.Timer.SECOND;
const PRODUCTOS_GROUP_SIZE = 200;




let background;

let letters;

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

    game.load.image('fruta',
        'assets/imgs/fruta.png');

    game.load.image('botella',
        'assets/imgs/ufo.png');

    game.load.image('brick',
        'assets/imgs/brick.png');

    game.load.image('verdura',
        'assets/imgs/verdura.png');
};

function createPartAState () {
    let w = game.world.width;
    let h = game.world.height;
    background = game.add.tileSprite(
        0, 0, w, h, 'background');

    createCarrito();
    createHUD();

    letters = game.add.group();
    letters.inputEnableChildren = true;
    game.input.keyboard.onDownCallback = getKeyboardInput;

};

function updatePartAState () {
    background.tilePosition.y += 1;
};


function getKeyboardInput(e) {
    if (e.keyCode >= Phaser.Keyboard.A && e.keyCode <= Phaser.Keyboard.Z) {
        let a = game.add.text(Math.random() * game.width, Math.random() * game.height, e.key, {fontSize: '40px', fill: '#FA2'}, letters); // group to add to
        a.anchor.setTo(0.5, 0.5);
    }
};


function createCarrito() {
    let x = game.world.centerX;
    let y = game.world.height - HUD_HEIGHT;
    carrito = game.add.sprite(x, y, 'carrito');
    carrito.anchor.setTo(0.5, 0.5);
    carrito.scale.setTo(0.3);
    game.physics.arcade.enable(carrito);
    //carrito.body.collideWorldBounds = true;
}

function createProductos(number) {
    productos = game.add.group();
    productos.enableBody = true;
    productos.createMultiple(number, 'ufo');
    productos.callAll('events.onOutOfBounds.add',
        'events.onOutOfBounds', resetMember);
    productos.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
    productos.setAll('checkWorldBounds', true);
    currentProductoProbability = 0.2;
    currentProductoVelocity = 50;
    game.time.events.loop(
        TIMER_RHYTHM, activateProducto, this);
    currentProductoProbability =
        LEVEL_PRODUCTO_PROBABILITY[level-1];
    currentProductoVelocity =
        LEVEL_PRODUCTO_VELOCITY[level-1];
