import { NxCore } from "./core";
import { NxRect } from "./rect";
import { NxSize } from "./size";
import { NxDrawableObject } from "./types";
import { NxVector2D } from "./vector";

class NxButton implements NxDrawableObject {
  private _text: string;
  private _textColor: string = "#FFFFFF";
  private _textSize: number = 14;
  private _rect: NxRect;

  constructor(
    text: string = "Button",
    textColor: string = "#FFFFFF",
    textSize: number = 14,
    rect: NxRect = new NxRect(new NxVector2D(20, 20), new NxSize(150, 50))
  ) {
    this._text = text;
    this._textColor = textColor;
    this._textSize = textSize;
    this._rect = rect;
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;
  }

  public get textColor(): string {
    return this._textColor;
  }

  public set textColor(color: string) {
    this._textColor = color;
  }

  public get textSize(): number {
    return this._textSize;
  }

  public set textSize(size: number) {
    this._textSize = size;
  }

  public get rect(): NxRect {
    return this._rect;
  }

  public set rect(rect: NxRect) {
    this._rect = rect;
  }

  update(core: NxCore): void {}

  draw(context: CanvasRenderingContext2D): void {
    this.rect.draw(context);

    context.save();
    context.font = `${this.textSize}px Arial`;
    const size = context.measureText(this.text);
    const x = this.rect.position.x + (this.rect.size.w - size.width) / 2;
    const y =
      this.rect.position.y +
      (this.rect.size.h - this.textSize) / 2 +
      this.textSize -
      3;

    context.fillStyle = this.textColor;
    context.fillText(this.text, x, y);
    context.restore();
  }
}

export { NxButton };
