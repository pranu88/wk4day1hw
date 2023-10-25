// =======================
// HAMSTER AND PERSON
// =======================
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
for(let i =0; i < 5;i++){
    timmy.ageUp()
}
for(let i =0; i < 5; i++){
timmy.eat()
}
for(let i = 0; i < 5; i++){
    timmy.exercise()
}
for(let i =0; i < 9;i++){
    timmy.ageUp()
}
gus.owner = "Timmy"
timmy.buyHamster()
for(let i =0; i < 15;i++){
    timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
console.log(timmy)

// =============================
//       CHEF MAKE DINNERS
// =============================

class Dinner {
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}
// factory class
class Chef {
    constructor(){
        this.menu = []

    } 
    cook(appetizer,entree,dessert){
        let newDish = new Dinner(appetizer,entree,dessert)
        this.menu.push(newDish)
    } 
}

let chefVikas = new Chef
chefVikas.cook('samosa','biryani','kheer')
chefVikas.cook('cheesesticks','pizza','tiramisu')
chefVikas.cook('chicken65','pulav','gulabjamun')
console.log(chefVikas)