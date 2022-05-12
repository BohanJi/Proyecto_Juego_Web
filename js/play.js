/*let background;

function preloadPlay() {
    game.load.image('stars',
        'assets/imgs/stars.png');

    game.load.audio('sndlaser',
        'assets/snds/laser.wav');


    game.load.spritesheet(
        'blast','assets/imgs/blast.png',128,128);

}

function createPlay() {
    
    let w = game.world.width;
    let h = game.world.height;
    background = game.add.tileSprite(
        0, 0, w, h, 'stars');
    createCraft();
    createKeyControls();
    createLasers(LASERS_GROUP_SIZE);
    createSounds();
    createBlasts(BLASTS_GROUP_SIZE);
    createUfos(UFOS_GROUP_SIZE);
    createHUD();
}

function updatePlay() {
    game.physics.arcade.overlap(
        lasers,ufos,laserHitsUfo,null,this);

    game.physics.arcade.overlap(
        craft,ufos,ufoHitsCraft,null,this);

    stars.tilePosition.y += 1;
    manageCraftMovements();
    manageCraftShots();
    
} */

let activeWord = null;
let productos

function getKeyboardInput(e) {
    if (e.keyCode >= Phaser.Keyboard.A
    && e.keyCode <= Phaser.Keyboard.Z
    && activeWord == null) {
        for(let i=0;i<productos.length;i++){
            if(e.keyCode==productos[i][0]){
                activeWord = productos[i];
                eliminateLetter();
                carritoRender();
                break;
            }
        }
    }
    else {
        eliminateLetter()
    }
}

function eliminateLetter() {
    if (activeWord.length=1){
        activeWord = null
    }
    else {
        activeWord.splice(0,1);
    }
}

function carritoRender(){
    let x = abs(carrito.x + activeWord.x);
    let y = abs(carrito.y + activeWord.y);
    let angle = Math.atan2(y,x);
    if (angle > 10){
        angle = 10;
    }
    else if(angle < -10){
        angle = -10;
    }
    carrito.setAngle(angle);
}

function moveProduct(producto,velocity){
    //direccion
    producto.rotation = this.game.physics.arcade.moveToObject(producto, this.target, velocity)
 
}