/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaro la variable
	let nombreIngresado;
	//asigno la variable
	//nombreIngresado=txtIdNombre.value;
	//txtIdNombre

//Esto se hace para que llame a algo que esta en el html
	document.getElementById("txtIdNombre").value;
//acá asignamos que eso que traemos es el contenido de la variable
	nombreIngresado=document.getElementById("txtIdNombre").value;
//con esto la publico
	alert("Su nombre es: " +nombreIngresado);
//esto es un añadido para que el cuadrado vuelva a estar en blanco
	document.getElementById("txtIdNombre").value="";

}


