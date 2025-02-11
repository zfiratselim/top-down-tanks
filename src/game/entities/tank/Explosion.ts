import * as PIXI from "pixi.js";
import SpriteManager from "../../SpriteManager";

const textureNames = ["explosion1.png", "explosion2.png", "explosion3.png", "explosion4.png", "explosion5.png"];


export default class Explosion {
  explosion: PIXI.Sprite;
  index = 0;
  x = 0;
  y = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.create();
  }

  getTexture = () => SpriteManager.getTexture(textureNames[this.index]);

  create() {
    const texture = this.getTexture();
    if (!texture) {
      return console.error("texture is not loaded");
    }
    this.explosion = new PIXI.Sprite(texture);
    this.explosion.anchor.set(.5, .5);
    this.explosion.x = this.x;
    this.explosion.y = this.y;
  }

  updateTexture() {
    this.index = (this.index + 1) % 5;
    const texture = this.getTexture();
    if (!texture) {
      return console.error("texture is not loaded");
    }

    this.explosion.texture = texture;
  }

  addToStage(stage: PIXI.Container) {
    console.log(this.explosion, "asdasdasd");
    stage.addChild(this.explosion);
    setInterval(() => this.updateTexture(), 500);
  }
}