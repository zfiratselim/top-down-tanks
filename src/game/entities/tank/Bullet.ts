import * as PIXI from "pixi.js";
import { BulletType } from "../../../types/Enum";
import SpriteManager from "../../SpriteManager";

export default class Bullet extends PIXI.Sprite {
  constructor(type: BulletType, x: number, y: number, rotation: number) {
    super();
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.anchor.set(.5,0)
    this.generateTexture(type);
  }

  generateTexture(type: BulletType) {
    const bulletTexture = SpriteManager.getTexture(`bullet${type}1_outline.png`);
    if (!bulletTexture) {
      return console.error("bulletTexture is not found")
    }
    this.texture = bulletTexture;
  }
}