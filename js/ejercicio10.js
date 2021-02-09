var autor;
// Y otra variable para guardar las vueltas del bucle while.
var intentos=0;

// Iniciamos el bucle while y que se repita siempre que la respuesta sea distinta a "Cervantes".
while(autor!="Cervantes"){
   autor = prompt("¿Quién es el autor de Don Quijote de la Mancha?");
// Y cada vez que se da una vuelta en el bucle while, el valor de la variable "intentos" incrementa en 1.
   intentos = intentos + 1;
}

// Le ponemos la condición de escribir en el HTML la siguiente frase si los intentos son superiores a 5.
if(intentos > 5){
     document.write(intentos + 
                     " intentos para acertar la respuesta, YA TE VALE");
// Y cualquier otro tipo de acción escribirá en el HTML la siguiente frase.
} else {
     document.write(intentos + 
                     " intentos para acertar la respuesta, MUY BIEN");   
}