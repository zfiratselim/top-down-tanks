import * as PIXI from "pixi.js";
import SpriteManager from "./SpriteManager";
import { TankType } from "../Enum";


function capitalizeFirstLetter(val:String) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


export default class Tank {
  Tank: PIXI.Container = new PIXI.Container();
  type: TankType;
  x: number;
  y: number;
  
  constructor(x: number, y: number, type: TankType) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.createSprite();
  }
  private createSprite() {
    const bodyColor = this.type;
    const barrelColor = capitalizeFirstLetter(this.type);

    const tankBodyTexture = SpriteManager.getTexture(`tankBody_${bodyColor}.png`);
    //const tankNoiseTexture = SpriteManager.getTexture("tankRed_barrel1.png");
    const tankBarrelTexture = SpriteManager.getTexture(`tank${barrelColor}_barrel1_outline.png`);

    if (!tankBodyTexture || !tankBarrelTexture) {
      console.error("tankTexture is not loaded");
      return;
    }

    const tankBody = new PIXI.Sprite(tankBodyTexture);
    tankBody.anchor.set(.5);

    /*
    const tankNoise = new PIXI.Sprite(tankNoiseTexture);
    tankNoise.anchor.set(.5, 0);
    tankNoise.x = 0;
    tankNoise.y = -2;
    */

    const tankNoiseOutline = new PIXI.Sprite(tankBarrelTexture);
    tankNoiseOutline.anchor.set(.5, 0);
    tankNoiseOutline.x = 0;
    tankNoiseOutline.y = -2;

    this.Tank.addChild(tankBody, tankNoiseOutline);
    this.Tank.rotation = .2;
    this.Tank.x = this.x;
    this.Tank.y = this.y;
  }

  addToStage(stage: PIXI.Container) {
    stage.addChild(this.Tank);
    console.log(this.Tank.x, this.Tank.y);
  }
}