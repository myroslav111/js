"use strict";


// const userName = "myroslav";
// const age = 35;
// console.log(age);
// console.log(userName);
// let secondName = "leon";
// console.log(secondName);
// secondName = "ciller";
// console.log(secondName);
// let thirdName;
// console.log(thirdName);
// console.log(typeof userName);
// console.log(typeof age);
// const hello = false;
// let world = null;
// console.log(typeof hello);
// console.log(typeof world);
// console.log('username is', userName);

// const isComing = confirm('please enter');
// console.log(isComing);
// const hotelName = prompt('please enter');
// console.log(hotelName);

// const value = prompt('enter nuber');
// console.log(typeof value);
// console.log(value);


// const x = 2;
// const y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(y / x);
// console.log(y % x);


// const aNumber = '5px';
// console.log(Number(aNumber));
// console.log(Number.parseInt(aNumber));
// let frog = '13.22vrl';
// console.log(Number.parseFloat(frog));
// frog = Number('51');
// console.log(Number.isNaN(frog));
// frog = Number('jnlkml');
// console.log(Number.isNaN(frog));
// console.log(0.1 + 0.2);


// console.log(0.32 + 0.54);
// console.log((0.75 + 0.15).toFixed(4));
// console.log(Math.floor(1.7));
// console.log(Math.ceil(4.4));
// console.log(Math.max(20, 30, 40, 50, 120, 40,));
// console.log(Math.min(10, 35, 5, 44));
// console.log(Math.pow(3, 3));
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random() * (10 - 1) + 1);


// let ses = 'happy new yars';
// console.log(ses.length);

// console.log(ses.toLocaleLowerCase());
// console.log(ses.toLocaleUpperCase());
// console.log(ses.indexOf('new'));
// console.log(ses.indexOf('r'));
// console.log(ses.indexOf('y'));
// console.log(ses.endsWith('rs'));
// console.log(ses.endsWith('ew'));


// const ageMine = 36;
// console.log(ageMine);
// console.log(ageMine > 33 && ageMine < 40);
// console.log(ageMine > 32 && ageMine > 40);



// const q = 'g';
// let w = 0;
// if (q === 'g'){
//     w = 4;
// }
// console.log(w);

// const q = 'x';
// let w;
// if (q === 'x'){
//     w = 4;
// }
//     else{
//         w = 2;
//     }
// console.log(w);    


// const q = 'x';
// let w;
// if (q === 'w'){
//     w = 0;
// }
//     else if (q === 'e') {
//         w = 1;
//     }
//     else if (q === 'r'){
//         w = 2;
//     }
//     else if (q === 'x'){
//         w = '100';
//     }
//     else{
//         console.log('fuck');
//     }
// console.log(w);

// const q = 35;
// let userName;
// if (q >= 36){
//     userName = 'muroslav';
// }
// else {
//     userName = 'notMe';
// }
// console.log(userName);

// const userName = q >= 36 ? 'muroslav' : 'notMe';
// console.log(userName);


// const x = 1;
// const y = 2;
// let bigger;
// if (x > y){
//     bigger = x;
// }
// else {
//     bigger = y;
// }
// console.log(bigger);

// const q = 45;
// const w = 409;
// if (q > w){
//     bigger = q; 
// }
// else {
//     bigger = w;
// }
// console.log(bigger);
// const a = 24;
// const s = '45';
// if ( a > s){
//     bigger = a;
// }
// else{
//     bigger = s;
// }
// console.log(bigger);

// const bigger = x > y ? x : y;
// console.log(bigger);
// const bigger = q > w ? q : w;
// console.log(bigger);
// const bigger = a > s ? a : s;
// console.log(bigger);


// let q;
// const w = 'yes';
// switch (w){
//     case 'j':
//         q = 2;
//         break;
//     case 'f':
//         q = 3;
//         break;
//     case 'yes':
//         q = 'no';
//         break;
//     default:
//         console.log('fuck');            
// }
// console.log(q);



// const employees = 10;
// const maxSalary = 5000;
// const minSalary = 500;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i += 1 ){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`зп раб n ${i} - ${salary}`);

//     totalSalary += salary;
// }
// console.log('total: ', totalSalary);



// const stars = 2;
// let price ;

// if(stars === 1){
//     price = 20;
// } else if(stars === 2) {
//     price = 50;
// } else if(stars === 3) {
//     price = 60;
// } else {
//     console.log('fuck');
// }
// switch(stars){
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 50;
//         break;
//     case 3:
//         price = 60;
//         break;  
    
//         default:
//             console.log('fuck');
// }

// console.log(price);



// const option = 4;
// // let message = '';

// switch(option){
//     case 1:
//         message = 'q';
//         break;
//     case 2:
//         message = 'w';
//         break;
//     case 3:
//         message = 'e';
//         break;
//     default:
//         message = 'fuck';                
        
// }
// console.log(message);   


// let counter = 0;
//  while (counter < 10){
//      console.log('counter: ', counter);
//      counter += 1;
// //  }
// function largestOfFour(arr) {
//   let s = arr.map((element) => Math.max(...element));
  
//   console.log();
   
  
//   return s;
// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// function confirmEnding(str, target) {
//   return str  = str.endsWith(target);
// }
// console.log(confirmEnding("Bastian", "n"));

// function confirmEnding(str, target) {

//   if(str[str.length -1] === target){
//   return true ;
// }
// return false;
// }
// function confirmEnding(str, target) {

//   // return str.slice(-target.length) === target ;
//   console.log(str.slice(24));
//   return str.slice(str.length - target.length) === target;
// }
// console.log(confirmEnding("He has to give me a new name", "name"));
// console.log('qwebp'['qwebp'.length -1]);

// function repeatStringNumTimes(str, num) {
//   let c = '';
//   //  console.log();
//   // if(num)
//   for(let i = 1; i <= num; i += 1){
//    // console.log(i);
//     c += str
//     // console.log(c);
//   }
//   return c;
// }

// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return "";
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }
// console.log(repeatStringNumTimes("abc", 3));



// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa", "a"],
//       gender: "female",
//       age: 39,
//       location: {
//           country: 'uk',
//           sity: 'pl',
//           stret: 'kurchatova',
//       },
//     },
//   ];
// //   console.log(users);

// const sommMap = users.map(element => element)
// console.log(somm);
// const


// const letterUpper = ':=}'
// const somSkills = "a";
//   for (const object of users){
//     //   console.log(object);  
//       if(object.skills.includes(somSkills) ){
//     //   console.log(object.location);    
//       const {name, email, eyeColor, isActive, balance, gender, age, friends, skills, location} = object
//     //   skills.forEach((name, index) => `ind: ${index}, val: ${name}`) 
//     const addLetterUp = (array, letter) => {
//         // console.log(array);
//         const newArr = [];
//         array.forEach((element => newArr.push(element + letter) ))
//         console.log(newArr);
//     }
//     console.log(addLetterUp(skills, letterUpper));
//     //   console.log(location);
    //   const keysSomeObject = Object.keys(object.location)
    //   const veluesSomeValues = Object.values(object.location)
    //   const arrNouts = Object.entries(object)
    //   const newArray = [...object.friends, ...object.skills];
    //   console.log(newArray);
    //   console.log(keysSomeObject);
    //   console.log(veluesSomeValues);
    //   console.log(arrNouts);
    //   }
//   }
// const keyOfUsers = Object.keys(users);
// console.log(keyOfUsers);

// for(const object of users){
//     if(object.age > 35 ){
//         console.log(object);
//         console.log(Object.keys(object));
//     }
// }

// function reverseString(str) {
//  str = str.split('').reverse().join('')
//   console.log(str);
//   return str;
// }

// reverseString("hello");
// function factorialize(num) {
 
//   if(num === 0){ 
//     return 1
//   }
//   return num * factorialize(num - 1)

// // let fac = 1;
// //   for (let i = 2; i <= num; i += 1){
// //     fac *= i;
// //     console.log(fac);
// //   }
// //   return fac;
// }
// console.log(factorialize(5));

// function findLongestWordLength(str) {
//   let a = Math.max(...str.split(' ').map(word => word.length))

//   // let q = str.split(' ').reduce((e, r) => Math.max(e, r.length), 0);
//   // console.log();

// //   let w = 0;
// // for (const element of q){
// //     if(element.length > w){
// //       w = element.length
// //       // console.log(w);
// //     }
// //   }   
//   return a
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// class User {


//     constructor({name, email}){
//       this.name = name;
//       this.email = email;
//     }
//     getEmail(){
//       return this.email;
//     }
//     changeEmail(newEmail){
//       return this.email = newEmail;
//     }
    
// }

// console.log(User);
// const myroslav = new User({name: 'cocos', email: 'www.gmail.com'});
// console.log(myroslav);
// const vlada = new User({name: 'apple', email: 'qqq.mail.com'})
// console.log(vlada);

// console.log(vlada.changeEmail('vvv.gmail.com'));
// console.log(vlada.getEmail());

// const truncateString =(str, num) => num >= str.length ? str : str.slice(0, num) + '...';

// // if(num >= str.length){
// //     return str;
// // }
// // console.log();
// //     return 


  
//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

// var arr = [1, 2, 3];
// printEntries(arr);

// arr.length = 5; // устанавливает длину массива 5.
// printEntries(arr);

// function printEntries(arr) {
//   var goNext = true;
//   var entries = arr.entries();
//   while (goNext) {
//     var result = entries.next();
//     if (result.done !== true) {
//       console.log(result.value[1]);
//       goNext = true;
//     } else
//       goNext = false;
//   }
//   console.log('=== printed ===');
// }


// const users = 
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     }

// console.log(users);

// console.log();

// var board = [
//     ['R','N','B','Q','K','B','N','R'],
//     ['P','P','P','P','P','P','P','P'],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     ['p','p','p','p','p','p','p','p'],
//     ['r','n','b','q','k','b','n','r'] ];
  
//   console.log(board.join('\n') + '\n\n');
  
//   // Двигаем королевскую пешку вперёд на две клетки
//   board[4][4] = board[6][4];
//   console.log(board[0][3]);
//   board[6][4] = ' ';
//   console.log(board.join('\n'));

// const map = (arr, fn) => {
   
//     return arr.reduce((mappedArr, element) => {
//      console.log();
//       return [...mappedArr, fn(element)]

//     }, [])
//    }
   
//    console.log(map([1, 2, 3, 4], n => n + 1)) // [2, 3, 4, 5]


  
// const q = ['R','N','B','Q','K','B','N','R'];
// console.log(q);
// const w = q.map(element => element);
// console.log(w);
// console.log(q === w);

// function findElement(arr, func) {

// // return num
//   }
  
//   findElement([1, 2, 3, 4], num => num % 2 === 0);

//   const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// function mapForEach(arr, fn) {
//   const newArray = [];
//   for(let i = 0; i < arr.length; i++) {
//      // console.log(arr[i]);
//     newArray.push(
//       fn(arr[i])
//     );
//     // console.log(fn(arr[i]));
//     // console.log(newArray);
//   }
//   return newArray;
// }

// console.log(newArray);
// const lenArray = mapForEach(strArray, function(item) {
//     console.log(strArray);
  
//   return item.length;
// }); 
// //  console.log(function(item));
// // // выводит [ 10, 6, 3, 4, 1 ]
// console.log(lenArray);

// function titleCase(str) {
//  return str.toLowerCase().split(' ').map(element => (element[0].toUpperCase()) + (element.slice(1))).join(' ');
//     // let w = str.split(' ').slice(1)
//   let w = q
// //   console.log(w);
// // 

//   }

//   console.log(titleCase("I'm a little tea pot"));
//   console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//   console.log(titleCase("sHoRt AnD sToUt"));

// function frankenSplice(arr1, arr2, n) {
//     // console.log(arr2[n]);
//     const a = [...arr2]
//      a.splice(n, 0, ...arr1);
    
// console.log();
//     return a;
//   }
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//   console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  
// function bouncer(arr) {
//  const q = arr.filter(element => element);

//     return q;
//   }
//   console.log(bouncer([7, "ate", "", false, 9]));
  
// function getIndexToIns(arr, num) {
//     arr.push(num);
//     arr.sort((q, w) => q - w);

//     console.log();
//     return arr.indexOf(num);
//   }
//   console.log(getIndexToIns([5, 3, 20, 3], 5));
//   console.log();


// function mutation(arr) {
//  const q = [...arr[arr.length -1]]
//  const w = arr.slice(0, 1)
//  console.log(w.join(''));
//  let first = arr[1].toLowerCase();
//  let second = arr[0].toLowerCase();
//  console.log(second);
//  console.log();
//  for(let i = 0; i < first.length; i++){
//   console.log(first[i]);
//   if(second.indexOf(first[i]) < 0) 
// //   console.log(second.indexOf(first[i]) < 0);
//   return false
//  }
//  return true

//  for(let letter of q){
    //  console.log(letter);
    //  w.join('').includes(letter)
    // if(w.join().includes(letter)){
        // console.log(letter);
        // return true
    // }
    // return true
        //  console.log(true);
//  }
//   return q.every(element => w.includes(element))
    //  console.log(element);
    // return true
    // console.log(false);
    // console.log(q);
    // return false
//   }
//   console.log(mutation(["hello", "hey"]));
//   console.log(mutation(["floor", "for"]));
  


// function chunkArrayInGroups(arr, size) {
//   let newArr = [];
//   let i = 0;
//   while(i < arr.length){
//       console.log(i);
//       console.log(newArr.push(arr.slice(i, i + size)));
      

//       console.log(i += size);
      
//   }
//   return newArr
//   }
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
  