var texto = document.getElementById("textoDeLineas");
var boton = document.getElementById("botonsito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

dibujarLinea("yellow", 1, 1, 1, 300);
dibujarLinea("yellow", 1, 299, 299, 299);
dibujarLinea("yellow", 1, 1, 299, 1);
dibujarLinea("yellow", 299, 1, 299, 299);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(x_inicial, y_inicial);
   lienzo.lineTo(x_final, y_final);
   lienzo.stroke();
   lienzo.closePath()
}
function dibujoPorClick()
{
  var z = parseInt(texto.value);
  var lineas = z;
  var l = 0;
  var yi, xf;
  var yf, xi;
  var espacio = ancho / lineas;

      while(l < lineas)
      {
        yf = espacio * l;
        xi = espacio * (l + 1);
      dibujarLinea("black", xi, 0, 300, yf);
      console.log("linea " + l);
         l++;
      }
}
