const HUD_HEIGHT = 80;
const TIMER_RHYTHM=0.1*Phaser.Timer.SECOND;
const PRODUCTOS_GROUP_SIZE = 200;
const PARTEA_PRODUCTO_VELOCITY = 200;
const PARTEA_PRODUCTO_PROBABILITY = 0.02;


let background;

let letters;

let carrito;


let currentProductoProbability;
let currentProductoVelocity;

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
        'assets/imgs/botella.png');

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
    createProductos(PRODUCTOS_GROUP_SIZE);
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
    productos.scale.setTo(0.1);
    productos.enableBody = true;
    let copianumber = number;
    //productos.createMultiple(number/4, 'fruta');
    
    productos.createMultiple(number/4, 'verdura');
    
    productos.createMultiple(number/4, 'botella');
    copianumber = copianumber - 3*(number/4);

    productos.createMultiple(copianumber, 'brick');

    productos.callAll('events.onOutOfBounds.add',
        'events.onOutOfBounds', resetMember);
    productos.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
    productos.setAll('checkWorldBounds', true);
    currentProductoProbability = PARTEA_PRODUCTO_PROBABILITY;
    currentProductoVelocity = PARTEA_PRODUCTO_VELOCITY;
    game.time.events.loop(
        TIMER_RHYTHM, activateProducto, this);
    //currentProductoProbability =
    //    LEVEL_PRODUCTO_PROBABILITY[level-1];
    //currentProductoVelocity =
    //    LEVEL_PRODUCTO_VELOCITY[level-1];
}

function activateProducto() {
    if (Math.random() < currentProductoProbability) {
        let producto = productos.getFirstExists(false);
        if (producto) {
            let gw = game.world.width;
            let uw = producto.body.width;
            let w = gw - uw;
            let x = Math.floor(Math.random()*w);
            let z = uw / 2 + x;
            producto.reset(z, 0);
            producto.body.velocity.x = 0;
            producto.body.velocity.y = currentProductoVelocity;
        }
    }
}

function resetMember(item) {
    item.kill();
}