'use stict'

// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog
// Dog.prototype.bark = function(){
//   console.log('Woof')
// }

// let beagle = new Dog();
// beagle.eat()
// beagle.bark()

// let bird = {
//     name: "Donald",
//     numLegs: 2
//   };
  
//   let boat = {
//     name: "Warrior",
//     type: "race-boat"
//   };
  
//   // Only change code below this line
//   let glideMixin = function (obj){
//   obj.glide = function(){
//     console.log('glidig!')
//   }
//   }
//   glideMixin(boat)
//   console.log(glideMixin(bird));

// let bird = {
//     name: "Donald",
//     numLegs: 2
//   };
  
//   let boat = {
//     name: "Warrior",
//     type: "race-boat"
//   };
  
//   // Add your code below this line
//   let glideMixin = function(obj) {
//     obj.glide = function() {
//       console.log("Gliding!");
//     };
//   };
//   glideMixin(bird);
// //   glideMixin(boat);
//   console.log(bird);
  
// function Bird() {
//   let weight = 15;

// this.getWeit  = function(){
//   return weight
// }
// }
// console.log();

// (function () {
//    console.log("A cozy nest is ready");
  
// })();


// const Dog = function ({name ,legs, eae, color, size} = {}){

// this.name = name
// this.legs = legs;
// this.eae = eae;
// this.color = color;
// this.size = size;

// }
// Dog.prototype.changeLegs = function(newLegs){
//   this.legs = newLegs
// }
// Dog.prototype.changeEae = function(newColorEae){
//   this.eae = newColorEae
// }
// Dog.prototype.changeColor = function(newColor) {
//   this.color = newColor
// }
// Dog.prototype.changeSize = function(newSize) {
//   this.size = newSize
// }
// Dog.prototype.decription = function(dog){
//   console.log(`My name ${this.name} i have ${this.legs} lags and ${this.eae} eaes. I ${this.color} and i ${this.size}` );
// }
// const djeckRasel = new Dog({
//   name: 'lucky',
//   legs: 4,
//   eae: 'blue',
//   color: 'black',
//   size: 'litle',
// })
// const dog = new Dog({
//   name: 'boy',
//   legs: 2,
//   eae: 'black',
//   color: 'white',
//   size: 'smal',
// })

// djeckRasel.changeLegs(5)
// djeckRasel.changeEae('green')
// djeckRasel.changeColor('braun')
// djeckRasel.changeSize('big')
// console.log(djeckRasel);
// console.log(dog);
// dog.decription(dog)

// class Airplane  {
//     static description = "it's a plane";
//     static logInfo (){
//         console.log('');
//     }

//     constructor ({length, weight, color, price} = {}) {
//         this._length = length;
//         this._weight = weight;
//         this._color = color;
//         this._price = price;
//     }
//     set length(newLength){
//         this._length = newLength
//     }
//     set weight (newWeight){
//         this._weight = newWeight
//     }
//     set color(newColor){
//         this._color = newColor
//     }
//     set price (newPrice){
//         this._price = newPrice
//     }
//     get length(){
//         return this._length
//     }
//     get weight(){
//         return this._weight
//     }
//     get price(){
//         return this._price
//     }

// }
// const boing = new Airplane({
//     length: '100m',
//     weight: 1000,
//     color: 'white', 
//     price: 100000,
// })
// // console.log(boing);
// const stels = new Airplane({
//     length: '20m',
//     weight: 500,
//     color: 'black',
//     price: 20000000,
// })
// boing.length = '150m'
// console.log(boing);

// console.log(stels.price);

// class PasangerAirPlane extends Airplane{
//     constructor({seats, spead, ...rest} = {}){
//         super(rest);
//         this._seats = seats;
//         this._spead = spead;
//     }
// }
// const cucuruznic = new PasangerAirPlane({
//     length: '22m',
//     weight: 50,
//     color: 'green',
//     price: 200,
//     seats: 30,
//     spead: '700km/h'
// })
// console.log(cucuruznic);
// class Car1 {
//     static description = 'it is a car';
//     static logInfo(carObj){
//         console.log('car.logInfo -> carObj', carObj);
//     }

//   constructor ({brand, model, price} = {}){

//   this._brand = brand;
//   this._model = model;
//   this._price = price;
//   }
//   set brand(newBrand){
//  this._brand = newBrand
//   }
//   set model(newModel){
//     this._model = newModel
//   }
//   set price(newPrice){
//     this._price = newPrice
//   }
//   get brand() {
//     return this._brand
//   }
//   get model() {
//     return this._model
//   }
//   get price() {
//     return this._price
//   }
// }
// console.dir(Car1);
// const carInstance = new Car1 ({
//     price: 100000,
//     model: 'a5',
    
// brand: 'audi',
// });

// carInstance.model = 'Q5'
// carInstance.price = 20000
// console.log(carInstance.price);
// console.log();
// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
