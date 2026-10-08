export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    init() {
        console.log('init method called');
    }

    preload() {
        this.load.image('fondo', 'src/images/fondo.png');
        this.load.image('personajeIdle', 'src/images/player/idle/0.png');
        this.load.image('barba', 'src/images/enemies/idle/0.png');
    }

    create() {
        const bg = this.add.image(0, 0, 'fondo');
        bg.setOrigin(0,0);

        this.player = this.add.image(70, 280, 'personajeIdle')

        this.enemy1 = this.add.image(200, 280, 'barba');
        // enemy1.setAngle(45); // usando ángulo
        // enemy1.rotation = Math.PI / 4; // usando radianes
        // enemy1.setOrigin(0)
        this.enemy1.setRotation(Math.PI / 4);
    }

    update() {
        this.enemy1.angle -= 1;
        this.player.angle -= 1;
        if (this.player.scaleX < 2){
            this.player.scaleX += 0.01;
            this.player.scaleY += 0.01;
        }
    }
}
