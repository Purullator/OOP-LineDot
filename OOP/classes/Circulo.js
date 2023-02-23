class Circulo {
  constructor(p = new Punto(), r = 1) {
    this.centro = p;
    this.radio = r;
  }

  mover(dx, dy) {
    this.centro.mover(dx, dy);
    return this;
  }
  distanciaCentroOrigen() {
    return this.centro.distanciaCentroOrigen();
  }
  distanciaBordeOrigen() {
    return this.centro.distanciaOrigen() - this.radio;
  }
  area() {
    return Math.PI * this.radio * this.radio;
  }
  perimetro() {
    return 2 * Math.PI * this.radio;
  }
  diametro() {
    return 2 * this.radio;
  }
  toString() {
    return 'Circulo - centro:' + this.centro + ' radio:' + this.radio;
  }
}
