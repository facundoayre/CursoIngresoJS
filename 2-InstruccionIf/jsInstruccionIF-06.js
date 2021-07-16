function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>=18)
		{
			alert("La persona es mayor de edad");
		}
		else if((edad>=13)&&(edad<=17))
		{
		alert("La persona es un adolescente");
		}
		else 
		{
		alert("La persona es un niño");
		}
	document.getElementById("txtIdEdad").value="";	
}
//FIN DE LA FUNCIÓN


/* operadores relacionales
=
== compara valor
=== compara valor y tipo
< menor
> mayor
<= menor igual
>= mayor igual
! negación
!= distinto
*/

/* 
operadores lógicos (unen expresiones)
&& y
|| o






*/