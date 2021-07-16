/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let productoA;
    let productoB;
    let productoC;
   productoA=document.getElementById("txtIdPrecioUno").value;
   productoB=document.getElementById("txtIdPrecioDos").value;
   productoC=document.getElementById("txtIdPrecioTres").value;
        productoA=parseFloat(productoA);
        productoB=parseFloat(productoB);
        productoC=parseFloat(productoC);

    let suma;
    suma=(productoA+productoB+productoC);

    alert("La suma de los precios es de: $"+suma);

    document.getElementById("txtIdPrecioUno").value="";
    document.getElementById("txtIdPrecioDos").value="";
    document.getElementById("txtIdPrecioTres").value="";

}
function Promedio () 
{
	let productoA;
    let productoB;
    let productoC;
   productoA=document.getElementById("txtIdPrecioUno").value;
   productoB=document.getElementById("txtIdPrecioDos").value;
   productoC=document.getElementById("txtIdPrecioTres").value;
        productoA=parseFloat(productoA);
        productoB=parseFloat(productoB);
        productoC=parseFloat(productoC);

        let promedio;
        promedio=((productoA+productoB+productoC)/3);

     alert("El promedio de los precios es de: $"+promedio);

    document.getElementById("txtIdPrecioUno").value="";
    document.getElementById("txtIdPrecioDos").value="";
    document.getElementById("txtIdPrecioTres").value="";

}
function PrecioFinal () 
{
	let productoA;
    let productoB;
    let productoC;
   productoA=document.getElementById("txtIdPrecioUno").value;
   productoB=document.getElementById("txtIdPrecioDos").value;
   productoC=document.getElementById("txtIdPrecioTres").value;
        productoA=parseFloat(productoA);
        productoB=parseFloat(productoB);
        productoC=parseFloat(productoC);

        let precioFinal;
        precioFinal=((productoA+productoB+productoC)*1.21);

        alert("La suma de los precios con IVA es de: $"+precioFinal);
    document.getElementById("txtIdPrecioUno").value="";
    document.getElementById("txtIdPrecioDos").value="";
    document.getElementById("txtIdPrecioTres").value="";

}

/*te facturación</h1>
	 			<input type="text"  placeholder="Ingrese Precio" id="txtIdPrecioUno">
				<input type="text"  placeholder="Ingrese Precio" id="txtIdPrecioDos">
				<input type="text"  placeholder="Ingrese Precio" id="txtIdPrecioTres"> */