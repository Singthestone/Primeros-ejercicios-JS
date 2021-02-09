// Crear una variable de nombre colores para guardar la respuesta que se escriba.
// Pasar la respuesta a minúsculas.
var colores = prompt("¿Cuál colo prefieres: rojo, blanco o violeta").toLowerCase();

// Crear una condición switch que dependiendo del caso realiza una acción u otra.
switch (colores) {
    // Si la respuesta es rojo, mete una imagen de un coche rojo dentro del hmtl.
    case 'rojo':
        document.write("<img src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/red-retro-car-and-sea-yaroslav-chyzhevskyi.jpg'>");
        // Así finalizamos la instrucción de mostrar la imagen del coche rojo.
        break;
    // Lo mismo que en el caso anterior y las siguientes líneas.
    case 'blanco':
        document.write("<img src='https://i.pinimg.com/236x/3e/38/d3/3e38d3a6a303b31b84aee7124b74e98e--mercedes-convertible-pink-cars.jpg'>");
        break;
    case 'violeta':
        document.write("<img src='https://i.pinimg.com/600x315/8f/35/95/8f35955748722e26b3970f58aef5cbd5.jpg'>");
        break;
    // Cualquier otra respuesta que no esté comprendida dentro de los "case" se mostrará esta frase en el html.
    default:
        document.write("Color no disponible");
}