/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos OK. 2-Suma de los positivos OK. 3-Cantidad de positivos OK. 4-Cantidad de negativos OK.
 5-Cantidad de ceros OK. 6-Cantidad de números pares.  OK 7-Promedio de positivos. 
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
  var diferenciaPositivosNegativos;
  var respuesta = "si";
  var promedioPositivos;
  var promedioNegativos;
  

  numero = parseInt(prompt("Ingrese un numero."));
  respuesta = prompt("Desea ingresar otro numero??");


  while(respuesta == "si" || respuesta == "Si") 
  {
       
       contador++;

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
       else 
       if(numero %2 == 0)
       {
           numerosPares++;
       }
         
      promedioPositivos = numerosPositivos / cantidadPositivos;
      promedioNegativos = numerosNegativos / cantidadNegativos;
      diferenciaPositivosNegativos = cantidadPositivos - cantidadNegativos;


     respuesta = prompt(" Desea ingresar otro numero?.");


   }
    document.write("La suma de los numeros negativos es "+cantidadNegativos+"<br> La suma de los numeros positivos es "+cantidadPositivos);






}