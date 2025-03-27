
// una clase es un molde para crear objetos POO
class Moto{
    constructor(marca, color, cilindrada){
        this.marca = marca;
        this.color = color;
        this.cilindrada = cilindrada;
    }

    // metodos de la clase
    encender(){
        console.log("Encendiendo la moto...");
    }

    apagar(){
        console.log("Apagando la moto...");
    }
}

// instanciar un objeto de la clase Moto
let miMoto = new Moto("Honda", "Rojo", 125);


miMoto.encender(); // Encendiendo la moto...

miMoto.apagar(); // Apagando la moto...

// no 
let empleado;
let medico;
let ingeniero;
let abogado;
let contador;
let arquitecto;

// una clase persona
class Persona extends Trabajador{
    constructor(nombre, apellido, edad, dni, profesion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.profesion = profesion;
    }

}

// instanciar un objeto de la clase Persona
let admin = new Persona("Juan", "Perez", 30, "12345678", "Enfermero");

enfermero.safe()

class Producto{
    constructor(nombre, descripcion, stock, precio, proveedor){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        this.proveedor = proveedor;
    }

    // metodos de la clase
    hablar(){
        console.log("Hola soy un producto");
    }
}

let producto1 = new Producto("Producto 1", "Descripcion 1", 10, 100, "Proveedor 1");

producto1.nombre;



