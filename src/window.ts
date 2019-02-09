import Snap from "snapsvg";
import { Scene } from "./scene/scene.model";
import { fixtures } from "./fixtures/fixtures";

export class Window {
  private snap: Snap.Paper;
  private scene: Scene;

  constructor() {
    this.snap = Snap("#window");
    this.snap.circle(150, 150, 100);
    this.scene = new Scene(fixtures);
  }
}
