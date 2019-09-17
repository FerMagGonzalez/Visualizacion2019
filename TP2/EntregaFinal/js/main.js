let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let mousePos;
let click = false;
let figura = new Polygon(ctx);
let poligonos = [];

function getMousePos(canvas, e) {
  let pos = canvas.getBoundingClientRect();
  return { // devuelve un objeto
    x: Math.round(e.clientX - pos.left),
    y: Math.round(e.clientY - pos.top)
  }
}

canvas.onmousedown = function(e) {
  click = true;
  if (click) {
    mousePos = getMousePos(canvas, e);
    figura.agregarCirculo(mousePos.x, mousePos.y, 10);
    let message = 'Se apreto en: ' + mousePos.x + ' - ' + mousePos.y;
    console.log(message);
  }
}

function cerrarFigura() {
  if (figura.circulos.length < 3) {
    alert('No hay puntos suficientes para unir.')
  }
  else {
    figura.cerrar();
    poligonos.push(figura);
    figura = new Polygon(ctx);
  }
}

function limpiarCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}