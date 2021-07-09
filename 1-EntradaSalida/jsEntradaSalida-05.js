/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/


function mostrar()
{	
	let NombreIngresado;
	let EdadIngresada;
	document.getElementById("txtIdNombre").value;

	document.getElementById("txtIdEdad").value;

NombreIngresado=document.getElementById("txtIdNombre").value;

EdadIngresada=document.getElementById("txtIdEdad").value;


alert("Usted se llama "+NombreIngresado+" y tiene "+EdadIngresada+" años");

document.getElementById("txtIdNombre").value="";
	document.getElementById("txtIdEdad").value="";



}
