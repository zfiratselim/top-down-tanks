import Tween from 'tween.ts';

export default class Animation {
  constructor() {
  }

  update(delta: number) {
    Tween.update(delta);
  }
}
