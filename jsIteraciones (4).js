function mostrar()
{
   var numero = prompt("Ingrese un numero entre 0 y 9");


   numero = parseInt(numero);

   while(numero <0 || numero>=10 ){
	numero = prompt("Ingrese un numero entre 0 y 9");

   }

   document.getElementById("Numero").value=numero;
  
          

}//FIN DE LA FUNCIÓN

