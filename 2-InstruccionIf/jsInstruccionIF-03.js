function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>=18)
	{
		alert("La persona es mayor de edad");
	}
	else
	{
	alert("La persona es menor de edad");
	}
	
	

	document.getElementById("txtIdEdad").value="";


}
//FIN DE LA FUNCIÓN