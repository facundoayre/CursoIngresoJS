function mostrar()
{
	let nota;
  let max= 10;
  let min= 1;
  nota=Math.round((Math.random() * (max-min) + min));

	if(nota>=9)
	{
		alert("Tu nota es: "+nota+" EXCELENTE");
	}
	else if(nota>=4)
	{
		alert("Tu nota es: "+nota+" APROBÓ");
	}
	else
	{
		alert("Tu nota es: "+nota+ " Vamos, la próxima se puede");
	}

}
//FIN DE LA FUNCIÓN