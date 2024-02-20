import { NxButton } from "./button";
import { NxCore } from "./core";
import { NxLayer } from "./layer";
import { NxRect } from "./rect";
import { NxScene } from "./scene";
import { NxSize } from "./size";
import { NxVector2D } from "./vector";

// For dev
const canvas = document.getElementById("root")! as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

// For prod
// const context = screen.getContext("2d")!;

const core = new NxCore(context);

const defaultScene = new NxScene("default");
const homeScene = new NxScene("home");

const defaultLayer = new NxLayer();
const homeLayer = new NxLayer();

const button = new NxButton();
const button2 = new NxButton("Settings");

const bgRect = new NxRect(
  new NxVector2D(0, 0),
  new NxSize(1280, 720),
  "#2D2D2D"
);
const bgRect2 = new NxRect(
  new NxVector2D(0, 0),
  new NxSize(1280, 720),
  "#FF0000"
);

defaultLayer.addObject(bgRect);
defaultLayer.addObject(button);

homeLayer.addObject(bgRect2);
homeLayer.addObject(button2);

defaultScene.addLayer(defaultLayer);
homeScene.addLayer(homeLayer);

core.addScene(defaultScene);
core.addScene(homeScene);

core.activeScene = core.scenes[0];

function render() {
  requestAnimationFrame(render);

  core.clear();
  core.update();
  core.draw();
}

requestAnimationFrame(render);
