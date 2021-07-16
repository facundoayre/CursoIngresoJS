function mostrar()
{
  let numero;
  let max= 10;
  let min= 1;
  numero=Math.round((Math.random() * (max-min) + min));
  
  alert("Número aleatorio entre 1 y 10: "+numero);

}

/*
Math.random te da números entre 0 y 1, incluyendo al 0 y excluyendo al 1
Math.floor toma el entero y lo redondea para abajo
Math.ceil toma el entero y lo redondea para arriba
Math.round redondea al entero más cercano
*/