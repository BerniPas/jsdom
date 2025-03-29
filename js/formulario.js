
/* let formulario = document.querySelectord("form");

formulario.addEventListener("submit", procesarFormulario);
 */
let productos = []; // array de productos

let usuario = localStorage.getItem("usuario"); // obtenemos el usuario del localStorage

let bienvenido = document.getElementById("bienvenido"); // obtenemos el elemento donde se mostrará el usuario
bienvenido.innerText = `Bienvenido ${usuario}`; // mostramos el usuario en el elemento

// creamos la función para recuperar datos del form
function procesarFormulario(event) {
    event.preventDefault(); 

    //  obtenemos los datos
    let user = document.getElementById("nombreUser").value;
    let nombre = document.getElementById("nombreProducto").value;
    let descripcion = document.getElementById("descripcionProducto").value;
    let imagen = document.getElementById("imagen").value;
    let stock = document.getElementById("stockProducto").value;
    let precio = document.getElementById("precioCosto").value;
    let proveedor = document.getElementById("proveedorProducto").value;


    // creamos el objeto producto   
    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        stock: stock,
        precio:  precio,    
        proveedor: proveedor,
    };


    productos.push(producto); // agregamos el producto al array

    // agregamos el producto al localStorage
    localStorage.setItem("productos", JSON.stringify(productos));

    // guardamos el usuario en el localStorage
    localStorage.setItem("usuario", user);

    console.log(productos);
    console.log(user); // mostramos el usuario en la consola
    

    document.querySelector('form').reset(); // limpiamos el formulario
}

document.querySelector('form').addEventListener('submit', procesarFormulario);

let borrar = document.getElementById("borrar"); // obtenemos el botón de borrar

borrar.addEventListener("click", function() {
    localStorage.clear(); // limpiamos el localStorage
    productos = []; // vaciamos el array de productos
    console.log("Productos borrados y user eliminado"); // mostramos en consola que se borraron los productos y el usuario
}); // agregamos el evento al botón de borrar


let sesion = document.getElementById("sesion"); // obtenemos el botón de cerrar sesión
sesion.addEventListener("click", function() {
    localStorage.removeItem("usuario"); // eliminamos el usuario del localStorage
    window.location.href = "../index.html"; // redirigimos a la página de inicio
}); // agregamos el evento al botón de cerrar sesión