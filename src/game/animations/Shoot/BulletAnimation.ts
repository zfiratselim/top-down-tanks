import Animation from '../Animation';
import Tween from 'tween.ts';
import Bullet from '../../entities/tank/Bullet';

export default class BulletAnimation extends Animation {
  constructor(Bullet: Bullet, coords: { x: number, y: number }, onComplete: () => void) {
    super();
    new Tween.Tween(Bullet)
      .to(coords, 2000)
      .easing(Tween.Easing.Linear.None)
      .onComplete(onComplete)
      .start();
  }

}
