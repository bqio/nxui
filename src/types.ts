interface NxObject {
  update(): void;
}

interface NxDrawableObject extends NxObject {
  draw(context: CanvasRenderingContext2D): void;
}

export { NxObject, NxDrawableObject };
