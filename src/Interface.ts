interface SpriteInfo {
  name: string,
  x: number,
  y: number,
  width: number,
  height: number
}

interface SpriteJSON {
  imagePath: string,
  sprites: SpriteInfo[]
}