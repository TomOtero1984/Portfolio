import { Body, Vector } from "matter-js";

// Physics
export enum XAxis {
  Origin = 0,
  Left = -1,
  Right = 1
}

export enum YAxis {
  Origin = 0,
  Down = -1,
  Up = 1
}

export type Axes = {
  x: XAxis | number,
  y: YAxis | number,
}


// Action Types
export class Action {
  private direction: Axes;
  private scalar: Axes;
  private _body?: Body;


  constructor(
    {
      direction = {
        x: XAxis.Origin,
        y: YAxis.Origin
      }, scalar = {
      x: 0,
      y: 0
    }
    }: { direction?: Axes, scalar?: Axes }) {
    this.direction = direction;
    this.scalar = scalar;
  }

  get force(): Vector {
    return {
      x: this.direction.x * this.scalar.x,
      y: this.direction.y * this.scalar.y,
    };
  }

  apply(body: Body): void {
    Body.applyForce(body, body.position, this.force);
  }
}


export class Actions {
  private _body?: Body;


  constructor() {
    this._body = undefined
  }


  set body (body: Body) {
    this._body = body;
  }
  get body () {
    if (!this._body) {
      throw new Error("Body has not been set");
    }
    return this._body;
  }


  WalkRight() {
    new Action({
      direction: { x: XAxis.Right } as Axes,
      scalar: { x: 0.01 } as Axes
    }).apply(this.body);
  }

  WalkLeft() {
    new Action({
      direction: { x: XAxis.Left } as Axes,
      scalar: { x: 0.01 } as Axes
    }).apply(this.body);
  }

  WalkBounce() {
    new Action({
      direction: { y: YAxis.Up } as Axes,
      scalar: { x: 0.01 } as Axes
    }).apply(this.body);
  }

  Jump() {
    new Action({
      direction: { y: YAxis.Up } as Axes,
      scalar: { y: 1 } as Axes
    }).apply(this.body);
  }
}
