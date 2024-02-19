import { NxButton } from "./button";
import { NxCore } from "./core";
import { NxRect } from "./rect";
import { NxSize } from "./size";
import { NxVector2D } from "./vector";

// For development
const canvas = document.getElementById("root")! as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

// const context = screen.getContext("2d")!;

const core = new NxCore(context);
const rectPosition = new NxVector2D(20, 20);
const rectSize = new NxSize(150, 50);
const rect = new NxRect(rectPosition, rectSize);
const button = new NxButton(rect, "Games", 20, "#FFFFFF");

const bgRect = new NxRect(
  new NxVector2D(0, 0),
  new NxSize(1280, 720),
  "#2D2D2D"
);

rect.setBgColor("#4676D7");
rect.setBorderColor("#cbd6ee");
rect.setBorderWidth(2);

function render() {
  requestAnimationFrame(render);

  core.clear();
  core.update(bgRect);
  core.draw(bgRect);
  core.update(button);
  core.draw(button);
}

requestAnimationFrame(render);
