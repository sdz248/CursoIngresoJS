/*debemos realizar la carga de 5 productos de contagio, de cada uno debo obtener los siguientes datos: el tipo (validar barbijo,jabon o alcohol)
el precio(validar entre 100 y 300) la canitdad de unidades (no puede ser 0 o negativo ni superar las 1000 unidades), la marca y el fabricante
Se debe informar al usuario lo siguiente:
a) del mas caro de los barbijos, la cantidad de unidades y el fabircante
b)del item con mas unidades, el fabricante
c)cuantas unidades de jabon hay en total*/
function mostrar()
{
var tipoProducto;
var contador = 0;
var precio;
var cantidadUnidades;
var cantidadUnidadesMaxima = 0;
var marca;
var fabricante;
var fabricanteMasUnidades;
var barbijoMasCaro;
var fabricanteBarbijoCaro;
var cantidadBarbijosCaros;
var totalJabon = 0;


do {
	contador++;

	tipoProducto = prompt("Ingresar un tipo de producto de prevención de contagio.");

	while (!isNaN(tipoProducto) || (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")){

	alert("Reintentar, no ingresó lo solicitado.");
	tipoProducto = prompt("Ingresar un tipo de producto de prevención de contagio.");
	}

	precio = parseInt(prompt("Ingresar un precio entre 100 y 300."));

	while (isNaN(precio) || !(precio >= 100 && precio <= 300)){

	alert("Reintentar, ingresó un dato no solicitado.");
	precio = parseInt(prompt("Ingresar un precio entre 100 y 300"));
	}

	cantidadUnidades = parseInt(prompt("Ingresar la cantidad de unidades del producto a comprar que no sea 0 o menos, y que no sea mayor a 1000."));

	while (isNaN(cantidadUnidades) || !(cantidadUnidades > 0 && cantidadUnidades <= 1000)){

	alert("Reintentar, no ingresó lo solicitado.");
	cantidadUnidades = parseInt(prompt("Ingresar la cantidad de unidades del producto a comprar que no sea 0 o menos, y que no sea mayor a 1000."));
	}

	marca = prompt("Ingresar la marca del producto.");

	fabricante = prompt("Ingresar el fabricante del mismo.");

	if (contador == 1 || tipoProducto == "barbijo" && barbijoMasCaro < precio){

	barbijoMasCaro = precio;
	cantidadBarbijosCaros = cantidadUnidades;
	fabricanteBarbijoCaro = fabricante;
	}

	if (contador == 1 || cantidadUnidadesMaxima < cantidadUnidades){

	cantidadUnidadesMaxima = cantidadUnidades;
	fabricanteMasUnidades = fabricante;
	}

	if(contador == 1 || tipoProducto == "jabon"){

	totalJabon =+ cantidadUnidades;
	}

} while (contador < 5)

	document.write("La cantidad de unidades de barbijos más caro es "+cantidadBarbijosCaros+"<br>El fabricante de los barbijos más caros es "+fabricanteBarbijoCaro);
	document.write("<br>El fabricante del item con más unidades es "+fabricanteMasUnidades);
	document.write("<br>La cantidad de jabones que hay en total es "+totalJabon);


}



