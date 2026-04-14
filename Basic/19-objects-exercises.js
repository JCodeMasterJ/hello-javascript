// 1. Crea un objeto con 3 propiedades
let person = {
    name: "Juancho",
    age: 21,
    gender: "M"
}
// 2. Accede y muestra su valor
console.log(person.name)
console.log(person.age)
console.log(person.gender)
// 3. Agrega una nueva propiedad
person.hobbie = "Ping pong"
console.log(person)
// 4. Elimina una de las 3 primeras propiedades
delete person.age
console.log(person)
// 5. Agrega una función e invócala
person.greet = function () {
    console.log("Holiwis")
}
person.greet()

// 6. Itera las propiedades del objeto
for (let value in person) {
    console.log(value)
}
// 7. Crea un objeto anidado
let father = {
    priority: 1,
    son: {
        priority: 2,
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(father.priority)
console.log(father.son.priority)
// 9. Comprueba si los dos objetos creados son iguales
console.log(person == father)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(person.name == father.priority)