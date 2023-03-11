// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// Creación de la función
function miFuncion(texto = "", numVeces = undefined) {
    if (texto.length === 0){
        console.log(`No has insertado ninguna cadena.`);
    }else if (numVeces === undefined){
        console.log("No has indicado el número de veces que quieres repetir la cadena.");
    }else if (numVeces === 0 || numVeces < 0){
        console.log("El número de veces que quieres repetir la cadena no puede ser 0 o un valor negativo.");
    }else {
        for (let i = 0; i < numVeces; i++){
            console.log(`Repetición ${i+1}: ${texto}`);
        }
    }
}

// Ejecuciones de la función:
console.log("\nEjecución 1:");
miFuncion("Hola Mundo", 3);
console.log("\nEjecución 2:");
miFuncion("Hola Mundo");
console.log("\nEjecución 3:");
miFuncion("Hola Mundo", 0);
console.log("\nEjecución 4:");
miFuncion("Hola Mundo", -3);