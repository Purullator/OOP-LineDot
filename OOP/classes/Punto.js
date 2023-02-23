class Punto {
  x;
  y;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }

  mover(dx = 0, dy = 0) {
    this.x += dx;
    this.y += dy;
    return this;
  }
  aOrigen() {
    this.x = 0;
    this.y = 0;
    return this;
  }
  distanciaOrigen() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  distanciaA(p) {
    return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
  }

  dibujar(lienzo, color = '#FF0000') {
    var c = lienzo.getContext('2d');
    c.beginPath();
    c.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    c.fillStyle = color;
    c.fill();
    c.strokeStyle = color;
    c.stroke();
    c.fillText(this, this.x + 10, this.y);

    return this;
  }
}
