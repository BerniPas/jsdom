// creamos el arreglo de productos
/* let productos = []; */

// cargar productos desde el localstorage
const cargarProductos = () => {

    // obtenemos los datos del localstorage
    let productos = JSON.parse(localStorage.getItem("productos") || "[]"); // si no hay productos, se inicializa como un array vacío

    // obtenemos el elemento de la tabla
    let tablaProductos = document.getElementById("tablaProductos");

    // limpiamos la tabla
    tablaProductos.innerHTML = "";  

    //cargamos la tabla
    for (let i = 0; i < productos.length; i++) {

        let fila = document.createElement("tr");

        fila.innerHTML = `
                        <td>${i + 1}</td>
                        <td>${productos[i].nombre}</td>
                        <td>${productos[i].descripcion}</td>
                        <td>${productos[i].stock}</td>
                        <td>${productos[i].precio}</td>
                        <td>${productos[i].proveedor}</td>
                        <td>
                            <img src="${productos[i].imagen}" alt="${productos[i].nombre}" width="100">
                        </td>
                        `;
        tablaProductos.appendChild(fila);
    }
/* 
    productos.array.forEach(element => {
        
    });
 */


    console.log(productos);
    
}

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))


document.addEventListener("DOMContentLoaded", cargarProductos());
