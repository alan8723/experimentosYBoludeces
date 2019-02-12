var estado = 0;
var colorLinea = "black";

var boton_azul = document.getElementById("botonAzul");
var boton_rojo = document.getElementById("botonRojo");
var boton_amarillo = document.getElementById("botonAmarillo");
var boton_rosa = document.getElementById("botonRosa");
boton_rojo.addEventListener("click", colorRojo);
boton_azul.addEventListener("click", colorAzul);
boton_amarillo.addEventListener("click", colorAmarillo);
boton_rosa.addEventListener("click", colorRosa);

function colorRojo() {
  colorLinea = "red"
}
function colorAzul() {
  colorLinea = "blue"
}
function colorRosa() {
  colorLinea = "pink"
}
function colorAmarillo() {
  colorLinea = "yellow"
}

var cuadro = document.getElementById("dibujando_click");
var papel = cuadro.getContext("2d");
var x;
var y;
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse);


dibujarLinea("black", 0, 0, 0, 500, papel);
dibujarLinea("black", 0, 500, 500, 500, papel);
dibujarLinea("black", 0, 0, 500, 0, papel);
dibujarLinea("black", 500, 0, 500, 500, papel);


function dibujarMouse(evento){
  if (estado == 1) {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}


function presionarMouse(evento){
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}


function soltarMouse(evento){
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
