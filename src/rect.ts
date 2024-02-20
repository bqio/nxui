import { NxCore } from "./core";
import { NxSize } from "./size";
import { NxDrawableObject } from "./types";
import { NxVector2D } from "./vector";

class NxRect implements NxDrawableObject {
  private _position: NxVector2D;
  private _size: NxSize;
  private _bgColor: string;
  private _borderColor: string;
  private _borderWidth: number;

  constructor(
    position: NxVector2D,
    size: NxSize,
    bgColor: string = "transparent",
    borderColor: string = "#000000",
    borderWidth: number = 2
  ) {
    this._position = position;
    this._size = size;
    this._bgColor = bgColor;
    this._borderColor = borderColor;
    this._borderWidth = borderWidth;
  }

  public get position(): NxVector2D {
    return this._position;
  }

  public set position(vector2d: NxVector2D) {
    this._position = vector2d;
  }

  public get size(): NxSize {
    return this._size;
  }

  public set size(size: NxSize) {
    this._size = size;
  }

  public get bgColor(): string {
    return this._bgColor;
  }

  public set bgColor(color: string) {
    this._bgColor = color;
  }

  public get borderColor(): string {
    return this._borderColor;
  }

  public set borderColor(color: string) {
    this._borderColor = color;
  }

  public get borderWidth(): number {
    return this._borderWidth;
  }

  public set borderWidth(width: number) {
    this._borderWidth = width;
  }

  update(core: NxCore): void {}

  draw(context: CanvasRenderingContext2D): void {
    context.strokeStyle = this.borderColor;
    context.lineWidth = this.borderWidth;
    context.strokeRect(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );

    context.fillStyle = this.bgColor;
    context.fillRect(
      this.position.x + this.borderWidth / 2,
      this.position.y + this.borderWidth / 2,
      this.size.w - this.borderWidth,
      this.size.h - this.borderWidth
    );
  }
}

export { NxRect };
