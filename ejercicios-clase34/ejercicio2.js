/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

// Creación de la función
function miFuncion(texto = "", numero = undefined){
    if (texto.length == 0){
        console.log(`No has insertado ninguna cadena.\n`);
    }else {
        let textoRecortado = texto.slice(0, numero);
        console.log(`Cadena original: '${texto}'  |  Cadena recortada: '${textoRecortado}'\n`);
    }
}

// Ejecuciones de la función
miFuncion("Hola mundo", 4);
miFuncion("Hola Mundo");
miFuncion();