function mostrar()
{

var contador=0;
var acumulador=0;
var valor = 0;

while (contador < 5)
{
valor = prompt("Ingrese un número");
acumulador = acumulador + parseInt (valor);
contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN