let nombre;
let menu;
let menuProductos;
let idCarrito = [];
let carrito = [];
let total=0;
const laptop = {
    id: 1,
    nombre: 'Laptop Corei7 RTX3060',
    precio: 700
}
const mouse = {
    id: 2,
    nombre: 'Mouse Thunderobot ML702',
    precio: 100
}
const audi = {
    id: 3,
    nombre: 'Audifonos Turtlebeach Rojos',
    precio: 150
}
const moni = {
    id: 4,
    nombre: 'Monitor Gateway 2K 27"',
    precio: 250
}

do {
    nombre = prompt("Buenas buenas, ¿Cual es tu nombre?");
    if (nombre == null || nombre == '') {
        alert('Necesitas ingresar un nombre');
    }
} while (nombre == null || nombre == '')

alert('Hola ' + nombre);
console.log(nombre);
do {
    menu = prompt('Que accion desea realizar ' + nombre + '?\n\n1.- Añadir productos\n2.- Ver carrito\n3.- Suma total de los productos');
    if (menu == 1) {
        menuProductos = prompt('Selecciona el numero del producto que deseas agregar al carrito\n\n1. ' + laptop.nombre + '\n2. ' + mouse.nombre + '\n3. ' + audi.nombre + '\n4. ' + moni.nombre + '\n 5. Ninguno');
        if (menuProductos <= 5) {
            parseInt(idCarrito.push(menuProductos));
        } else {
            alert('Necesitas ingresar un opcion valida');
        }

    }
    else if (menu == 2) {
        for (let i = 0; i <= idCarrito.length; i++) {
            console.log(idCarrito[i])
            if (idCarrito[i] == laptop.id) {
                carrito.push(laptop.nombre+'\n');
            } else if (idCarrito[i] == mouse.id) {
                carrito.push(mouse.nombre+'\n');
            } else if (idCarrito[i] == audi.id) {
                carrito.push(audi.nombre+'\n');
            } else if (idCarrito[i] == moni.id) {
                carrito.push(moni.nombre+'\n');
            }
        }
        alert('Carrito:\n\n' + carrito);
        console.log(carrito);
    }
    else if(menu == 3){
        for (let i = 0; i <= idCarrito.length; i++) {
            if (idCarrito[i] == laptop.id) {
                total = total+laptop.precio;
            } else if (idCarrito[i] == mouse.id) {
                total = total+mouse.precio;
            } else if (idCarrito[i] == audi.id) {
                total = total+audi.precio;
            } else if (idCarrito[i] == moni.id) {
                total = total+moni.precio;
            }
        }
        alert('El precio total a pagar es de: $'+total+'USD')
    }
    
} while (menu != 3)



