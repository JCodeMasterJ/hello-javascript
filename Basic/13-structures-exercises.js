// 1. Crea un array que almacene cinco animales
let animals = ["Buey", "Vaca", "Perro", "Gato"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.push("Serpiente")
animals.unshift("Mosca")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(3, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let library = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"])
console.log(library)
// 5. Añade dos más. Uno de ellos repetido
library.add("Libro 6")
library.add("Libro 7")
library.add("Libro 7")
console.log(library)

// 6. Elimina uno concreto a tu elección
library.delete("Libro 3")
console.log(library)

// 7. Crea un mapa que asocie el número del mes a su nombre
let month = new Map([[1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"], [5, "Mayo"], [6, "Junio"], [7, "Julio"], [8, "Agosto"], [9, "Septiembre"], [10, "Octubre"], [11, "Noviembre"], [12, "Diciembre"]])
console.log(month)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(month.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = [1, 2, 3, 4, 5]
let mySet = new Set(myArray)
let myMap = new Map([["Numeros: ", mySet]])
console.log(myArray)
console.log(mySet)
console.log(myMap)