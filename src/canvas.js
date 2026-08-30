export const createCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  return canvas;
}

export const getContext2d = (canvas) => canvas.getContext('2d');

export const clearCanvas = (context, width, height, color = '#fff') => {
  context.fillStyle = color;
  context.fillRect(0,0, width, height);
};

const traceVertices = (context, vertices) => {
  const [first, ...rest] = vertices;
  context.moveTo(first.x, first.y);
  rest.forEach(({x, y}) => context.lineTo(x, y));
  context.lineTo(first.x, first.y);
};

export const drawBodies = (context, bodies, style = { lineWidth: 1, strokeStyle: '#999'}) => {
  context.beginPath();
  bodies.forEach((body) => traceVertices(context, body.vertices));
  context.lineWidth = style.lineWidth;
  context.strokeStyle = style.strokeStyle;
  context.stroke();
};

export const mountCanvas = (canvas, parent = document.body) => {
  parent.appendChild(canvas);
};
