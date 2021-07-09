/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let NumeroUno; 
	let NumeroDos;
	let Resultado;
	/* parseInt o parseFloat sirve para convertir string a numero*/


	NumeroUno=document.getElementById("txtIdNumeroUno").value;
	NumeroDos=document.getElementById("txtIdNumeroDos").value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	
	Resultado=NumeroUno+NumeroDos;
	

	alert("La suma es: " +Resultado);

	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";




}

/* NaN es not a number*/
/*<input type="text"  placeholder="Ingrese número Uno" id="txtIdNumeroUno">

				<input type="text"  placeholder="Ingrese número Dos" id="txtIdNumeroDos">*/