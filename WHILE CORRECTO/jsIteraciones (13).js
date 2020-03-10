function mostrar()
{
	var contador=0;
	var acumulador=0;
	var valor=0;
	var respuesta='si';

do
{
	contador++;
	valor = prompt("Ingrese un número");
	acumulador = acumulador + parseInt (valor);
	respuesta = prompt("Desea ingresar otro número?");

}while (respuesta == "si" || respuesta == "Si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN