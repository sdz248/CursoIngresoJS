/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;



	dividendo = document.getElementsById("numeroDividendo").value;
	dividendo = parseInt(dividendo);



	divisor = document.getElementsById("numeroDivisor").value;
    divisor = parseInt(divisor);


    
    resto = dividendo % divisor;
    resto = parseInt(resto);


   alert("el resto es" + resto);








}