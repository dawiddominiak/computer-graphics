import { Figure } from "../figures/figure.model";
import { Point } from "../figures/point.model";

export class Scene {
  constructor(private readonly figures: Figure[]) { }

  public getPointsInDrawOrder(): Point[] {
    return this.figures.reduce(
      (order: Point[], figure) => order.concat(figure.getPointsInDrawOrder()),
      []
    )
  }

  public moveX(value: number): void {
    this.figures.forEach(
      (figure) => figure.move(value, 0, 0)
    );
  }

  public moveY(value: number): void {
    this.figures.forEach(
      (figure) => figure.move(0, value, 0)
    );
  }

  public moveZ(value: number): void {
    this.figures.forEach(
      (figure) => figure.move(0, 0, value)
    )
  }

  public tiltPitch(radians: number): void {
    this.figures.forEach(
      (figure) => figure.tilt(0, 0, radians)
    )
  }

  public tiltRoll(radians: number): void {
    this.figures.forEach(
      (figure) => figure.tilt(0, radians, 0)
    )
  }

  public tiltYaw(radians: number): void {
    this.figures.forEach(
      (figure) => figure.tilt(radians, 0, 0)
    )
  }

  public changePerspective(factor: number) {
    this.figures.forEach(
      (figure) => figure.changePerspective(factor)
    )
  }
}
