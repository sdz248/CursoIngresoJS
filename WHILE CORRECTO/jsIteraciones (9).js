function mostrar()
{

	
	var contador=0;
	var numero;
	var respuesta; 
	var maximo=0;
	var minimo=0;


	do  
	{ 
		contador++;
		numero = parseInt(prompt("Ingrese un numero"));
		

        if (contador == 1) 
        {
        	var maximo = numero;
        	var minimo = numero;
        }

        else 
        	if(contador > 1 && numero > maximo)
        	{
        		maximo = numero;
        	}
          
          else
          	if(contador >1 && numero < minimo)
          	{
          		minimo = numero;
          	}
       
   

			  respuesta = prompt("Quieres ingresar otro numero?");
	
	} while(respuesta == "si" || respuesta == "Si");

   document.getElementById('maximo').value=maximo;
   document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN

//en vez de prompt pongo ... respuesta = confirm("desea ingresar otro num??")  
// me va aparecer una ventana con "Aceptar" o "Cancelar" de ese modo me ahorro
// tener que poner siempre si o no y me ahorro el toLowerCase
//estandarizo la respuesta total es si o no nada mas.