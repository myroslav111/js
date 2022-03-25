'use strict'

// const objC = {
//     x: 1,
// };

// const objB = Object.create(objC)
// objB.y = 2

// const objA = Object.create(objB)
// objA.z = 3

// console.log(objC);
// console.log(objB);
// console.log(objA);


// const Airplane = function ({length, weight, color, price} = {}){
// this._length = length;
// this._weight = weight;
// this._color = color;
// this._price = price;
// }
// Airplane.prototype.changeLength = function(newLength){
//     this._length = newLength
// }
// Airplane.prototype.logValue = function(){
//     console.log(this);
// }

// const boing = new Airplane({
//     length: '100m',
//     weight: '1000',
//     color: 'white', 
//     price: 100000


// })
// boing.seats = 100
// console.log(boing);
// boing.logValue() 
// boing.changeLength('200m')
// console.log(boing);
// console.log(boing);

// const stels = new Airplane ({
//     length: '20m',
//     weight: 500,
//     color: 'black',
//     price: 20000000,
// })
// console.log(stels);
// stels.weightStels = function(bomb){
//     this._weight = bomb + this._weight
//     // console.log(this._weight);
//     return this._weight 
// }
// stels.weightStels(300)

// console.log(stels);
// // const Car = function ({brand, model, price} = {}) {
// // console.log(config);
// // const  = config;
// this.brand = brand;
// this.model = model;
// this.price = price;

// // this.changePrice = function(newPrice){
// //     this.price = newPrice
// // }
// }
// Car.prototype.changePrice = function(newPrice){
//         this.price = newPrice
//     }
// Car.prototype.sayHi = function(){
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('hello ;)');
// }
// const myCar = new Car({ 
//     brand: 'audi',
//     model: 'q3',
//     price: 35000,
// });

// const myCar2 = new Car({
//     brand: 'bmw',
//     model: 'x5',
//     price: 50000,
// })

// const myCar3 = new Car({
//     brand: 'lada',
//     model: '2110',
//     price: 1000,
// })
// myCar2.changePrice(200000)
// myCar.sayHi()
// console.log(myCar);
// console.log(myCar2);
// console.log(myCar3);
// console.log(myCar2.price);

// const User = function ({email, password} = {}) {

//     this.email = email;
//     this.password = password;
// }
// User.prototype.changeEmail = function(newEmail){
//     this.email = newEmail
// }
// const userMyroslav = new User({email: 'myrkozar@gmail.com', password: 'Vladuslava@1'})
// console.log(userMyroslav);

// const CounterPlugin = function({rootSelektor, initialValue = 0, step = 1} = {}){


// this._value = initialValue;
// this._step = step;

// this._getRefs = this._getRefs(rootSelektor);
// }
// CounterPlugin.prototype._getRefs = function(rootSelektor) {

// const refs = {};
// refs.container = document.querySelector(rootSelektor);

// return refs
// }
// CounterPlugin.prototype.increment = function() {
//     this._value += this._step
// }
// CounterPlugin.prototype.decriment = function(){
//     this._value -= this._step
// }
// const counter1 = new CounterPlugin({rootSelektor: '#counter-1', step: 10})
// const counter2 = new CounterPlugin({rootSelektor: '#counter-2', step: 10})
// console.log(counter1);
// console.log(counter2);

