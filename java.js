// Dispensador de golosinas online

// Pedir el monto ingresado por el usuario
let monto = parseFloat(prompt("Ingrese la cantidad de dinero que desea usar (en soles):"));

// Mostrar el menú y pedir la opción
let opcion = prompt(`
    ================================
    1. Gaseosa: S/ 4.00
    2. Papitas: S/ 2.00
    3. Oreo: S/ 1.00
    4. Chupetín: S/ 3.00
    ================================
    INGRESA UNA OPCIÓN:
`);

// Variables para almacenar el precio y el vuelto
let precio = 0;
let producto = "";

// Determinar el precio según la opción seleccionada
switch (opcion) {
    case "1":
        precio = 4;
        producto = "Gaseosa";
        break;
    case "2":
        precio = 2;
        producto = "Papitas";
        break;
    case "3":
        precio = 1;
        producto = "Oreo";
        break;
    case "4":
        precio = 3;
        producto = "Chupetín";
        break;
    default:
        console.log("Opción no válida. Por favor, selecciona una opción entre 1 y 4.");
        break;
}

// Verificar si el precio es válido y si el monto es suficiente
if (precio > 0) {
    if (monto >= precio) {
        let vuelto = monto - precio;
        console.log(`Has elegido ${producto}. Tu vuelto es S/ ${vuelto.toFixed(2)}.`);
    } else {
        console.log(`Saldo insuficiente. Necesitas al menos S/ ${precio.toFixed(2)} para comprar ${producto}.`);
    }
}
