class Polygon {

  constructor(ctx) {
    this.circulos = [];
    this.centro = null;
    this.contexto = ctx;
  }

  agregarCirculo(x, y, r){
    let actual = new Circle(x, y, r);
    actual.dibujar(this.contexto);
    this.circulos.push(actual);
    let cant = this.circulos.length;
    if (cant > 1){
      let anterior = this.circulos[cant-2];
      this.conectarPuntos(actual.posX, actual.posY, anterior.posX, anterior.posY);
    }
  }

  conectarPuntos(xi, yi, xf, yf){
    this.contexto.beginPath();
    this.contexto.strokeStyle = '#FFE900'
    this.contexto.lineWidth = 2;
    this.contexto.moveTo(xi, yi);
    this.contexto.lineTo(xf, yf);
    this.contexto.stroke();  // Draw it
  }

  cerrar(){
    let inicio = this.circulos[0];
    let fin = this.circulos[this.circulos.length - 1];
    this.conectarPuntos(inicio.posX, inicio.posY, fin.posX, fin.posY);
    this.generarCentro();
  }

  generarCentro(){
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < this.circulos.length; i++) {
      sumX = sumX + this.circulos[i].posX;
      sumY = sumY + this.circulos[i].posY;
    }
    let xc = sumX / this.circulos.length;
    let yc = sumY / this.circulos.length;
    this.centro = new Circle(xc, yc, '7');
    this.centro.dibujar(this.contexto, '#00fe0a');
  }

}
