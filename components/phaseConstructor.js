import { Phase1 } from './phase1.js'
import { Phase2 } from './phase2.js'
import { Phase3 } from './phase3.js'

export class PhaseConstructor {
  constructor(scene) {
    this.relatedScene = scene;
    this.phases = [
      Phase3,
      Phase2,
      Phase1,
    ];
  }

  create() {
    let CurrenPhaseClass = this.phases.pop();
    this.currentPhase = new CurrenPhaseClass(this.relatedScene);
    return this.currentPhase.create();
  }

  nextLevel() {
    this.currentPhase.deleteFixedBricks();
    if(this.phases.length == 0) {
      this.relatedScene.endGame(true);
    } else {
      return this.create();
    }
  }

  isPhaseFinished() {
    return this.currentPhase.isPhaseFinished();
  }
}