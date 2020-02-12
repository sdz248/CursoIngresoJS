/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
   var numerouno;
   var numerodos;
   var resultado;

   numerouno = document.getElementById("numeroUno").value;

   numerouno = parseInt(numerouno);



   numerodos = document.getElementById("numeroDos").value;

   numerodos = parseInt(numerodos);



   resultado = numerouno + numerodos;

   resultado = parseInt(resultado);

   alert("la suma es" + resultado);



	
}

function restar()
{
   var numerouno;
   var numerodos;
   var resultado;

   numerouno = document.getElementById("numeroUno").value;

   numerouno = parseInt(numerouno);



   numerodos = document.getElementById("numeroDos").value;

   numerodos = parseInt(numerodos);



  resultado= numerouno - numerodos;
  resultado = parseInt(resultado);



  alert ("la resta es" + resultado);


	
}

function multiplicar()
{ 
	


   var numerouno;
   var numerodos;
   var resultado;

   numerouno = document.getElementById("numeroUno").value;

   numerouno = parseInt(numerouno);




   numerodos = document.getElementById("numeroDos").value;

   numerodos = parseInt(numerodos);



  resultado= numerouno * numerodos;
  resultado = parseInt(resultado);




  alert ("la multiplicacion es" + resultado);











}

function dividir()
{


   var numerouno;
   var numerodos;
   var resultado;

   numerouno = document.getElementById("numeroUno").value;

   numerouno = parseInt(numerouno);



   numerodos = document.getElementById("numeroDos").value;

   numerodos = parseInt(numerodos);



  resultado= numerouno / numerodos;
  resultado = parseInt(resultado);

  

  alert ("la division es" + resultado);
	











}

