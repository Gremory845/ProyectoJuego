import { PhaseConstructor } from '../components/phaseConstructor.js';
import { LiveCounter } from '../components/liveCounter.js';

export class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'game' });
    }

    init() {
        this.phaseConstructor = new PhaseConstructor(this);
        this.score = 0;
        this.liveCounter = new LiveCounter(this, 4);
    }

    preload() {
        this.load.image('background', 'img/background.jpg');
        this.load.image('platform', 'img/platform.png');
        this.load.image('ball', 'img/ball.png');
        this.load.image('bluebrick', 'img/brickBlue.png');
        this.load.image('blackbrick', 'img/brickBlack.png');
        this.load.image('greenbrick', 'img/brickGreen.png');
        this.load.image('orangebrick', 'img/brickOrange.png');
        this.load.image('yellowbrick', 'img/brickYellow.png');
    }

    create() {
        this.physics.world.setBoundsCollision(true, true, true, false);

        this.add.image(410, 250, 'background');

        this.liveCounter.create();

        /*this.bricks = this.physics.add.staticGroup({
            key: ['bluebrick', 'orangebrick', 'greenbrick', 'blackbrick'],
            frameQuantity: 10,
            gridAlign: {
                width: 10,
                height: 4,
                cellWidth: 66,
                cellHeight: 34,
                x: 75,
                y: 105
            }
        });*/

        this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
        this.platform.body.allowGravity = false;
        this.platform.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.ball = this.physics.add.image(400, 435, 'ball');
        this.ball.setBounce(1);
        this.ball.setCollideWorldBounds(true);
        this.ball.setData('glue', true);

        this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this);

        //this.physics.add.collider(this.ball, this.bricks, this.brickImpact, null, this);

        this.phaseConstructor.create();

        this.scoreText = this.add.text(16, 16, 'PUNTOS: 0', { fontSize: '20px', fill: '#fff', fontFamily: 'verdana, arial, sans-serif' });
    }

    update() {
        if (this.cursors.left.isDown) {
          this.platform.setVelocityX(-500);
          if(this.ball.getData('glue')) {
            this.ball.setVelocityX(-500);
          }
        }
        else if (this.cursors.right.isDown) {
          this.platform.setVelocityX(500);
          if (this.ball.getData('glue')) {
            this.ball.setVelocityX(500);
          }
        }
        else {
          this.platform.setVelocityX(0);
          if (this.ball.getData('glue')) {
            this.ball.setVelocityX(0);
          }
        }
    
        if (this.ball.y > 500 && this.ball.active) {
          let gameNotFinished = this.liveCounter.liveLost();
          if (!gameNotFinished) {
            this.setInitialPlatformState();
          }
        }
    
        if (this.cursors.up.isDown) {
          if (this.ball.getData('glue')) {
            this.ball.setVelocity(-60, -300);
            this.ball.setData('glue', false);
          }
        }
      }

    platformImpact(ball, platform) {
        this.increasePoints(1);
        let relativeImpact = ball.x - platform.x;
        if (relativeImpact > 0) {
            ball.setVelocityX(8 * relativeImpact);
        } else if (relativeImpact < 0) {
            ball.setVelocityX(8 * relativeImpact);
        } else {
            ball.setVelocityX(Phaser.Math.Between(-10, 10))
        }
    }

    brickImpact(ball, brick) {
        brick.disableBody(true, true);
        this.increasePoints(10);
        if (this.phaseConstructor.isPhaseFinished()) {
          this.phaseConstructor.nextLevel();
          this.setInitialPlatformState();
        }
    }

    increasePoints(points) {
        this.score += points;
        this.scoreText.setText('PUNTOS: ' + this.score);
    }

    endGame(completed = false) {
        if (!completed) {
          this.sendScore();
            this.scene.start('gameover');
        } else {
          this.sendScore();
            this.scene.start('congratulations');
        }
    }
    //http://localhost/proyecto2/php/save_score.php
    sendScore() {
      fetch('../php/save_score.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ score: this.score })
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              console.log("Puntaje guardado exitosamente en la base de datos.");
          } else {
              console.error("Error al guardar el puntaje.");
          }
      })
      .catch(error => console.error('Error en la petición:', error));
  }
    setInitialPlatformState() {
        this.platform.x = 400;
        this.platform.y = 460;
        this.ball.setVelocity(0,0);
        this.ball.x = 400;
        this.ball.y = 435;
        this.ball.setData('glue', true);
      }
}