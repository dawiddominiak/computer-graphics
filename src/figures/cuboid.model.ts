import { Figure } from "./figure.model";
import { Point } from "./point.model";
import config from "./../common/config";

export class Cuboid extends Figure {
  constructor(
    startX: number,
    startY: number,
    startZ: number,
    height: number,
    width: number,
    length: number
  ) {
    const z = startZ - config.zOffset;
    super([
      new Point(startX, startY, z),
      new Point(startX + width, startY, z),
      new Point(startX + width, startY - height, z),
      new Point(startX, startY - height, z),
      new Point(startX, startY, z + length),
      new Point(startX + width, startY, z + length),
      new Point(startX + width, startY - height, z + length),
      new Point(startX, startY - height, z + length),
    ])
  }

  protected getDrawOrder(): number[] {
    return [
      0, 1, 1, 2, 2, 3, 3, 0,
      4, 5, 5, 6, 6, 7, 7, 4,
      0, 4, 1, 5, 2, 6, 3, 7
    ];
  }
}
