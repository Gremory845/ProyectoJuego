import { Game } from './scenes/game.js';
import { Congratulations } from './scenes/congratulations.js';
import { Gameover } from './scenes/gameover.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Game, Gameover, Congratulations],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);