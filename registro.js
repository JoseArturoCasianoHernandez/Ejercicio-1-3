function Usuario(nombre, contraseña) {
	this.nombre = nombre;
	this.contraseña = contraseña;
}

var nombre = prompt("Ingresa tu nombre: ");
var contraseña = prompt("Ingresa tu contraseña: ")
usuario = new Usuario(nombre, contraseña);

confirm("Bienvenido " + this.nombre);