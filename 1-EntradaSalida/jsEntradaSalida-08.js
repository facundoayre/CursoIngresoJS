/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let Dividendo;
	let Divisor;
	let Resto;
	Dividendo=document.getElementById("txtIdNumeroDividendo").value;
	Divisor=document.getElementById("txtIdNumeroDivisor").value;
	Dividendo=parseInt(Dividendo);
	Divisor=parseInt(Divisor);
	Resto=Dividendo%Divisor;

	alert("El resto de la división es: " +Resto);
	document.getElementById("txtIdNumeroDividendo").value="";
	document.getElementById("txtIdNumeroDivisor").value="";
}




/*<input type="text"  placeholder="Ingrese dividendo" id="txtIdNumeroDividendo">
		<font color=black> dividendo: es el número que se va a dividir  </font>

		<input type="text"  placeholder="Ingrese divisor" id="txtIdNumeroDivisor">
		<font color=black>	divisor: es el número por el cual se divide </font>
		<br>	
		<br>		
		<a  class="MiBotonUTNnav"  onclick="SacarResto()" >mostrar resto( % )</a>*/