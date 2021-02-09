// Meter dentro de la variable edad la respuesta que escriban en la ventana.
var edad = prompt("¿Cuántos años tienes?");

if (edad<18) {
    // Aplicar la condición de si la variable edad es inferior de 18, aparezca un mensaje en una ventanita.
    alert("No se permite el acceso a menores de edad. No puedes entrar en esta página");
} else {
    // Cualquier otro valor de la variable edad creará otro mensaje en una ventanita.
    alert("Comprobada la mayoría de edad. Tienes acceso a la página.");
}