import * as PIXI from "pixi.js";
import SpriteManager from "../../SpriteManager";
import { TankType } from "../../../types/Enum";


function capitalizeFirstLetter(val: String) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


export default class Tank extends PIXI.Container {
  type: TankType;

  constructor(type: TankType, x: number, y: number) {
    super();
    this.type = type;
    this.x = x;
    this.y = y;
    this.createSprite();
  }

  private createSprite() {
    const bodyColor = this.type;
    const barrelColor = capitalizeFirstLetter(this.type);

    const tankBodyTexture = SpriteManager.getTexture(`tankBody_${bodyColor}.png`);
    const tankBarrelTexture = SpriteManager.getTexture(`tank${barrelColor}_barrel1_outline.png`);

    if (!tankBodyTexture || !tankBarrelTexture) {
      console.error("tankTexture is not loaded");
      return;
    }

    const tankBody = new PIXI.Sprite(tankBodyTexture);
    tankBody.anchor.set(.5);

    const tankBarrel = new PIXI.Sprite(tankBarrelTexture);
    tankBarrel.anchor.set(.5, 0);
    tankBarrel.scale.set(1, 1.2)
    tankBarrel.x = 0;
    tankBarrel.y = -2;


    this.addChild(tankBody, tankBarrel);
    this.rotation = -Math.PI / 2
  }
}