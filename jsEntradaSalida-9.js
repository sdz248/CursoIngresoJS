/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var resultado;
  


    sueldo = document.getElementsById("sueldo").value;

    sueldo = parseInt(sueldo);

     

     aumento = sueldo *10/100;
     aumento = parseInt (aumento);




    resultado = sueldo + aumento;
    resultado = document.getElementsById("resultado").valeu = resultado;

    resultado = parseInt(resultado);

















	
}
