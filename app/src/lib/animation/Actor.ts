import { Sprite } from "@/lib/animation/Sprite";
import { Actions } from "@/lib/animation/Actions";
import { Body} from "matter-js";

export class Actor {
  public sprite: Sprite
  public body: Body;
  public perform: Actions;

  constructor(sprite: Sprite, body: Body, perform: Actions)
  {
    this.sprite = sprite;
    this.body = body;
    this.perform = perform;
  }


  update(delta: number) {
    this.sprite.update(delta);
    // eventually call action handlers here (e.g. walk, idle)
  }

  draw(ctx: CanvasRenderingContext2D, canvasSize: { renderWidth: number, renderHeight: number }) {
    const { x, y } = this.body.position;
    const angle = this.body.angle;
    this.sprite.draw(ctx, x, y, angle, canvasSize);
  }
}

