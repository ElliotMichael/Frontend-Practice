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

class Train{
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
    getSelf(){
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
