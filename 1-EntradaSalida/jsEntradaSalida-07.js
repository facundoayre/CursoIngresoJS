/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let NumeroUno;
	let NumeroDos;
	let Suma;
	NumeroUno=document.getElementById("txtIdNumeroUno").value;
	NumeroDos=document.getElementById("txtIdNumeroDos").value;
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	Suma=NumeroUno+NumeroDos;
	alert("El resultado de la suma es: " +Suma);
	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";
}
function restar()
{
	let NumeroUno;
	let NumeroDos;
	let Resta;
	NumeroUno=document.getElementById("txtIdNumeroUno").value;
	NumeroDos=document.getElementById("txtIdNumeroDos").value;
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	Resta=NumeroUno-NumeroDos;
	alert("El resultado de la resta es: " +Resta);
	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";
}
function multiplicar()
{ 
	let NumeroUno;
	let NumeroDos;
	let Multiplicacion;
	NumeroUno=document.getElementById("txtIdNumeroUno").value;
	NumeroDos=document.getElementById("txtIdNumeroDos").value;
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	Multiplicacion=NumeroUno*NumeroDos;
	alert("El resultado de la multiplicación es: " +Multiplicacion);
	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";
}
function dividir()
{
	let NumeroUno;
	let NumeroDos;
	let Division;
	NumeroUno=document.getElementById("txtIdNumeroUno").value;
	NumeroDos=document.getElementById("txtIdNumeroDos").value;
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	Division=NumeroUno/NumeroDos;
	alert("El resultado de la división es: " +Division);
	document.getElementById("txtIdNumeroUno").value="";
	document.getElementById("txtIdNumeroDos").value="";
}

