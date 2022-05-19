class OWP{
    constructor(image, carrito, game, size){
        this.image = image;
        this.productos = game.add.group();
        this.productos.inputEnableChildren = true;
        this.productos.enableBody = true;
        this.productos.createMultiple(size, this.image);

        this.productos.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetMember);
        this.productos.callAll('anchor.setTo', 'anchor',0.5,1.0);
        this.productos.setAll('checkWorldBounds', true);
        game.time.events.loop( TIMER_RHYTHM, this.activateProducto, this);

        //game.physics.arcade.moveToObject(this.image, carrito, 200);
    }

    resetMember(item) {
        item.kill();
    }

    activateProducto() {
        if (Math.random() < currentProductoProbability) {
            let producto = productos.getFirstExists(false);
            if (producto) {
                let gw = game.world.width;
                let uw = producto.body.width;
                let w = gw - uw;
                let x = Math.floor(Math.random()*w);
                let z = uw / 2 + x;
                producto.reset(z, 0);
            }
        }
    }
};