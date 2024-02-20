import { NxObject } from "./types";

class NxSize implements NxObject {
  constructor(public w: number, public h: number) {}
}

export { NxSize };
