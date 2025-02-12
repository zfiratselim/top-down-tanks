import * as PIXI from "pixi.js";

import SpriteManager from "./game/SpriteManager";
import TileMap from "./game/TileMap";
import TankController from "./game/entities/tank/TankController";

import Animation from "./game/animations/Animation";

const r = 13;
const width = 64 * r;
const height = 64 * 10;

export default class Game extends PIXI.Application {
  TileMap: TileMap;
  Animation = new Animation();

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
        const tankController = new TankController(100, 100);
        this.stage.addChild(tankController)
        this.renderer.resize(w, height);
        view.width = w;
        view.height = height;

        this.startGame();
      })

    });
  }

  private startGame() {
    this.ticker.add(delta => this.update(delta))
  }
  
  update(delta: PIXI.Ticker) {
    this.Animation.update(delta.lastTime);
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
