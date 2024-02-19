import { NxRect } from "./rect";
import { NxObject } from "./types";

class NxButton implements NxObject {
  constructor(
    private rect: NxRect,
    private text: string,
    private size: number = 14,
    private textColor: string = "#FFFFFF"
  ) {}

  update(): void {}

  draw(context: CanvasRenderingContext2D): void {
    this.rect.draw(context);

    context.save();
    context.font = `${this.size}px Arial`;
    const size = context.measureText(this.text);
    const x = this.rect.position.x + (this.rect.size.w - size.width) / 2;
    const y =
      this.rect.position.y + (this.rect.size.h - this.size) / 2 + this.size - 3;

    context.fillStyle = this.textColor;
    context.fillText(this.text, x, y);
    context.restore();
  }
}

export { NxButton };
