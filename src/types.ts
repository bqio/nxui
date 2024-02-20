import { NxCore } from "./core";

interface NxObject {}

interface NxDrawableObject extends NxObject {
  update(core: NxCore): void;
  draw(context: CanvasRenderingContext2D): void;
}

export { NxObject, NxDrawableObject };
