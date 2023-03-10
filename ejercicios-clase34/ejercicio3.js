/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

// Creación de la función
function miFuncion(texto = "", sep = undefined){
    if (texto.length == 0){
        console.log(`No has insertado ninguna cadena.`);
    }else if (sep == undefined){
        console.log(`No has insertado el caracter separador.`);
    }else {
        let arr = texto.split(sep);
        console.log(arr);
    }
}

// Ejecuciones de la función
console.log("\nEjecución 1: ");
miFuncion("Hola que tal", " ");
console.log("\nEjecución 2: ");
miFuncion("Hola que tal");
console.log("\nEjecución 3: ");
miFuncion("", "-");
console.log("\nEjecución 4: ");
miFuncion("Lunes-Martes-Miércoles-Jueves-Viernes-Sábado-Domingo", "-");