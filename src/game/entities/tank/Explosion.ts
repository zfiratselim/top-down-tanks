import * as PIXI from "pixi.js";
import SpriteManager from "../../SpriteManager";

const textureNames = ["explosion1.png", "explosion2.png", "explosion3.png", "explosion4.png", "explosion5.png"];


export default class Explosion extends PIXI.Sprite {
  index = 0;


  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.anchor.set(.5, .5);
  }
  getTextureNames = () => textureNames;
  getTexture = (txture: string) => SpriteManager.getTexture(txture);

  setTexture(txtre: string) {
    const texture = this.getTexture(txtre);
    if (!texture) {
      return console.error("texture is not loaded");
    }
    this.texture = texture;
  }
}