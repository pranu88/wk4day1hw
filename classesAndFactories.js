class Hamster {
    owner = " "
    price = 15
    constructor(hname){
        this.hname = hname
    }
    wheelRun(){
        console.log("squeak squeak")
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price
    }
}

class Person {
    constructor(name){
        this.name = name
    }
    age = 0
    height = 0
    weight = 0
    mood = 0
    hamsters = []
    bankAccount = 0
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello ${this.name}!`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(){        
        this.hamsters.push(gus)
        this.mood += 10
        this.bankAccount = this.bankAccount - gus.getPrice()
        return this.bankAccount
    }
}
// creating object for Hampster class
let gus = new Hamster("Gus")
// creating object for Person class
const timmy = new Person('Timmy')
timmy.age =5
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.age =9
gus.owner = "Timmy"
timmy.buyHamster()
timmy.age = 15
timmy.eat()
timmy.eat()
console.log(timmy)
timmy.exercise()
timmy.exercise()
console.log(timmy)

