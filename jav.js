//console.log("Hello")
/*var person = "John";
var greeting = "Hello"
console.log(greeting, person)

person = "Peter"
greeting = "Hi"
console.log(greeting, person)

 var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

var catSound = "purr"
var dogSound = "woof"

console.log(petDog, "6says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow"
console.log(petCat, "now says", catSound);

var currentTime = 10;
console.log(currentTime>9 && currentTime <17);

*/

/* var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
};

var day = "monda"
switch (day) {
    case "monday":
        console.log("soccer");
        break;

    case "tuesday":
        console.log("gym");
        break;

    case "wednesday":
        console.log("cod");
        break;

    default:
        console.log("There is no such day");
        break;

        //only use switch when there are a lot of conditions.
}
*/

/*for (var i = 1; i<=5; i++) {
    console.log(i)

}
console.log("counting completed!")

*/

/*
for (var i = 5; i>=1; i--) {
    console.log(i);
}
console.log("Countdown finished!")
*/

/*
var counter = 5 
while (counter >=1) {
    console.log(counter);
    counter-=1
};
console.log('Counting completed!');
*/

/*
function getDistance(mph, h) {  
    return mph * h
}         //functions and the data required for the functions should be setup separately
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);

*/

/*
virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}


console.log(virtualPet.nap());
*/

/*
function addTwoNums(a, b) {
console.log(a+b)
}

function randomNum() {
    return Math.floor((Math.random()* 10) + 1);
}

function specificNum() {
    return 42
}


var useRandom = true;

var getNumber;

if (useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber()); 
*/

/*
let user
console.log(user)

user = "Tony"
console.log(user)

user = "Mark"
console.log(user)
// let can not be redeclared like var but can be reassigned.

const item = "potato"
console.log(item)
*/

//A const variable cannot be redeclared neither can it be reassigned.

/*
function meal(animal) {
    animal.food = animal.food + 10
}

var dog = {
    food: 10
}

meal(dog);
meal(dog);

console.log(dog.food);
*/

/*
function two(){
    return 2
}
function one(){
    return 1
}

function calculate(initialValue, incrementValue){
    return initialValue + incrementValue + incrementValue
}
console.log(calculate(two(), one()))
*/

/*
function myFunc(theObject) {
    theObject.make = 'Toyota'
}

const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
}

const x = mycar.make;

myFunc(mycar)

const y = mycar.make
console.log(y)
*/

/*
// functional programming paradigm
var shoes = 100
var stateTax = 1.2

function totalPrice(shoes, tax) {
    return shoes * tax
}
var toPay = totalPrice(shoes, stateTax)

console.log(t oPay) 
//functions inside objects are known as methods
*/

/*
//OOP paradigm
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax
        console.log('Total price:', calculation)
    }
}
purchase1.totalPrice() //120

let purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        let calculation = this.shoes * this.stateTax
        console.log('Total price:', calculation) 
    }
}

purchase2.totalPrice()

*/


/*
class Animal { }
var myDog = new Animal()
console.log(Animal)
console.log(typeof(myDog))



let car = {
    model: "toyota",
    year: 1990
}
console.log(typeof(car))
*/

/*
illustration of polymorphisim
const bicycle = { 
    bell: function() {
        return "Ring, ring! Watch out, please"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Anyone home?"
    }
}

console.log(bicycle.bell())
console.log(door.bell())

function ringTheBell(thing) {
    console.log(thing.bell())

}

ringTheBell(bicycle)
*/

/*
console.log("abc".concat("def")) //concatenation actiong like polymorphism
*/

/*
class Bird {
    usewings(){
        console.log("Flying")
    }
}
class Eagle extends Bird {
    usewings() {
        super.usewings()
    }
}

*/

/*
function performAction(param) {
    if (typeof param === 'string') {
        console.log(param.toUpperCase());
    } else if (typeof param === 'number') {
        console.log(param * 2);
    } else {
        console.log('Unsupported type');
    }
}

performAction('hello'); // Output: HELLO
performAction(5); // Output: 10
performAction(true); // Output: Unsupported type
*/

/*
//defining custom constructor functions.
function Icecream(flavor) {
    this.flavor = flavor
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`)
    }
}

let vanillaIceCream = new Icecream("vanilla")
let appleIceCream = new Icecream("apple") 

*/

/*
// when building objects of other built-in types, we can use the constructor.
new Date()
new Error()
new Map()
new Promise()
new Set()
new WeakSet()
new WeakMap()
*/

/*
var bird = {
    haswings: true,
    canfly: true,
    hasFeathers: true,
}


var eagle1 = Object.create(bird)
//using object.create to istantiate the eagle object gives you access to the properties in the bird objects.
console.log("eagle1 has wings:", eagle1.haswings)
console.log("eagle1 can fly: ", eagle1.canfly)
console.log("eagle1 has feathers:", eagle1.hasFeathers)


var eagle2 = Object.create(bird)
console.log("eagle2 has wings:", eagle2.haswings)

var penguin1 = Object.create(bird)
penguin1.canfly = false
console.log("penguin1 has feathers:", penguin1)

*/

/*
class Train{
    constructor(color, lightsOn){
        this.color = color
        this.lightsOn = lightsOn
    }
}
*/

//In object oriented programming, we refer to variables as properties, and functions as methods

/*
let employee = {
    baseSalary: 30_000,
    overtime: 10,   
    rate: 20,
    getWage : function(){
        return this.baseSalary + (this.overTime * this.rate)
    }
}

 
employee.getWage()

*/



//Note
//when comparing objects, you are comparing their memory locations, not the actual value
//therefore, new String('plum') === new string('plum') will always give you false.
//while "plum" ==="plum" will return true.

//an object is a key value pair, just like dictionary in python.
//using a Factory Function
/*
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    }
}

const circle = createCircle(1)



//using a Constructor Function
//function with it's first letter as uppercase is a constructor function

function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}
const another = new Circle(1)
//always use the new operator in the above case
//in javascript, functions are objects.



const Circle1 = new Function

/*
//valuetypes/primitive types
//which consist of Number, string, boolean, symbol, undefine, null

let x = 10;
let y = x;

x = 20;
//therefore, x and y are two independent variable.
*/


//Reference Types includes
//Objects, Functions, Array.

/*
let x = {value: 10}
let y = x

x.value = 20
console.log(y)

//takeaway
//Primitives are copied by their value
//Objects are copied by their reference.
*/
/*
let number = 10

function increase(number) {
    number++
}

increase(number);
console.log(number)
*/

/*
class Train {
    constructor(color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn
    }//the this keyword is the future object instance on the Train class.
    toggleLights() {
        this.lightsOn = !this.lightsOn
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn)
    }
    getSelf() {
        console.log(this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}
//let myFirstTrain = new Train('red', false) //first instance of the Train class.
//console.log(myFirstTrain)
//new Train syntax builds a new instance of the Train class

//Building more instances of the Train class
//let mySecondTrain = new Train('blue', true)
//let myThirdTrain = new Train('blue', false)

//building a brand new train using the updated train class:
let train4 = new Train('red', false)

//train4.toggleLights()
//train4.lightsStatus()
//train4.getSelf()


//An example of how polymorphism can be implemented using classes in javascript.
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn) 
        //the super keyword can be used to specify what properties gets inherited from the super-class in the sub-class.
        //in this case, we are chosing to inherit both color and lightsOn.
        this.passengers = passengers
        this.highSpeedOn = highSpeedOn
    }
    
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn
        console.log('High speed status:', this.highSpeedOn)
    }
    toggleLights() {
        super.toggleLights() //this first line is needed to inherit the entire super-class' method.
        super.lightsStatus()
        console.log('Lights are 100% operational.')
    }
}

let train5 = new Train('yellow', false)
let highSpeed1 = new HighSpeedTrain(200, false, 'green', false)

train5.toggleLights()
train5.lightsStatus()
train5.getPrototype()
highSpeed1.getPrototype()

*/

/*
class StationaryBike{
    constructor(positon, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBikePos = new stationaryBikePos(stationaryBikePos, 8)
        this.treadmill = new this.Treadmill(treadmillPos, 5)
    }
}

let boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs)
*/

//Default Parameters.

/*function noDefaultParams(number = 10) {
    console.log('Result', number *number)
}

noDefaultParams()//Result: NaN
*/

/*
class withDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.string1 = string1
        this.bool1 = bool1
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3)
            return
        }
        return "The value of bool1 is incorrect"
    }
}


let better = new withDefaultParams()
better.calculate()

*/

/*
//create an Animal class prototype
class Animal { //Also known as the base class of Animal
    constructor(color = 'yellow', energy = 100) {
        this.color = color
        this.energy = energy
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20
            console.log('Energy is decreasing, curently at:', this.energy)
        }
        else if (this.energy <= 0) {
            this.sleep()
        }
    }
    sleep() {
        this.energy += 20
        console.log('Energy is increasing, currently at:', this.energy)

    }
    getColor() {
        console.log(this.color)
    }



}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canClimbTrees = canClimbTrees
        this.canJumpHigh = canJumpHigh
    }
    makeSound(){
        console.log(this.sound)
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy){
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound(){
        console.log(this.sound)
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy){
        super(color, energy)
        this.houseCatSound = houseCatSound
    }
    makeSound(option){
        if (option){
            super.makeSound()
        }
        console.log(this.houseCatSound)

    }
}

class Tiger extends Cat {
    constructor(tigerSound = 'Roar!', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy){
        super(sound, canFly, color, energy)
        this.canTalk = canTalk
    }
    makeSound(option){
        if(option){
            super.makeSound()
        }
        if(this.canTalk){
            console.log("I'm a talking parrot!")
        }
    }
}

let polly = new Parrot(true)
let fiji = new Parrot(false)

polly.makeSound()
fiji.makeSound()

console.log(polly.color)
console.log(polly.energy)

polly.isActive() //Energy is decreasing , currently at: 80

let penguin = new Bird("shriek", false, "black and white", 200)
console.log(penguin)

*/

/*
class Cake {
    constructor(lyr) {
        this.lyr = lyr + 1
    }
}

let result = new Cake(1)
console.log(result.lyr)
*/


/*
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);
*/

/*
class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);
*/

/*
class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();


*/

/*
let clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

console.log(clothingItem[key])
*/

/*
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car)
sportsCar.speed = "fast"

console.log("the sportsCar object: ",sportsCar)

console.log('---for-in is unreliable----')
for (prop in sportsCar) { //prop is equated to one key at a time.
    console.log(prop)
}

console.log("----")

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": ", sportsCar[prop])
}


/*
let greet = "Hello"
let place = "World"
console.log(`${greet} ${place}!`)

console.log(`${4+5} stars!`)
*/

/*
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (items of dairy) {
        console.log(items)
    }
}
logDairy()


// Task 2
const animal = {
    canJump: true
}

const bird = Object.create(animal)

bird.canFly = true
bird.hasFeathers = true

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop+': '+bird[prop])
        
    }
}
birdCan()

// Task 3
function animalCan(){
    for (obj in bird)
    console.log(obj +': '+ bird[obj])
}

animalCan()
*/


/*
//Methods that exist on arrays
//the forEach Method
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
fruits.forEach(function (fruit, index) {
    console.log(`${index}. ${fruit}`)
})



const veggies = ['onion', 'garlic', 'potato']
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${fruits}`)
})

console.log("---------")
//the filter() method

const nums = [0, 10, 20, 30, 40, 50]
const filteredNums = nums.filter(function (num) {
    return num > 20;
})

console.log(filteredNums)
console.log("------")



let n = [0,10,20,30,40,50]
let dividedNumbers= n.map( function(num) {
    return num / 10
})
console.log(dividedNumbers)
console.log("-----")

//converting an object to an array
const result = []
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone)
droneKeys.forEach(function(key){
    result.push(key, drone[key])
})

console.log(result)
console.log('------')


//A simple illustration of using map
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

let bestBoxers = new Map()
bestBoxers.set(1, "The champion")
bestBoxers.set(2, "The Runner-up")
bestBoxers.set(3, "The third place")
console.log(bestBoxers.get(2))
console.log('------')

//Javascript Set()
//A set is a collection of unique values.
new Set()
const repetitiveFruits = ['apple', 'pear','apple','pear','plum','apple']
const uniqueFruits = new Set(repetitiveFruits)
console.log(uniqueFruits)


*/

//concatenating arrays using the spread operator
const fruits = ['apple','pear','plum']
const berries = ['blueberry','strawberry']
const fruitsAndBerries = [...fruits, ...berries]//concatenates fruits and berries
console.log(fruitsAndBerries)

//Adding new members to arrays without using the push() method
let veggies = ['onion', 'parsley']
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies)

//converting string to array using the spread operator
const greeting = "Hello"
const arrayOfChars = [...greeting]
console.log(arrayOfChars)
console.log("------")

//Copy either an object or an array into a separate one.
const  car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1}
car1.speed = 202

console.log(car1.speed, car2.speed)
console.log('------')

//an arrary can also be copied into a completely diffrent arrar using the spread operator
const fruits1 = ['apples', 'banana']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, 'not', fruits2)
console.log('------')

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(3)
console.log(set)
console.log('------')

let obj ={
    key: 1,
    value: 4
}

let output = {...obj}
output.value -= obj.key
console.log(output.value)
console.log('------')

function count(...basket) {
    console.log(basket.length)
}
count(10,6,3,4,8)