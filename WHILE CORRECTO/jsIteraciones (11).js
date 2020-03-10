function mostrar()
{

var contador=0;
var valor;
var positivo=0;
var negativo=0;
var ipositivo=0;
var inegativo=0;
var ceros=0;
var pares=0;
var respuesta="si";
//me falta crear variables para los promedios y diferencias

valor = prompt("Ingrese un número");
respuesta = prompt("Desea ingresar otro número?");
valor=parseInt(valor)
while(respuesta!='no')
{ 
	valor = prompt("Ingrese un número");

	if (valor%2==0)
	{
		pares++;
	}
	if (valor==0)
	{
		cero++;
	}
	else
	{
		if (valor>=0)
		{
		positivo = positivo + valor;
		ipositivo++;
		}
		else
		{
		negativo = negativo + valor;
		inegativo++;
		}
	}

	respuesta = prompt("Desea ingresar otro número?");
}

document.write ("Suma de positivos: "+ positivo+ "<br>");
document.write ("Suma de negativos: "+negativo+"<br>" );
document.write ("Cantidad de positivos: "+ipositivo+"<br>");
document.write ("Cantidad de negativos: "+inegativo+"<br>");
document.write ("Cantidad de ceros: "+ceros+"<br>");
document.write ("Cantidad de pares: "+pares+"<br>");
/*
document.write ("Promedio de positivos: "++"<br>")
document.write ("Promedio de negativos: "++"<br>")
document.write ("Diferencia entre negativos y positivos: "++"<br>")
*/
}