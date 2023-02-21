class Usuario { 
    constructor (nombre, apellido) {          //no olvidar constructor ni llaves
    this.nombre = nombre ,
    this.apellido = apellido 
    this.metodo = function () { //puedo escribir cualquier nombre, lo toma como metodo.
        return nombre 
    }
    }                                 
}

var user4 = new Usuario ("Fede", "bart", "")

var user1 = new Usuario ("Federica", "Bartoli")
var user2 = new Usuario ("Xavier", "Barsuto")

function nuevaUsuario (nombre1,apellido2){
    return "hola" + nombre1 + apellido2 

} 
