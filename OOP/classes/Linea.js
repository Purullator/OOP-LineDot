class Linea {
  p1 = null;
  p2 = null;

  constructor(p1 = new Punto(0, 0), p2 = new Punto(1, 0)) {
    this.p1 = p1;
    this.p2 = p2;
  }

  mover(dx = 0, dy = 0) {
    this.p1.mover(dx, dy);
    this.p2.mover(dx, dy);
    return this;
  }

  aOrigen() {
    this.p2.mover(-this.p1.x, -this.p1.y);
    this.p1.aOrigen();
    return this;
  }
  longitud() {
    return this.p1.distanciaA(this.p2);
  }
  toString() {
    return 'LINEA: desde ' + this.p1 + ' hasta ' + this.p2;
  }

  dibujar(lienzo, color = '#000000') {
    this.p1.dibujar(lienzo, color);
    this.p2.dibujar(lienzo, color);

    var c = lienzo.getContext('2d');
    c.beginPath();
    c.moveTo(this.p1.x, this.p1.y);
    c.lineTo(this.p2.x, this.p2.y);
    c.strokeStyle = color;
    c.stroke();

    return this;
  }
}
