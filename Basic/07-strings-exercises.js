// 1. Concatena dos cadenas de texto
let myName = "Juanes"
let surname = "Páez"
console.log("Mi nombre es " + myName + " y mi apellido es " + surname)
// 2. Muestra la longitud de una cadena de texto
console.log(myName.length)
// 3. Muestra el primer y último carácter de un string
console.log(myName[0])
console.log(myName[myName.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mult = `Esta es
una cadena de 
varias lineas`
console.log(mult)
// 6. Interpola el valor de una variable en un string
console.log(`Aqui interpolando con el pana ${myName}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let phrase = "Esta es una frase bastante larga y de mucho espacio"
console.log(phrase.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(phrase.includes("larga"))
// 9. Comprueba si dos strings son iguales
console.log(myName === "Juanes")
// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length == "Juan".length)
