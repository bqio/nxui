import { NxSize } from "./size";
import { NxDrawableObject } from "./types";
import { NxVector2D } from "./vector";

class NxRect implements NxDrawableObject {
  constructor(
    public position: NxVector2D,
    public size: NxSize,
    public bgColor: string = "transparent",
    public borderColor: string = "#000000",
    public borderWidth: number = 2
  ) {}

  update(): void {}

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

  setBgColor(bgColor: string) {
    this.bgColor = bgColor;
  }

  setBorderColor(borderColor: string) {
    this.borderColor = borderColor;
  }

  setBorderWidth(borderWidth: number) {
    this.borderWidth = borderWidth;
  }
}

export { NxRect };
