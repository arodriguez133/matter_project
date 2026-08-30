import Matter from 'matter-js';
function component(){
  const {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite
  } = Matter;

  var engine = Engine.create();

  var render = Render.create({
    element: document.body,
    engine: engine
  });

  var boxA = Bodies.rectangle(400,200,80,80);
  var boxB = Bodies.rectangle(450, 50,80,80);
  var ground = Bodies.rectangle(400,610, 810,60 ,{isStatic:true});
  Composite.add(engine.world, [boxA, boxB, ground]);

  Render.run(render);
  var runner = Runner.create();
  Runner.run(runner, engine);
}

document.body.appendChild(component());
