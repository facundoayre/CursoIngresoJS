/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let conversion;
    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);


    conversion=(((temperatura))-32)*((5/9));
    conversion=parseFloat(conversion);

    alert(temperatura+" Fahrenheit son "+conversion+" centígrados");

    document.getElementById("txtIdTemperatura").value="";

}

function CentigradosFahrenheit () 
{
	let temperatura;
    let conversion;
    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);


    conversion=((temperatura)*9/5)+32;
    conversion=parseFloat(conversion);

    alert(temperatura+" centígrados son "+conversion+" Fahrenheit");

    document.getElementById("txtIdTemperatura").value="";

}


//id="txtIdTemperatura"