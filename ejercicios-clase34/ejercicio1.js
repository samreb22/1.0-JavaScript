// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// Creación de la función
function miFuncion(texto = "") {
    if (texto.length == 0){
        console.log(`No has insertado ninguna cadena.\n`);
    }else {
        console.log(`'${texto}' tiene ${texto.length} caracteres.\n`);
    }
}

// Ejecuciones de la función
miFuncion("Hola Mundo");
miFuncion();