function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if((edad<13)||(edad>17))
	{
		alert("La persona no es un adolescente");
	}
	

	document.getElementById("txtIdEdad").value="";	
}
//FIN DE LA FUNCIÓN