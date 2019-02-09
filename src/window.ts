import Snap from "snapsvg";
import { Scene } from "./scene/scene.model";
import { fixtures } from "./fixtures/fixtures";

export class Window {
  private snap: Snap.Paper;
  private scene: Scene;

  constructor() {
    this.snap = Snap("#window");
    this.scene = new Scene(fixtures);
    this.draw();
  }

  public draw(): void {
    this.drawScene();
  }

  public drawScene(): void {
    this.scene.changePerspective(1);
    this.scene.changeZoom(120);
    const points = this.scene.getPointsInDrawOrder();

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    for (let i = 1; i < points.length; i += 2) {
      let point1 = points[i - 1];
      let point2 = points[i];
      console.log(`Drawing line from (${point1.normalizedX()}, ${point1.normalizedY()}) to (${point2.normalizedX()}, ${point2.normalizedY()}).`);
      let line = this.snap.line(middleX + point1.normalizedX(), middleY + point1.normalizedY(), middleX + point2.normalizedX(), middleY + point2.normalizedY());
      line.attr({
        "fill-opacity": 0,
        stroke: "#000",
        strokeWidth: 1,
      })
    }
  }
}
