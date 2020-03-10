function mostrar()
{
	var vnum;
	var vmin;
	var vmax;
	var respuesta='si';
	
	vnum = prompt("Ingrese un número");
	var vmin = vnum
	var vmax = vnum
	respuesta = prompt("Desea ingresar otro número?");
	
	while(respuesta!='no')
	{	
		vnum = prompt("Ingrese un número");

		if (vnum > vmax)
		{
		vmax = vnum;
		}
		if (vnum < vmin)
		{
		vmin = vnum;
		}
		respuesta = prompt("Desea ingresar otro número?");
	}
	
	document.getElementById('minimo').value=vmin;
	document.getElementById('maximo').value=vmax;



}//FIN DE LA FUNCIÓN