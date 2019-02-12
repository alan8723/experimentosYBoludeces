var teclas =
 {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

var colorTecla =
{
  BLUE: 87,
  RED: 83,
  YELLOW: 68,
  PINK: 65
};
document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujoE");
var papel = cuadrito.getContext("2d");
var x = 250;
var y = 250;

dibujarLinea("blue", 249, 249, 252, 252, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 4;
   lienzo.moveTo(x_inicial, y_inicial);
   lienzo.lineTo(x_final, y_final);
   lienzo.stroke();
   lienzo.closePath()
}

function dibujarTeclado(eventos)
{
 switch (eventos.keyCode) {
   case colorTecla.BLUE:
   color_l = "blue"
     break;
       case colorTecla.RED:
       color_l = "red"
     break;
     case colorTecla.YELLOW:
     color_l = "yellow"
     break;
     case colorTecla.PINK:
     color_l = "pink"
   default:
 }
var movimiento = 5;
switch (eventos.keyCode)
 {
  case teclas.UP:
  dibujarLinea(color_l, x, y, x, y - movimiento, papel);
  y = y - movimiento;
    break;
  case teclas.DOWN:
  dibujarLinea(color_l, x, y, x, y + movimiento, papel);
  y = y + movimiento;
    break;
  case teclas.LEFT:
  dibujarLinea(color_l, x, y, x - movimiento, y, papel);
  x = x - movimiento;
    break;
  case teclas.RIGHT:
  dibujarLinea(color_l, x, y, x + movimiento, y, papel);
  x = x + movimiento;
    break;
  default:
  console.log(eventos.keyCode);
    break;
}
}
