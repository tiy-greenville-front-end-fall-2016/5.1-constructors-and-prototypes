/**
 * Strings are not mutable (immutable)
 * Strings are passed "by value"
 */
var kepler = 'He loves ';
var item = 'treats';
var keplerSays = kepler + item;

console.log(keplerSays);
console.log(item);

function keplerSpeaks(prefix, suffix){
  suffix = 'bones';
  var thingToSay = prefix + suffix;
  console.log(thingToSay);
}

keplerSpeaks(kepler, item);
console.log(item);

/**
 * Numbers are not mutable
 * Assignment is "by value"
 */
var number1 = 10;
var number2 = 20;

function add(num1, num2){
  num1 += num2;
  console.log(num1);
}

add(number1, number2);

console.log(number1);


/**
 * Objects are mutable
 * Passed by sharing
 */

var kepler = {
  likes: 'treats'
};

console.log(kepler);


function likeSomethingNew(dog){
  // dog.likes = 'balls';
  dog.isHungry = true;
  delete dog.likes;
  console.log(dog);
}

likeSomethingNew(kepler);
console.log(kepler);


/**
 * Arrays are mutable
 * Passed by sharing
 */

function sum(numbers){
  numbers.push(numbers.reduce(function(prev, num){
    return prev + num;
  }, 0));
}

var numbersToAdd = [1, 2, 3];
sum(numbersToAdd);
console.log(numbersToAdd);


/**
 * Objects have properties and methods
 *
 * Methods are functions that have the `this` bonus param assigned to
 * the object that the method was called on.
 */

function sayHello(){
  console.log("Regular ol' function call", this);
}

sayHello();


var zuri = {
  name: 'Zuri',
  sayHello: function(){
      console.log('method function call. This:', this);
  }
};

zuri.sayHello();


/**
  * Constructors are function calls with the `new` keyword
  */

// var dog = {
//   height: 'short'
// };
//
// var kepler = dog;
// var oliver = dog;
// oliver.height = 'tall';
// console.log(kepler);
// console.log(oliver);

function Dog(height){
  console.log('Constructor. This:', this);
  this.height = height;

  this.wag = function(thing){
    console.log('Wag ' + thing);
  };
}

var kepler = new Dog('short');
var oliver = new Dog('tall');
kepler.wag('tail');
oliver.wag('whole body');

oliver.height = 'medium';
console.log(kepler);


/**
 * Inheritance
 */

function Truck(){
  this.doors = 2;
  this.bed = true;
}

Truck.prototype.go = function(){
  console.log('vroom');
};

var genericTruck = new Truck();

console.log('genericTruck: ', genericTruck);
console.log('genericTruck.ram: ', genericTruck.ram);

function Dodge(){
  this.ram = true;
  // this.doors = 4;
}

Dodge.prototype = new Truck();

var dodgeTuck = new Dodge();
console.log(dodgeTuck);

console.log(dodgeTuck.ram);
console.log(dodgeTuck.doors);
dodgeTuck.go();

function Dakota(config){
  this.capacity = config.capacity;
  this.color = config.color || 'black';
  this.ram = true;
  // this.doors = 4;
}

Dakota.prototype = new Dodge();

var dakota = new Dakota({capacity: '1/2 ton', color: 'white'});

console.log(dakota.capacity);
console.log(dakota.color);
