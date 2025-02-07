import * as PIXI from "pixi.js";

import SpriteManager from "./game/SpriteManager";
import Tank from "./game/Tank";
import { TankType } from "./Enum";


export default class Game extends PIXI.Application {
  constructor(view: HTMLCanvasElement) {
    super();

    this.init({
      view: view,
      antialias: true,
      width: 800,
      height: 600,
    }).then(() => {
      console.log("Oyun başlatıldı!");
      SpriteManager.load().then(() => {
        const tank1 = new Tank(100, 100, TankType.green);
        tank1.addToStage(this.stage)

        const tank2 = new Tank(200, 100, TankType.blue);
        tank2.addToStage(this.stage)
      })
      // PixiJS'in boyutlarının Canvas'a yansıtıldığından emin ol
      this.renderer.resize(800, 600);
      view.width = 800;
      view.height = 600;

      this.startGame();
    });
  }

  private startGame() {
  }


}

// HTML'deki canvas'ı seç ve Game başlat
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
if (canvas) {
  (window as any).context = new Game(canvas);
} else {
  console.error("Canvas bulunamadı!");
}
