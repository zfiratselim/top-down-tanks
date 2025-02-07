import * as PIXI from "pixi.js";

export default class SpriteManager {
  private static texture: any;
  private static spriteList: SpriteInfo[] = [];

  static async load(): Promise<void> {
    if (!this.texture) {
      const baseTexture = await PIXI.Assets.load("/assets/allSprites_default.png");
      const spriteJSON: SpriteJSON = await fetch('/assets/allSprites_default.json').then(d => d.json());

      this.spriteList = spriteJSON.sprites; // spriteList'e JSON'dan gelen veriyi ata
      this.texture = new PIXI.Texture(baseTexture);
    }
  }

  static getTexture(name: string): PIXI.Texture | null {
    if (!this.texture) {
      console.error("sprite is not uploaded!");
      return null;
    }

    const spriteInfo = this.spriteList.find(sprite => sprite.name === name)

    if (!spriteInfo) {
      console.error(`Sprite "${name}" is not found!`);
      return null;
    }

    const rect = new PIXI.Rectangle(spriteInfo.x, spriteInfo.y, spriteInfo.width, spriteInfo.height);
    const subTexture = new PIXI.Texture({ source: this.texture, frame: rect });

    return subTexture;
  }
}
