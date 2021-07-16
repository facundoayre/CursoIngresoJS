/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    /* (largo*2+ancho*2)*3 para sacar el total de alambre */
    let largo;
    let ancho;
    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;
    largo=parseFloat(largo);
    ancho=parseFloat(ancho);
    let perimetro;
    perimetro= (largo+ancho)*2*3;
    alert("Se necesitan "+perimetro+" metros de alambre");
    document.getElementById("txtIdLargo").value="";
    document.getElementById("txtIdAncho").value="";
    document.getElementById("txtIdRadio").value="";


}
function Circulo () 
{
	/*2pi por radio  */
    let pi;
    let radio;
    pi=3.1416;
    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);
    let perimetro;
    let cantHilos;
    cantHilos=3;
    perimetro= (2*pi*radio*cantHilos);
    alert("Se necesitan "+perimetro+" metros de alambre");
    document.getElementById("txtIdLargo").value="";
    document.getElementById("txtIdAncho").value="";
    document.getElementById("txtIdRadio").value="";


}

function Materiales () 
{
	let largo;
    let ancho;
    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;
    largo=parseFloat(largo);
    ancho=parseFloat(ancho);
    let area;
    area= largo*ancho;
    let cemento;
    let cal;
    cemento=area*2;
    cal=area*3;
    alert("El terreno tiene "+area+" metros cuadrados y se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");

    document.getElementById("txtIdLargo").value="";
    document.getElementById("txtIdAncho").value="";
    document.getElementById("txtIdRadio").value="";

}

/* <input type="text"  placeholder="Largo del terreno" id="txtIdLargo">
				<input type="text"  placeholder="Ancho del terreno" id="txtIdAncho">
				<input type="text"  placeholder="Radio del terreno" id="txtIdRadio">*/

                /* las constantes van a tomar un valor al principio del programa y nunca más va a cambiar ese valor Y HAY QUE DEFINIRLAS EN EL MOMENTO QUE SE DECLARAN, NO SE PUEDE ASIGNAR DESPUES */