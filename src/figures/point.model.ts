import { MatrixTransformationService } from "../common/matrix-transformation.service";

export class Point {
  private pointMatrix: number[];

  constructor(x: number, y: number, z: number) {
    this.pointMatrix = [
      x,
      y,
      z,
      1
    ];
  }

  public move(tx: number, ty: number, tz: number): void {
    const moveMatrix = MatrixTransformationService.createMoveMatrix(tx, ty, tz);
    this.pointMatrix = MatrixTransformationService.applyMatrixTransformation(moveMatrix, this.pointMatrix);
  }

  public tilt(yaw: number, roll: number, pitch: number): void {
    let tiltMatrics: number[][];

    if (yaw != 0) {
      tiltMatrics = MatrixTransformationService.createYawMatrix(yaw);
    } else if (roll != 0) {
      tiltMatrics = MatrixTransformationService.createRollMatrix(roll);
    } else if (pitch != 0) {
      tiltMatrics = MatrixTransformationService.createPitchMatrix(pitch);
    }

    this.pointMatrix = MatrixTransformationService.applyMatrixTransformation(tiltMatrics, this.pointMatrix);
  }

  public changeZoom(factor: number): void {
    const zoomMatrix = MatrixTransformationService.createZoomMatrix(factor);
    this.pointMatrix = MatrixTransformationService.applyMatrixTransformation(zoomMatrix, this.pointMatrix);
  }

  public changePerspective(factor: number): void {
    const perspectiveMatrix = MatrixTransformationService.createPerspectiveMatrix(factor);
    this.pointMatrix = MatrixTransformationService.applyMatrixTransformation(perspectiveMatrix, this.pointMatrix);
  }

  public x(): number {
    return this.pointMatrix[0];
  }

  public y(): number {
    return this.pointMatrix[1];
  }

  public z(): number {
    return this.pointMatrix[2];
  }

  public normalizedX(): number {
    return this.pointMatrix[0]/this.pointMatrix[3];
  }

  public normalizedY(): number {
    return this.pointMatrix[1]/this.pointMatrix[3];
  }

  public normalizedZ(): number {
    return this.pointMatrix[2]/this.pointMatrix[3];
  }
}
