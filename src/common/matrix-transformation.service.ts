export class MatrixTransformationService {
  public static createMoveMatrix(
    tx: number,
    ty: number,
    tz: number
  ): number[][] {
    return [
      [1, 0, 0, tx],
      [0, 1, 0, ty],
      [0, 0, 1, tz],
      [0, 0, 0,  1]
    ];
  }

  public static createYawMatrix(yaw: number): number[][] {
    return [
      [Math.cos(yaw), 0, Math.sin(yaw), 0],
      [0, 1, 0, 0],
      [-Math.sin(yaw), 0, Math.cos(yaw), 0],
      [0, 0, 0,  1]
    ];
  }

  public static createPitchMatrix(pitch: number): number[][] {
    return [
      [1, 0, 0, 0],
      [0, Math.cos(pitch), -Math.sin(pitch), 0],
      [0, Math.sin(pitch), Math.cos(pitch), 0],
      [0, 0, 0, 1],
    ];
  }

  public static createRollMatrix(roll: number): number[][] {
    return [
      [Math.cos(roll), -Math.sin(roll), 0, 0],
      [Math.sin(roll), Math.cos(roll), 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ];
  }

  public static createPerspectiveMatrix(perspectiveFactor: number): number[][] {
    return [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, perspectiveFactor, 0]
    ];
  }

  public static createZoomMatrix(zoomFactor: number): number[][] {
    return [
      [zoomFactor, 0, 0, 0],
      [0, zoomFactor, 0, 0],
      [0, 0, zoomFactor, 0],
      [0, 0, 0, 1]
    ]
  }

  public static applyMatrixTransformation(
    transformationMatrix: number[][],
    pointMatrix: number[]
  ) {
    return transformationMatrix.map((internalMatrix) =>
      internalMatrix.reduce((sum, matrixElement, i) =>
         sum + matrixElement * pointMatrix[i]
      , 0)
    );
  }
}
