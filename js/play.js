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
