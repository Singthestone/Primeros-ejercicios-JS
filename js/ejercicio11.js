var musica = prompt("Pop o Rock");
musica = musica.toLowerCase();
        
if(musica == "pop"){
    document.write("<a href='https://www.youtube.com/watch?v=ArK28lLY6ow'>Escucha tu música preferida</a>");
} else if(musica == "rock"){
    document.write("<a href='https://www.youtube.com/watch?v=4oidkYacWy0'>Escucha tu música preferida</a>");
} else {
    document.write("... Anda, ¡a tu casa!");
}