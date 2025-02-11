import * as PIXI from "pixi.js";
import SpriteManager from "../../SpriteManager";

export default class Shot extends PIXI.Sprite {
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.anchor.set(.5, 0);
    this.rotation = -Math.PI / 2
    this.generateTexture();
  }
  generateTexture() {
    const shotTexture = SpriteManager.getTexture("shotOrange.png");
    if (shotTexture) {
      this.texture = shotTexture;
    }
  }
}