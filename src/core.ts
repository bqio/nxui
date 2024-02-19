import { NxDrawableObject, NxObject } from "./types";

class NxCore {
  constructor(private context: CanvasRenderingContext2D) {}

  update(object: NxObject) {
    object.update();
  }

  draw(object: NxDrawableObject) {
    object.draw(this.context);
  }

  clear() {
    this.context.clearRect(0, 0, 1280, 720);
  }
}

export { NxCore };
