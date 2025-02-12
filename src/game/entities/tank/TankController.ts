import * as PIXI from "pixi.js";
import Tank from "./Tank";
import Shot from "./Shot";
import Bullet from "./Bullet";
import Explosion from "./Explosion";
import { BulletType, TankType } from "../../../types/Enum";

import ShootAnimation from "../../animations/Shoot/ShootAnimation";

export default class TankController extends PIXI.Container {
  Tank: Tank;
  Shot: Shot;
  Bullet: Bullet;
  Explosion: Explosion;
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.Tank = new Tank(TankType.red, 0, 0);
    this.Shot = new Shot(0, 0);
    this.Explosion = new Explosion(-200, -200)
    this.Bullet = new Bullet(BulletType.red, 27, 0, Math.PI / 2)
    this.addChild(this.Shot, this.Bullet, this.Tank, this.Explosion);

    this.shoot(300, 0);
  }
  shoot(x: number, y: number) {
    new ShootAnimation(this, { x, y }, () => { });
  }

  addExplosion(x: number, y: number) {
    this.Explosion.x = x;
    this.Explosion.y = y;

    setTimeout(() => {
      this.Explosion.x = -200;
      this.Explosion.y = -200;
    }, 2000);
  }
}
