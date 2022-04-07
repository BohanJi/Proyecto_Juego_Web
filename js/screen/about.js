let aboutState = {
        preload: preloadAboutState,
        create: createAboutState
    };

function preloadAboutState () {
    game.load.image('backAbout','../../assets/imgs/supermercado.jpg');
};

function createAboutState () {
    game.add.image(0, 0, 'bg');

    game.add.text(TITLE_X, TITLE_Y, textTitle, styleTitle);
};