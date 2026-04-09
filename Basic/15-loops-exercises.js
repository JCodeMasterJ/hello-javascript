// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let index = 1; index < 21; index++) {
    console.log(`Numero: ${index}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0
for (let index = 1; index < 101; index++) {
    sum += index
}
console.log(`La suma es: ${sum}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i < 51; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["Juan", "Pepe", "Cate", "Martin", "Elias", "Din"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let word = "Hola muy buenas tardes"
let cont = 0
for (let value of word) {
    if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
        cont++
    }
}
console.log(`Hay ${cont} vocales en total`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 2, 3, 4, 6]
let mult = 1
for (const value of numbers) {
    mult *= value
}
console.log(`El producto es: ${mult}`)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("Tabla del 5:")
for (let i = 1; i < 11; i++) {
    console.log(`${i} x ${5} = ${i * 5}`)
}
// 8. Usa un bucle para invertir una cadena de texto
let text = "Hola me van a invertir"
for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i])
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num1 = 0
let num2 = 1
let fib = 0
console.log(num1)
console.log(num2)
for (let i = 0; i < 8; i++) {
    fib = num1 + num2 // 1 2 3
    num1 = num2 // 1 1 2
    num2 = fib // 1 2 3
    console.log(fib)
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numbers2 = [10, 2, 30, 4, 60, 7, 80]
let may = []
for (let value of numbers2) {
    if (value > 10) {
        may.push(value)
    }
}
console.log(may)