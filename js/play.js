

let activeWord = null;
let productos;

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

/*function moveProduct(producto,velocity){
    //direccion

    //game.moveToObject(producto,carrito,100,10000);
    //producto.body.velocity.y = velocity;

    //producto.body.velocity.x = (carrito.x - producto.x) / 76;
    game.physics.arcade.moveToObject(producto,carrito, velocity);
}*/

