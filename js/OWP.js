class OWP{
    constructor(image, word, x, y, velocityX, velocityY){
        this.image = image;
        this.word = word;
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }
    Update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};