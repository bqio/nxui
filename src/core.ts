import { NxScene } from "./scene";

class NxCore {
  private _scenes: NxScene[];
  private _activeScene: NxScene | null;

  constructor(private context: CanvasRenderingContext2D) {
    this._scenes = [];
    this._activeScene = null;
  }

  public get scenes(): NxScene[] {
    return this._scenes;
  }

  public get activeScene(): NxScene | null {
    return this._activeScene;
  }

  public set activeScene(scene: NxScene) {
    this._activeScene = scene;
  }

  update() {
    if (this._activeScene) {
      this.activeScene?.update(this);
    }
  }

  draw() {
    if (this._activeScene) {
      this.activeScene?.draw(this.context);
    }
  }

  clear() {
    this.context.clearRect(0, 0, 1280, 720);
  }

  addScene(scene: NxScene): void {
    this._scenes.push(scene);
  }
}

export { NxCore };
