function mostrar()
{ var numero;
  var positivos=0;
  var negativos=1;
  var respuesta;

  do {

      numero = prompt("Ingrese un numero");

      if(numero >0){
        positivos = positivos + parseInt(numero);

      }
      else {
         if (numero<0)

         negativos = negativos * parseInt(numero);


      }
      respuesta = prompt("desea ingresar otro numero?");



  } while(respuesta == "si" || respuesta == "Si");

   document.getElementById("suma").value=positivos;
   document.getElementById("producto").value=negativos;
	


}/*Al presionar el botón pedir números hasta que el 
usuario quiera, sumar los que son positivos y multiplicar los negativos.*/