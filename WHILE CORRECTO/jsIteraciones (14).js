function mostrar()
{

	var positivo=0;
	var negativo=1;
	var respuesta='si';

	var valor;

	do
	{	
		valor = prompt("Ingrese un número");

	if (valor>=0)
	{
		positivo = positivo + parseInt (valor);
	}else{
		negativo = negativo * parseInt (valor);
	}
		respuesta = prompt("Desea ingresar otro número?");
	
	}while (respuesta == "si" || respuesta == "Si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN