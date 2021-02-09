// Establecemos la varibles "musica" que será la que recoja la respuesta de la pregunta "¿Pop o Rock?".
var musica = prompt("¿Pop o Rock?");
musica = musica.toLowerCase();
        
// Le aplicamos la condición de que la variale "musica" cuando tenga el valor de pop escribirá un enlace y una frase
// en HTML.
if(musica == "pop"){
    document.write("<a href='https://www.youtube.com/watch?v=ArK28lLY6ow'>Escucha tu música preferida</a>");
    // Se le aplica la condición de que la variable "musica" cuando tenga el valor rock escribirá un enlace y una frase
    // en el HTML.
} else if(musica == "rock"){
    document.write("<a href='https://www.youtube.com/watch?v=4oidkYacWy0'>Escucha tu música preferida</a>");
    // Y cualquier otro valor, escribirá en el HTML la siguiente frase.
} else {
    document.write("... Anda, ¡a tu casa!");
}