import Animation from '../Animation';
import TankController from '../../entities/tank/TankController';
import BulletAnimation from './BulletAnimation';
import TankRecoilAnimation from './TankRecoilAnimation';
import ExplosionAnimation from './ExplosionAnimation';

export default class ShootAnimation extends Animation {
  constructor(TankController: TankController, coords: { x: number, y: number }, onComplete?: () => void) {
    super();

    const bulletCB = ()=>{
      TankController.Bullet.x=0;
      TankController.Bullet.y=0;
      ExplosionAnim();
    }

    const ExplosionAnim = () => new ExplosionAnimation(TankController.Explosion, coords, () => { })
    const bulletAnim = () => new BulletAnimation(TankController.Bullet, coords, bulletCB)
    const tankAnim = () => new TankRecoilAnimation(TankController.Tank, { x: -10, y: 0 }, bulletAnim)

    setTimeout(() => {
      tankAnim();
    }, 2000);
  }

}
