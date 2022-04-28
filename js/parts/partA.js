let background;
let letters;
let partAState = {
    preload: preloadPartAState,
    create: createPartAState,
    update: updatePartAState
};

function preloadPartAState () {
    game.load.image('background',
    'assets/imgs/supermercado.jpg');
};

function createPartAState () {
    let w = game.world.width;
    let h = game.world.height;
    background = game.add.tileSprite(
        0, 0, w, h, 'background');

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