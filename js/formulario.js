
/* let formulario = document.querySelectord("form");

formulario.addEventListener("submit", procesarFormulario);
 */
let productos = []; // array de productos

// creamos la función para recuperar datos del form
function procesarFormulario(event) {
    event.preventDefault(); 

    //  obtenemos los datos
    let nombre = document.getElementById("nombreProducto").value;
    let descripcion = document.getElementById("descripcionProducto").value;
    let stock = document.getElementById("stockProducto").value;
    let precio = document.getElementById("precioCosto").value;
    let proveedor = document.getElementById("proveedorProducto").value;


    // creamos el objeto producto   
    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        stock: stock,
        precio:  precio,    
        proveedor: proveedor,
    };


    productos.push(producto); // agregamos el producto al array

    // agregamos el producto al localStorage
    localStorage.setItem("productos", JSON.stringify(productos));

    console.log(productos);

    document.querySelector('form').reset(); // limpiamos el formulario
}

document.querySelector('form').addEventListener('submit', procesarFormulario);

let borrar = document.getElementById("borrar"); // obtenemos el botón de borrar

borrar.addEventListener("click", function() {
    localStorage.clear(); // limpiamos el localStorage
    productos = []; // vaciamos el array de productos
    console.log("Productos borrados");
}); // agregamos el evento al botón de borrar