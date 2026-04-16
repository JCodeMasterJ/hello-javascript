// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola ${this.name} bienvenido`)
    }

    static isAdult(age) {
        if (age > 18) {
            return "Es adulto"
        } else {
            return "Ta chiquito"
        }
    }
}
let person = new Person("Juan", 21)
console.log(person.name)
console.log(person.age)
person.greet()
console.log(Person.isAdult(30)) //Respecto a la clase, no la instancia

// 6. Crea una clase que haga uso de herencia
class Student extends Person {
    #grade
    #gender
    constructor(name, age, degree, grade, gender) {
        super(name, age)
        this.degree = degree
        this.#grade = grade
        this.#gender = gender
    }
    get gender() {
        return this.#gender
    }
    set grade(grade) {
        this.#grade = grade
    }

    get grade() {
        return this.#grade
    }
}
let student = new Student("Pepito", 13, "Quinto", 3.5, "M")
console.log(student.age)
console.log(student.degree)
console.log(student.gender)
student.grade = 4.7
console.log(student.grade)

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 