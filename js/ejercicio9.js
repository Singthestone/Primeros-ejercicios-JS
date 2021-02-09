// Crear una variable que se llame autor para guardar la respuesta a la pregunta.
var autor;
// Y otra variable para guardar las vueltas del bucle while.
var intentos=0;

// Iniciamos el bucle while y que se repita siempre que la respuesta sea distinta a "Cervantes".
while(autor!="Cervantes"){
   autor = prompt("¿Quién es el autor de Don Quijote de la Mancha?");
// Y cada vez que se da una vuelta en el bucle while, el valor de la variable "intentos" incrementa en 1.
   intentos = intentos + 1;
}

// Escribe en el html el número de intentos que se han requerido para acertar la pregunta 
// (ALERTA, resto uno para que sea el número de fallos).
document.write("Intentos fallidos " + (intentos-1));