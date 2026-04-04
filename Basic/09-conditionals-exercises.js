// 1. Imprime por consola tu nombre si una variable toma su valor
let namer = "Juanes"
if (namer == "Juanes") {
    console.log(`Mi nombre es ${namer}`)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Juan"
let pwd = "1234"
if (user == "Juan" && pwd == "123") {
    console.log("Permiso concecido")
} else {
    console.log("Permiso denegado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 5
if (num == 0) {
    console.log("El numero es cero")
} else if (num < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es positivo")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 13
if (age >= 18) {
    console.log("Apto para votar")
} else {
    let dif = 18 - age
    console.log("No puede votar, le faltan " + dif + " años")
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
const isAdult = age > 18 ? "adulto" : "menor"
console.log(isAdult)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Abril"
mes = mes.toUpperCase()
if (mes == "MARZO" || mes == "ABRIL" || mes == "MAYO") {
    console.log("Pasa ligera la maldita primaveraaaa")
} else if (mes == "JUNIO" || mes == "JULIO" || mes == "AGOSTO") {
    console.log("Tranquilito de verano")
} else if (mes == "SEPTIEMBRE" || mes == "OCTUBRE" || mes == "NOVIEMBRE") {
    console.log("Hojitas de otoño")
} else if (mes == "DICIEMBRE" || mes == "ENERO" || mes == "FEBRERO") {
    console.log("El frío invierno")
} else {
    console.log("Mes invalido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7