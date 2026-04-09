// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return a + b
}
console.log(sum(4, 9))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let may = 0
let numbers = [2, 31, 9, 4, 7, 12, 1]
function mayor(numbers) {
    for (let value of numbers) {
        if (value > may) {
            may = value
        }
    }
    return may
}
console.log(mayor(numbers))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let word = "Hola muy buenas tardes"
let cont = 0
function vocals(word) {
    for (let value of word) {
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
            cont++
        }
    }
    return `Hay ${cont} vocales en total`
}

console.log(vocals(word))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let words = ["hola", "chao", "oi", "ate logo"]
let newWords = []
const mywords = (value) => {
    for (let val of value) {
        newWords.push(val.toUpperCase())
    }
    return newWords
}
console.log(mywords(words))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
cont = 0
function isPrime(num) {
    for (let i = num; i > 0; i--) {
        if (num % i == 0) {
            cont++
        }
        // console.log(i)
    }
    if (cont == 2) {
        // console.log("Is prime")
        return true
    } else {
        // console.log("No prime")
        return false
    }
}
console.log(isPrime(10))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = [2, 4, 6, 8, 10]
let array2 = [1, 2, 3, 4, 5, 7, 9, 10]
let newArray = []
function compare(A1, A2) {
    for (let val1 of A1) {
        for (let val2 of A2) {
            if (val1 == val2) {
                newArray.push(val1)
            }
        }
    }
    return newArray
}
console.log(compare(array1, array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
sum = 0
array2.forEach((value) => { if (value % 2 == 0) { sum += value } return sum })
console.log(sum)
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
newArray = []
array1.forEach((value) => { return newArray.push(value ** 2) })
console.log(newArray)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let text = "Hola me van a invertir"
let newText = ""
function inverse(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        // console.log(text[i])
        // newText.split(text[i], 1)
        newText += text[i]
    }
    return newText
}
console.log(inverse(text))


// 10. Crea una función que calcule el factorial de un número dado