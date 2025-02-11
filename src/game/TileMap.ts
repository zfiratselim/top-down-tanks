import * as PIXI from "pixi.js";
import SpriteManager from "./SpriteManager";
import { tileType, tileNames, tile } from "../Config";

export default class TileMap {
  tileCon = new PIXI.Container();
  constructor(extraElm: number) {

    tile.forEach((r, rI) => {
      const newR = [
        ...Array(Math.ceil(extraElm / 2)).fill(r[0]),
        ...r,
        ...Array(Math.ceil(extraElm / 2)).fill(r[r.length - 1])
      ]
      console.log(r, newR);
      newR.forEach((e, eI) => this.generateTile(e, eI, rI))
    })
    //tileType.forEach(ar => this.generateTile(ar[0], ar[1], ar[2]))
    this.tileCon.pivot.set((extraElm / 2) * 0, 0)
  }

  generateTile(nameIndex: number, x: number, y: number) {
    const name = tileNames[nameIndex];
    const texture = SpriteManager.getTexture(name);

    if (!texture) {
      return console.log("texture is not found")
    }

    const sprite = PIXI.Sprite.from(texture);
    sprite.x = x * 64;
    sprite.y = y * 64;
    this.tileCon.addChild(sprite);
  }
  addToStage(stage: PIXI.Container) {
    stage.addChild(this.tileCon);
  }
}