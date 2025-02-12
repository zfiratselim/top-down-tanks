import Animation from '../Animation';
import Tween from 'tween.ts';
import Tank from '../../entities/tank/Tank';

export default class TankRecoilAnimation extends Animation {
  constructor(Tank: Tank, coords: { x: number, y: number }, onComplete: () => void) {
    super();
    new Tween.Tween(Tank)
      .to(coords, 50)
      .easing(Tween.Easing.Quadratic.Out)
      .onComplete(onComplete)
      .start()
  }
}
