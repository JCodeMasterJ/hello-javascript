// 1. Escribe un comentario en una línea

//Ya

// 2. Escribe un comentario en varias líneas

/*Tolis
listo
ready*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myText = "Texto"
let myInt = 6
let myFloat = 3.6
let myBoolean = false
let myNull = null
let mySymbol = Symbol("id")
let myBigInt = 16416519763149631631n

// 4. Imprime por consola el valor de todas las variables

console.log(myText)
console.log(myInt)
console.log(myFloat)
console.log(myBoolean)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)
console.log(undefined)
console.log("***********************")
// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myText)
console.log(typeof myInt)
console.log(typeof myFloat)
console.log(typeof myBoolean)
console.log(typeof myNull)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof undefined)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myText = "Texto Modificado"
myInt = 12
myFloat = 9.6
myBoolean = true
mySymbol = Symbol("id2")
myBigInt = 164165197631496316312n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myText = 25
myInt = "12"
myFloat = false
myBoolean = 5.9
mySymbol = 164165197631496316312n
myBigInt = Symbol("id3")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myText2 = 25
const myInt2 = "12"
const myFloat2 = false
const myBoolean2 = 5.9
const mySymbol2 = 164165197631496316312n
const myBigInt2 = Symbol("id3")
// 9. A continuación, modifica los valores de las constantes

// myText2 = 253
// myInt2 = "129"
// myFloat2 = true
// myBoolean2 = 5.95
// mySymbol2 = 16416519763149n
// myBigInt2 = Symbol("id4")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse