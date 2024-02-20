import { NxCore } from "./core";
import { NxLayer } from "./layer";
import { NxDrawableObject } from "./types";

class NxScene implements NxDrawableObject {
  private _name: string;
  private _layers: NxLayer[];

  constructor(name: string) {
    this._name = name;
    this._layers = [];
  }

  update(core: NxCore): void {
    for (const layer of this._layers) {
      layer.update(core);
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    for (const layer of this._layers) {
      layer.draw(context);
    }
  }

  addLayer(layer: NxLayer): void {
    this._layers.push(layer);
  }
}

export { NxScene };
