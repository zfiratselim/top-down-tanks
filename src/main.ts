import * as PIXI from "pixi.js";

import SpriteManager from "./game/SpriteManager";
import TileMap from "./game/TileMap";

import { TankType } from "./types/Enum";
const r = 13;
const width = 64 * r;
const height = 64 * 10;

export default class Game extends PIXI.Application {
  TileMap: TileMap;

  constructor(view: HTMLCanvasElement, rowNumber: number) {
    super();
    const w = (width / r) * rowNumber
    this.init({
      view: view,
      antialias: true,
      width: (width / r) * rowNumber,
      height,
    }).then(() => {
      SpriteManager.load().then(() => {
        this.TileMap = new TileMap(rowNumber - r);
        this.TileMap.addToStage(this.stage);

        this.renderer.resize(w, height);
        view.width = w;
        view.height = height;

        this.startGame();
      })

    });
  }

  private startGame() {
  }
}

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
if (canvas) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const radioW = w / width;
  const radioH = h / height;
  canvas.style.scale = `${radioH}`;
  const rowNumber = Math.ceil(w / ((width * radioH) / r));
  console.log(rowNumber, Math.ceil(rowNumber), radioW);

  (window as any).context = new Game(canvas, rowNumber);
} else {
  console.error("Canvas bulunamadı!");
}
