/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let Sueldo;
	let SueldoIncrementado;
	
	Sueldo= document.getElementById("txtIdSueldo").value;
	Sueldo=parseInt(Sueldo);
	SueldoIncrementado=(Sueldo*1.1);

	document.getElementById("txtIdResultado").value=SueldoIncrementado;


	
}

/*Ingrese Dos números</h1>
				<input type="text"  placeholder="Ingrese sueldo" id="txtIdSueldo">

				<input type="text" readonly  placeholder="Resultado" id="txtIdResultado">
		
			
			<a  class="MiBotonUTNnav"  onclick="mostrarAumento()" >Mostrar aumento</a>*/