// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// Creación de la función
function miFuncion(texto = "") {
    if (texto.length === 0){
        console.log(`No has insertado ninguna cadena.`);
    }else {
        console.log(`'${texto}' tiene ${texto.length} caracteres.`);
    }
}

// Ejecuciones de la función
console.log("\nEjecución 1:");
miFuncion("Hola Mundo");
console.log("\nEjecución 2:");
miFuncion();