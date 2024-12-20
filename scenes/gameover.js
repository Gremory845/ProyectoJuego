import { RestartButton } from "../components/restartButton.js";

export class Gameover extends Phaser.Scene {
    constructor() {
        super({ key: 'gameover' });
        this.restartButton = new RestartButton(this);
    }

    preload() {
        this.load.image('gameover', 'img/gameover.png');
        this.restartButton.preload();
    }

    create() {
        this.add.image(410, 250, 'background');
        this.restartButton.create();
        this.gameoverImage = this.add.image(400, 90, 'gameover');
    }
}