/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let Importe;
	let ImporteReducido;
	
	Importe= document.getElementById("txtIdImporte").value;
	Sueldo=parseInt(Importe);
	ImporteReducido=(Importe*0.75);

	document.getElementById("txtIdResultado").value=ImporteReducido;
}

/*<form class=" animated bounceInLeft FormIngreso">
		<h1>Ingrese el importe</h1>
				<input type="text"  placeholder="Ingrese importe" id="txtIdImporte">

				<input type="text" readonly  placeholder="Resultado" id="txtIdResultado">*/