import * as PIXI from "pixi.js";
import Tank from "./Tank";
import Shot from "./Shot";
import Bullet from "./Bullet";
import Explosion from "./Explosion";
import { BulletType, TankType } from "../../../types/Enum";


export default class TankController extends PIXI.Container {
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    const tank = new Tank(TankType.red, 0, 0);
    const shot = new Shot(32, 0);
    const bullet = new Bullet(BulletType.red, 100, 0, Math.PI / 2)
    const explosion = new Explosion(300, 0);
    this.addChild(shot, bullet, tank, explosion)
  }
}