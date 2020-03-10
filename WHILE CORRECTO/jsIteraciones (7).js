 function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var valor=0;

  do {

  	 contador++;
  	 valor = prompt("ingrese un numero");
  	 acumulador = acumulador + parseInt(valor);
  	 respuesta = prompt ("desea ingresar otro numero?");
  }while(respuesta=="si" || respuesta=="Si");





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN




//8

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