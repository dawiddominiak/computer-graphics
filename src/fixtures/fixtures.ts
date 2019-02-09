import { Cuboid } from "../figures/cuboid.model";

export const fixtures = [
  new Cuboid(-500, 100, -500, 10, 1000, 1000), // floor
  new Cuboid(-400, 100, -400, 150, 150, 250),
  new Cuboid(-400, 100, 0, 150, 150, 400),
  new Cuboid(0, 100, -400, 150, 300, 100),
  new Cuboid(250, 100, -200, 150, 100, 200)
];
