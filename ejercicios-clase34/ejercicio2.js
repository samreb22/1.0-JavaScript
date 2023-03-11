/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

// Creación de la función
function miFuncion(texto = "", numero = undefined){
    if (texto.length === 0){
        console.log(`No has insertado ninguna cadena.`);
    }else if (numero === undefined){
        console.log(`No has insertado ningún número para recortar la cadena original.`);
    }else {
        let textoRecortado = texto.slice(0, numero);
        console.log(`Cadena original: '${texto}'  |  Cadena recortada: '${textoRecortado}'.`);
    }
}

// Ejecuciones de la función
console.log("\nEjecución 1:");
miFuncion("Hola mundo", 4);
console.log("\nEjecución 2:");
miFuncion("Hola Mundo");
console.log("\nEjecución 3:");
miFuncion();