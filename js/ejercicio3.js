// Meter dentro de una variable la respuesta a la pregunta de la ventanita.
var pais = prompt ("¿Cuál es tu país favorito?");

// Cambiar cualquier caracter introducido a minúsculas con toLowerCase() e iniciar una condición.
if (pais.toLowerCase() != "francia") {
    // Aplicar la condición a la variable pais que cualquier palabra introducida 
    // diferente de "Francia/francia/FRANCIA..." genere un mensaje en una ventanita emergente.
    alert("Pues te recomiendo que visites algún día Francia, ¡es un país espectacular!");
}