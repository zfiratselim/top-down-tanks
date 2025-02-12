import Animation from '../Animation';
import Tween from 'tween.ts';
import Explosion from '../../entities/tank/Explosion';

export default class ExplosionAnimation extends Animation {
  constructor(Explosion: Explosion, coords: { x: number, y: number }, onComplete: () => void) {
    super();
    Explosion.x = coords.x;
    Explosion.y = coords.y;
    const textureNames = Explosion.getTextureNames();

    textureNames.forEach((texture, tI) => {
      setTimeout(() => {
        Explosion.width = Explosion.texture.width / textureNames.length * (tI + 1);
        Explosion.height = Explosion.texture.height / textureNames.length * (tI + 1);
        Explosion.setTexture(texture);
        if (tI == textureNames.length - 1) {
          new Tween.Tween(Explosion)
            .to({ alpha: 0 }, 300)
            .easing(Tween.Easing.Cubic.Out)
            .onComplete(() => {
              Explosion.alpha = 1;
              Explosion.x = -200;
              Explosion.y = -200;
              onComplete();
            })
            .start();
        }
      }, 100 * tI);
    })
  }
}
