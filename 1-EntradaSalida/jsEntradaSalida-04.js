/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*Me puedo ahorrar un paso de la variable, asignandole directamente a la caja de texto el valor del prompt */
function mostrar()
{
	let NombreIngresado;
	
     NombreIngresado=prompt ("Ingrese su nombre:");

	document.getElementById("txtIdNombre").value=NombreIngresado;
	

}

