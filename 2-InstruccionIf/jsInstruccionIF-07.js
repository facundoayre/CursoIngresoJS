function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	let estadoCivil;
	estadoCivil=document.getElementById("estadoCivil").value;

	if((edad<18)&&(estadoCivil!="Soltero"))
	{
		alert("Es muy pequeño para no ser soltero");
	}

	document.getElementById("txtIdEdad").value="";
	
}




