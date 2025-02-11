import * as PIXI from "pixi.js";
import SpriteManager from "../../SpriteManager";

export default class Shot {
  Shot: PIXI.Sprite;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.createShot();
  }

  private createShot() {
    const shotTexture = SpriteManager.getTexture("shotOrange.png");

    if (!shotTexture) {
      return console.error("shotTexture is not loaded");
    }

    this.Shot = new PIXI.Sprite(shotTexture);
    this.Shot.y = this.x;
    this.Shot.y = this.y;
    this.Shot.anchor.set(.5, 0);
  }

  addToStage(stage: PIXI.Container) {
    stage.addChild(this.Shot);
  }
}