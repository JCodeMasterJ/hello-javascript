// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = ["Hola", "mundo", "juancho", "roiz"]
let myArray2 = [1, 2, 3, 4, 5]
let [e1, e2] = myArray
console.log(e1)
console.log(e2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [e3, e4, , , e5 = "Pancho"] = myArray
console.log(e5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let obj1 = { name: "Juanes", age: 21, alias: "Repre" }
let { name, age } = obj1
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let { name: name2, age: age2 } = obj1
console.log(name2)
console.log(age2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}
let { job: { name: jobName2, exp } } = person3
console.log(jobName2)
console.log(exp)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myNewArray = [...myArray, ...myArray2]
console.log(myNewArray)

// 7. Usa propagación para crear una copia de un array
let myCopyArray = [...myArray2]
console.log(myCopyArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let newObject = { ...person3, ...obj1 }
console.log(newObject)

// 9. Usa propagación para crear una copia de un objeto
let copyObj = { ...obj1 }
console.log(copyObj)

// 10. Combina desestructuración y propagación
