/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos.
 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 
8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).*/


function mostrar()
{
  var contador=0;
  var numero;
  var numerosNegativos=0;
  var numerosPositivos=0;
  var cantidadPositivos=0;
  var cantidadNegativos=0;
  var ceros=0;
  var numerosPares=0;
  var diferenciaPositivosNegativos=0;
  var respuesta;

   do {
       contador++;
       numero = parseInt(prompt("Ingrese un numero."));

       if(numero >0){
           numerosPositivos = numerosPositivos + numero;
           cantidadPositivos++;
       }
       else 
       if(numero<0){
          numerosNegativos = numerosNegativos + numero;
          cantidadNegativos++;

       } 
       
       else 
       if(numero==0){
           ceros++;
       }
         

      




   }while(respuesta=="si" || respuesta == "Si");











}