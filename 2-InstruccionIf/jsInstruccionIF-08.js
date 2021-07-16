function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	let estadoCivil;
	estadoCivil=document.getElementById("estadoCivil").value;

	if((edad>=18)&&(estadoCivil=="Soltero"))
	{
		alert("Es soltero y no es menor");
	}

	document.getElementById("txtIdEdad").value="";

}