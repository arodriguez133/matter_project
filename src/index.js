import Matter from 'matter-js';
import { createCanvas, getContext2d, clearCanvas, drawBodies, mountCanvas } from './canvas.js';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

const createWorldBodies = (Bodies) => [
  Bodies.rectangle(400, 200, 80, 80),
  Bodies.rectangle(450, 50, 80, 80),
  Bodies.rectangle(400, 610, 810, 60, { isStatic: true }),
];

const render = (context, engine) => {
  clearCanvas(context, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawBodies(context, engine.world.bodies);
  requestAnimationFrame(() => render(context, engine));
};

const main = (() => {
  const { Engine, Runner, Bodies, Composite } = Matter;

  const engine = Engine.create();
  Composite.add(engine.world, createWorldBodies(Bodies));

  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  const context = getContext2d(canvas);
  mountCanvas(canvas);

  const runner = Runner.create();
  Runner.run(runner, engine);

  render(context, engine);
})();
