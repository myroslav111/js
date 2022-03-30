"use strict";

// function checkScope() {
//   let i = 'function scope';
//     if (true) {
//     let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }
//   console.log(function checkScope());

// const s = [5, 7, 2];
// function editInPlace() {
//   // Using s = [2, 5, 7] would be invalid
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7
// }
// editInPlace();


// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//    Object.freeze(MATH_CONSTANTS);
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj()
//  console.log(PI); 

// const sum = (...rest) => rest.reduce((a, b) => a + b, 0);
//   console.log(sum(1, 2, 3));

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//     console.log();
//   // Only change code below this line
//   const [a, b, ...arr] = list; // Change this line
//   // Only change code above this line
// //   console.log(arr);
//   return arr;
// }
// // const arr = removeFirstTwo(source);
// console.log(removeFirstTwo(source));

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // Only change code below this line
//   const half = ({max, min}) => (max + min) / 2.0; 
//   console.log();
//   // Only change code above this line
//   console.log(half(stats));

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//     const failureItems = [];
//     for(const item of result.failure){
//         // console.log(item);
//         failureItems.push(`<li class="text-warning">${item}</li>`)
//     }
//     // Only change code above this line
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);
//   console.log(failuresList);

// Only change code below this line
// class Vegetable{
//     constructor(name){
//      this.name = name
//     }
//   }
//   // Only change code above this line
  
//   const carrot = new Vegetable('carrot');
//   console.log(carrot.name); // Should display 'carrot'
// class Thermostat{
//     constructor(fahrenheit){
//         this.fahrenheit = fahrenheit
//     }
//     get temperature(){
//         return (5 / 9) * (this.fahrenheit - 32)
//     }
//     set temperature(celsius){
//         this.fahrenheit = (celsius * 9.0) / 5 + 32
//     }
// }
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale

// // let temp = thermos.temperature; // 24.44 in Celsius
// // thermos.temperature = 26;
// // temp = thermos.temperature; // 26 in Celsius
// console.log(thermos.temperature(26));
// let alphabet = "abe";
// let len = alphabet.length;
// console.log(len);
// for (let i = 0; i < len; i++) {

//   console.log(i);
// }

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
    
//     for (let i = 0; i < m; i++) {
//       // Adds the m-th row into newArray
//   let row = [];
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push(0);
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);

//   function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//       // Adds the m-th row into newArray

  
//   console.log(row);
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         // console.log(row);
//         row.push(0);
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);

// Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
  // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if (value === '') {
//         console.log(value);
//         delete records[id][prop];
//       } else if (prop === 'tracks') {
//         records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
//         records[id][prop].push(value);
//       } else {
//         records[id][prop] = value;
//       }
//     return records;
//   }
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//   console.log(recordCollection);

// const myArray = [];
// let i = 5
// while(i >= 0){
//     console.log(i);
//     myArray.push(i)
//     i -= 1
//     console.log(myArray);
// }
// console.log(myArray);

// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for(const i of myArr){
//     // console.log(i);
//   total += i
 
// }
//   console.log(total);

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//   for(let i = 0; i < arr.length; i += 1){
//     //   console.log(arr[i]);
//       for(let j = 0; j < arr[i].length; j += 1){
//           console.log(arr[i][j]);
//           product *= arr[i][j]
//       }
//   }
//     // Only change code above this line
//     return console.log(product); 
//   }
  
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//  console.log(product);


// const myArray = [];
// let i = 10;

// // Only change code below this line
// do{
//     myArray.push(i)
//     i += 1
// }while (i < 5)

// console.log(i);

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return console.log(product);
//   }
//   multiply([1, 2, 3], 2)

// function pow(x, n) {
//     let result = 1;
  
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         // console.log(i);
//         // console.log(result);
//     console.log(result *= x);  
//     }
  
//     return result;
//   }

// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  

  
//   console.log(pow(2, 3));  // 8

// function sum(arr, n) {
//     // Only change code below this line
//   if(n <= 0){
//       return 0
//   }
//   else{
//       console.log(arr[n - 1]);
//       return sum(arr, n - 1) + arr[n - 1]
      
//   }
//     // Only change code above this line
//   }
// // console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));



// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
    // for (let x = 0; x < contacts.length; x++) {
    //     if (contacts[x].firstName === name) {
    //       if (contacts[x].hasOwnProperty(prop)) {
    //         return contacts[x][prop];
    //       } else {
    //         return "No such property";
    //       }
    //     }
    //   }
    //   return "No such contact";
    // }


//     for(const user of contacts){
//         // console.log(user.firstName);
//       if(user.firstName === name){
//         //   console.log('true');
//         if(user.hasOwnProperty(prop)){
//             // console.log('true');
//             return user[prop]
        
//       }else{
//           return 'No such property.'
//       }
     
//     }
   
//   }
//     return 'No such contact'
// }
// //   console.log(lookUpProfile("Akira", "likes"));
// // console.log(lookUpProfile("Bob", "number"));
//   console.log(lookUpProfile("Kristian", "lastName"));


// function randomFraction() {
//   let a = Math.random() * (10 - 1) + 1

//     return Math.round(a);

//   }
//   console.log(randomFraction());


// function convertToInteger(str) {
//     return parseInt(str)
//     }
//     console.log(convertToInteger("56"));

// function convertToInteger(str) {
//     return parseInt(str, 2)
//     }
//     console.log(convertToInteger("10011"));
    
// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.unshift(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));

// function rangeOfNumbers(startNum, endNum) {
//     if(startNum - endNum === 0){
//       return [startNum]
//     }else{
//         const q = rangeOfNumbers(startNum, endNum - 1)
//         q.push(endNum)
//         return q
//     }
//     };

//     console.log(rangeOfNumbers(6, 9));
    // console.log(rangeOfNumbers(4, 4));

    // function copyMachine(arr, num) {
    //     let newArr = [];
    //     while (num >= 1) {
    //       // Only change code below this line
    //   newArr.push([...arr]) 
    //       // Only change code above this line
    //       num--;
    //     }
    //     return newArr;
    //   }
      
    // //   console.log(copyMachine([true, false, true], 2));

    // function quickCheck(arr, elem) {
    //     // Only change code below this line'
    //   return  arr.indexOf(elem) >= 0 ? 'true' : 'false'
    //     // Only change code above this line
    //   }
      
    // //   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
    //   console.log(quickCheck([true, false, false], undefined));

    // function filteredArray(arr, elem) {
    //     let newArr = [];
    //     // Only change code below this line
    //   for(let elementOfArr of arr){
    //     //   console.log(elementOfArr);
    //       elementOfArr.indexOf(elem) >= 0 ? [] : newArr.push([...elementOfArr])
    //   }
    //     // Only change code above this line
    //     return newArr;
    //   }
      
    // //   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
    //   console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

    // let foods = {
    //     apples: 25,
    //     oranges: 32,
    //     plums: 28,
    //     bananas: 13,
    //     grapes: 35,
    //     strawberries: 27
    //   };
    // //   console.log(foods.apples);
    //   function checkInventory(scannedItem) {
    //         // foods.hasOwnProperty(scannedItem) ? foods[scannedItem] : undefined
    //         return foods[scannedItem]
    //   }
      
    //   console.log(checkInventory("apples"));


    
    // let users = {
    //     Alan: {
    //       age: 27,
    //       online: false
    //     },
    //     Jeff: {
    //       age: 32,
    //       online: true
    //     },
    //     Sarah: {
    //       age: 48,
    //       online: true
    //     },
    //     Ryan: {
    //       age: 19,
    //       online: true
    //     }
    //   };
      
    //   function isEveryoneHere(userObj) {
    //       let count = 0
    //    for(let user in userObj){
    //        console.log();
    //        if(userObj[user].online === true){
    //             count += 1
    //        }  
    //    }
    //   return count
    //   }
      
    //   console.log(isEveryoneHere(users));


    // let user = {
    //     name: 'Kenneth',
    //     age: 28,
    //     data: {
    //       username: 'kennethCodesAllDay',
    //       joinDate: 'March 26, 2016',
    //       organization: 'freeCodeCamp',
    //       friends: [
    //         'Sam',
    //         'Kira',
    //         'Tomo'
    //       ],
    //       location: {
    //         city: 'San Francisco',
    //         state: 'CA',
    //         country: 'USA'
    //       }
    //     }
    //   };
      
    //   function addFriend(userObj, friend) {
    //     // Only change code below this line
    //     userObj.data.friends.push(friend)
    //   return userObj.data.friends
    //     // Only change code above this line
    //   }
      
    //   console.log(addFriend(user, 'Pete'));


    // function fearNotLetter(str) {
    //   let currCharCode = str.charCodeAt(0);
    //   let missing = undefined;
    
    //   str
    //     .split("")
    //     .forEach(letter => {
    //       if (letter.charCodeAt(0) === currCharCode) {
    //         currCharCode++;
    //       } else {
    //         missing = String.fromCharCode(currCharCode);
    //       }
    //     });
    
    //   return missing;
    // }
    
    // test here
    // console.log(fearNotLetter("abce"));
    // console.log("abce".charCodeAt(3));
    
    // const a = "abce".split('').forEach(letter => letter.charCodeAt(0));
    // console.log(a);

          
    // function fearNotLetter(str) {
    // let someLeter = undefined
    // let missingLetter = str.charCodeAt(0)

    // str.split('').forEach(leter => {
    //   if(leter.charCodeAt(0) === missingLetter){
    //     missingLetter += 1
    //   }else{
    //     someLeter = String.fromCharCode(missingLetter)
    //   }
        
      
    // })
    
    //   return someLeter;
    // }
    
    // // test here
    // console.log(fearNotLetter("abce"));
    // console.log(String.fromCharCode(97));

    // function fearNotLetter(str) {
    //     for(let i = 1; i < str.length; i += 1){
        
    //    if(str.charCodeAt(i) - str.charCodeAt(i - 1) > 1){
    //         return String.fromCharCode(str.charCodeAt(i - 1) + 1)
    //    }
    //     }
    // }

    // console.log(fearNotLetter("abce"));

    //  console.log('abce'.charCodeAt(2));

    // function uniteUnique(...arr) {
    //   const test = arr.flatMap(num => num).filter((num, index, array) => array.indexOf(num) === index)
    //   console.log(test);


    //   return test;
    // }
    
    // uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  

  //   function convertHTML(str) {
  // const htmlEntities = {
  //     "&": "&amp;",
  //     "<": "&lt;",
  //     ">": "&gt;",
  //     '"': "&quot;",
  //     "'": "&apos;"
  //   };
   
  //     // const objKeys = Object.keys(htmlEntities)
  //     // let needLetter = objKeys.filter(el => str.indexOf(el) >= 0).join('')
  //     // console.log(needLetter);
    
  //     // console.log(htmlEntities[needLetter]);
  //     // return str.replace(needLetter, htmlEntities[needLetter]);

  //     // const objKeys = Object.keys(htmlEntities)
  //     // let needLetter = objKeys.filter(el => str.indexOf(el) >= 0)
  //     // console.log(needLetter);
    
  //     // console.log(htmlEntities[needLetter]);
  //     // return str.replace(needLetter, htmlEntities[needLetter]);
  //      console.log(str.split('').map(el => htmlEntities[el] || el));
  //     return str.split('').map(el => htmlEntities[el] || el).join('')
  //   }
    
  //   // console.log(convertHTML("Dolce & Gabbana"));
  //   console.log(convertHTML("Schindler's List"));
  //   console.log(convertHTML("<>"));
    

  // function sumFibs(num) {
  // if( num <= 0) return 0;

  // const arrFib = [1, 1]
  // let nextFib = 0;

  // while((nextFib = arrFib[0] + arrFib[1]) <= num){
  //   console.log(nextFib);
    
  //   console.log(arrFib.unshift(nextFib));
  //   console.log(arrFib);
  // }
  // num = arrFib.filter(el => el % 2 !== 0 )
  
  //   return num;
  // }
  // console.log(sumFibs(4));




  
  

    