import { NxCore } from "./core";
import { NxDrawableObject, NxObject } from "./types";

class NxLayer implements NxDrawableObject {
  private _objects: NxDrawableObject[];

  constructor() {
    this._objects = [];
  }

  public get objects(): NxDrawableObject[] {
    return this._objects;
  }

  update(core: NxCore): void {
    for (const object of this._objects) {
      object.update(core);
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    for (const object of this._objects) {
      object.draw(context);
    }
  }

  addObject(object: NxDrawableObject): void {
    this._objects.push(object);
  }
}

export { NxLayer };
