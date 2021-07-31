console.log("El dia de mi cumple anios es el : " + 3);
console.log("El mes de mi cumple es : " + 7 );
console.log("El anio de mi nacimiento fue en : " + 1982);
console.log("mi numero favorito es el : " + 5);

var fraseUsuario = prompt("Escriba una frase por favor");
console.log(fraseUsuario)

var nombreUsuario = prompt("Cual es su nombre?");
console.log("Hola " + nombreUsuario + "!")

var nombreUsuario2 = prompt("Escriba su nombre, por favor");
var apellidoUsuario = prompt("escriba su apellido, por favor");
console.log("Su nombre completo es : " + nombreUsuario2  +  apellidoUsuario);

var edad = prompt("ingrese su edad");
console.log("Ud tiene  " + edad + " anios" );

var masa = prompt("ingrese su peso, por favor")
var altura = prompt("Ingrese su altura, por favor");
var BMI = masa / (Math.pow(altura,2))
console.log("Su BMI es : " + BMI)

var cantidadDeVentanasEnMiCasa = 20
console.log("la cantidad de ventanas en mi casa es: " + cantidadDeVentanasEnMiCasa)

var soyHumano = true
console.log(soyHumano)

var miGustoDePizzaPreferido = "muzzarella";
console.log("mi gusto de pizza favorita es la " + miGustoDePizzaPreferido)

var VariableFalsa = false
if(VariableFalsa == 0 ){
    console.log("Hola Minions");
}