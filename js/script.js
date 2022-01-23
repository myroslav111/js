"use strict";


const userName = "myroslav";
const age = 35;
console.log(age);
console.log(userName);
let secondName = "leon";
console.log(secondName);
secondName = "ciller";
console.log(secondName);
let thirdName;
console.log(thirdName);
console.log(typeof userName);
console.log(typeof age);
const hello = false;
let world = null;
console.log(typeof hello);
console.log(typeof world);
console.log('username is', userName);

// const isComing = confirm('please enter');
// console.log(isComing);
// const hotelName = prompt('please enter');
// console.log(hotelName);

// const value = prompt('enter nuber');
// console.log(typeof value);
// console.log(value);


const x = 2;
const y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(y / x);
console.log(y % x);


const aNumber = '5px';
console.log(Number(aNumber));
console.log(Number.parseInt(aNumber));
let frog = '13.22vrl';
console.log(Number.parseFloat(frog));
frog = Number('51');
console.log(Number.isNaN(frog));
frog = Number('jnlkml');
console.log(Number.isNaN(frog));
console.log(0.1 + 0.2);


console.log(0.32 + 0.54);
console.log((0.75 + 0.15).toFixed(4));
console.log(Math.floor(1.7));
console.log(Math.ceil(4.4));
console.log(Math.max(20, 30, 40, 50, 120, 40,));
console.log(Math.min(10, 35, 5, 44));
console.log(Math.pow(3, 3));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * (10 - 1) + 1);


let ses = 'happy new yars';
console.log(ses.length);

console.log(ses.toLocaleLowerCase());
console.log(ses.toLocaleUpperCase());
console.log(ses.indexOf('new'));
console.log(ses.indexOf('r'));
console.log(ses.indexOf('y'));
console.log(ses.endsWith('rs'));
console.log(ses.endsWith('ew'));


const ageMine = 36;
console.log(ageMine);
console.log(ageMine > 33 && ageMine < 40);
console.log(ageMine > 32 && ageMine > 40);
