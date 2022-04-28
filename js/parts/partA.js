const HUD_HEIGHT = 80;





let background;
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
};

function updatePartAState () {
    
    background.tilePosition.y += 1;
    
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