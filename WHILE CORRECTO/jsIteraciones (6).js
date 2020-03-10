function mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor=0;


   while(contador<5){

   valor = prompt("ingrese un numero.");
   acumulador = acumulador + parseInt(valor);
   contador++;



   }




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;  //en el promedio para no poner solo un numero y que se preste a error puedo poner la variable directamente

//ej: document.getelementbyId(promedio).value=acumulador/contador

}//FIN DE LA FUNCIÓN

	var contador=0;
	var acumulador=0;
	var numero=0;

	while(contador <5)
	{

     numero =prompt("ingrese un numero");
     numero = parseInt (numero);
     acumulador = acumulador + numero;
   

     contador++;


	}

	document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/contador;