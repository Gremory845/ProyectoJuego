import { Phase } from './phase.js'

export class Phase1 extends Phase {
  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['bluebrick', 'orangebrick', 'greenbrick', 'blackbrick'],
      frameQuantity: 2,
      gridAlign: {
        width: 4,
        height: 4,
        cellWidth: 150,
        cellHeight: 100,
        x: 135,
        y: 150
      }
    });

    this.configureColisions();
  }
}