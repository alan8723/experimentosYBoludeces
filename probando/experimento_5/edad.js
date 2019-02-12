var nacimiento = document.getElementById("¿Cuando_nasiste?");
var fechaActual = document.getElementById("año_actual");
var mostrar = document.getElementById("Tus_años")

var boton = document.getElementById("boton")
boton.addEventListener("click", calculo);

function calculo()
{
  var n = parseInt(nacimiento.value)
  var f = parseInt(fechaActual.value)
  if (n < f)
  {
    resultado = f - n;
  }
  else {
    mostrar.innerHTML = "nel perro :v"
  }
  if (resultado > 0)
  {
   mostrar.innerHTML = "esta es tu edad: <strong>" + resultado + " años<strong/>"
  }

 }
