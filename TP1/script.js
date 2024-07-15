// Variables
const productosDisponibles = ['Manzana', 'Jamon', 'Banana', 'Fideos', 'Arroz', 'Leche', 'Pan', 'Queso'];
let carrito = [];

// Mostrar Productos Disponibles 
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productosDisponibles.length; i++) {
        mensaje += (i + 1) + ". " + productosDisponibles[i] + "\n";
    }
    alert(mensaje);
}

// Agregar al Carrito
function agregarProducto() {
    mostrarProductos();
    let eleccion = parseInt(prompt("Ingrese el numero del producto que desea agregar al carrito:"));
    if (eleccion > 0 && eleccion <= productosDisponibles.length) {
        carrito.push(productosDisponibles[eleccion - 1]);
        alert(productosDisponibles[eleccion - 1] + " ha sido agregado al carrito.");
    } else {
        alert("No existe este Producto, Intentar nuevamente");
    }
}

// Eliminar del Carrito
function quitarProducto() {
    if (carrito.length === 0) {
        alert("El carrito esta vacio.");
        return;
    }
    let mensaje = "Productos en tu carrito:\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i] + "\n";
    }
    alert(mensaje);
    let eleccion = parseInt(prompt("Ingrese el numero del producto que desea quitar del carrito:"));
    if (eleccion > 0 && eleccion <= carrito.length) {
        alert(carrito[eleccion - 1] + " ha sido eliminado del carrito.");
        carrito.splice(eleccion - 1, 1);
    } else {
        alert("Eleccion no valida.");
    }
}

// Mostrar el carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito esta vacio.");
    } else {
        let mensaje = "Productos en tu carrito:\n";
        for (let i = 0; i < carrito.length; i++) {
            mensaje += (i + 1) + ". " + carrito[i] + "\n";
        }
        alert(mensaje);
    }
}

// Main
function simuladorCompras() {
    while (true) {
        let opcion = parseInt(prompt(
            "Ingrese el numero de la opcion que desea realizar:\n" +
            "1. Agregar producto al carrito\n" +
            "2. Quitar producto del carrito\n" +
            "3. Mostrar carrito\n" +
            "4. Salir"
        ));
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                quitarProducto();
                break;
            case 3:
                mostrarCarrito();
                break;
            case 4:
                alert("Gracias por su compra. ¡Hasta luego!");
                return;
            default:
                alert("Opcion no válida. Intentalo de nuevo.");
        }
    }
}


simuladorCompras();
