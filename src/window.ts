import Snap from "snapsvg";

export class Window {
  constructor() {
    const snap = Snap("#window");
    snap.circle(150, 150, 100);
  }
}
