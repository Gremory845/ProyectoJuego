import { RestartButton } from "../components/restartButton.js";

export class Congratulations extends Phaser.Scene {
    constructor() {
        super({ key: 'congratulations' });
        this.restartButton = new RestartButton(this);
    }

    preload() {
        this.load.image('congratulations', 'img/congratulations.png');
        this.restartButton.preload();
    }

    create() {
        this.add.image(410, 250, 'background');
        this.restartButton.create();
        this.congratsImage = this.add.image(400, 90, 'congratulations');
    }
}