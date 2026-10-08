import { GameScene} from '/src/scenes/game-scene.js';

const config = {
    type: Phaser.AUTO,
    scene: GameScene,
    scale: {
        width: 640,
        height: 360,
        mode: Phaser.Scale.FIT,
    },
    backgroundColor: '#028af8',
}


const game = new Phaser.Game(config);