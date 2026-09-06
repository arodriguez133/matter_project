import Matter from 'matter-js';
import { createCanvas, getContext2d, clearCanvas, drawBodies, mountCanvas } from './canvas.js';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

const createWorldBodies = (Bodies) => [
  Bodies.rectangle(500, 200, 80, 80),
  Bodies.rectangle(450, 50, 80, 80),
  Bodies.rectangle(450, 200, 80,80),
  Bodies.rectangle(500, 610, 810, 60, { isStatic: true }),
];

let engine, runner, canvas, rafId;

const render = (context, engine) => {
  clearCanvas(context, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawBodies(context, engine.world.bodies);
  rafId = requestAnimationFrame(() => render(context, engine));
};

const start = () => {
  const { Engine, Runner, Bodies, Composite } = Matter;

  engine = Engine.create();
  Composite.add(engine.world, createWorldBodies(Bodies));

  canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  const context = getContext2d(canvas);
  mountCanvas(canvas);

  runner = Runner.create();
  Runner.run(runner, engine);

  render(context, engine);
};

const stop = () => {
  Matter.Runner.stop(runner);
  cancelAnimationFrame(rafId);
  canvas.remove();
};

start();

if (import.meta.webpackHot) {
  import.meta.webpackHot.dispose(stop);
  import.meta.webpackHot.accept();
}
