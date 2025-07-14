import { Body, IBodyDefinition } from "matter-js";

interface SpriteDefinition {
  url: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number,
  frameTime: number,

  spriteWidth ?: number;
  spriteHeight ?: number;
  sheetWidth ?: number;
  sheetHeight ?: number;
  scale ?: number;
  offset ?: number;
  origin ?: number;

}


export class Sprite implements SpriteDefinition {

  public scale: number;

  public readonly url: string;
  public readonly frameWidth: number;
  public readonly frameHeight: number;
  public readonly frameCount: number;
  public readonly frameTime: number;

  private readonly image: HTMLImageElement;

  private currentFrame: number = 0;
  private elapsedTime: number = 0;

  private ready = false;

  constructor({
      url,
      frameCount,
      frameWidth,
      frameHeight,
      frameTime = 100 // default: 10fps
    }: SpriteDefinition) {
    this.url = url;
    this.frameCount = frameCount;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.frameTime = frameTime;

    this.scale = 0.25

    this.image = new Image();
    this.image.src = this.url
    this.image.onload = () => {
      this.ready = true;
    };
  }


  update(delta: number) {
    this.elapsedTime += delta;
    if (this.elapsedTime >= this.frameTime) {
      this.elapsedTime -= this.frameTime;
      this.currentFrame = (this.currentFrame + 1) % this.frameCount;
    }
  }

  draw(
    ctx: CanvasRenderingContext2D,
    x: number, y: number, angle: number = 0,
    canvasSize: { renderWidth: number, renderHeight: number }
  ) {
    if (!this.ready) return;
    const sx = this.currentFrame * this.frameWidth;
    const sy = 0;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.drawImage(
      this.image,
      sx, sy, this.frameWidth, this.frameHeight,           // source
      -this.frameWidth / 2 * this.scale, -this.frameHeight / 2,         // dest pos (centered)
      this.frameWidth * this.scale, this.frameHeight * this.scale                    // dest size
    );
    ctx.restore();
  }
}


// const createSprite = (spriteDefinition: SpriteDefinition, bodyDefinition: IBodyDefinition): Sprite => {
//   const body = Body.create(bodyDefinition);
//   return { spriteDefinition, bodyDefinition, body };
// }


