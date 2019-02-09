import { Point } from "./point.model";

export abstract class Figure {
  constructor(private readonly points: Point[]) { }

  public move(tx: number, ty: number, tz: number): void {
    for (let point of this.points) {
      point.move(tx, ty, tz);
    }
  }

  public tilt(yaw: number, roll: number, pitch: number): void {
    for (let point of this.points) {
      point.tilt(yaw, roll, pitch);
    }
  }

  public changePerspective(factor: number): void {
    for (let point of this.points) {
      point.changePerspective(factor);
    }
  }

  public changeZoom(factor: number): void {
    for (let point of this.points) {
      point.changeZoom(factor);
    }
  }

  public getPointsInDrawOrder(): Point[] {
    return this.getDrawOrder()
      .map((index) => this.points[index]);
  }

  protected abstract getDrawOrder(): number[];
}
