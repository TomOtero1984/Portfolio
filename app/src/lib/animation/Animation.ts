import { Actor } from "./Actor";

interface AnimationDefinition {
  actor: Actor;
  play(actor: Actor): void;

  pause?(actor: Actor): void;
  stop?(actor: Actor): void;
  reset?(actor: Actor): void;
  destroy?(actor: Actor): void;
  update?(actor: Actor): void;

}

export class Animation implements AnimationDefinition{
  public actor: Actor;

  constructor(actor: Actor) {
    this.actor = actor;
  }

  play(actor: Actor): void {
    this.actor = actor;
    actor.perform.WalkRight()
  }

}
