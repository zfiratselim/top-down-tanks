import * as PIXI from "pixi.js";
import Tank from "./Tank";
import Shot from "./Shot";
import Bullet from "./Bullet";
import Explosion from "./Explosion";
import { BulletType, TankType } from "../../../types/Enum";


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
    this.Bullet = new Bullet(BulletType.red, 0, 0, Math.PI / 2)
    this.addChild(this.Shot, this.Bullet, this.Tank, this.Explosion);
    this.shoot(300, 0);
  }
  shoot(x: number, y: number) {
    this.Bullet.x = this.Tank.x;
    this.Bullet.y = this.Tank.y;

    const deltaX = (x - this.Bullet.x) / 20;
    const deltaY = (y - this.Bullet.y) / 20;

    const interval = setInterval(() => {
      this.Bullet.x += deltaX;
      this.Bullet.y += deltaY
      if (this.Bullet.x == x) {
        clearInterval(interval);
        this.Bullet.x = -200;
        this.Bullet.y = -200;
        this.addExplosion(x, y);
      }
    }, 50)
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