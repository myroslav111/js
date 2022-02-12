// const dino = document.getElementById('dino');
// const cactus = document.getElementById('cactus');

// document.addEventListener('keydown', function(event){
//     jump()
// })

// function jump(){
//     if(dino.classList != 'jump') {
//         dino.classList.add('jump')
//     }
//     setTimeout( function(){
//         dino.classList.remove('jump')
//     }, 200)
    
//     // dino.classList.add('jump')
// }
// let isAlive = setInterval (function(){
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//         alert('game over')
//     }
// }, 10)
//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const userInput = prompt("Какое официальное название JavaScript?")
// let message = "Не знаете? ECMAScript!"
// if (userInput === "ECMAScript") {
// 	message = "Верно!";
// }
// const message = userInput === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!";
// console.log(message);


//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const userInput = 70;
// const hours = Math.floor(userInput / 60) ;
// const minuts = userInput % 60;
// const modifHours = String(hours).padStart(2, 0);
// const modifMinuts = String(minuts).padStart(2, 0);
// console.log(modifHours + ':' + modifMinuts);

// console.log(`${modifHours}:${modifMinuts}`);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные чисела от min до max

// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 !== 0) {
//         continue;
        
        
//     } total += i;
    
    
// } console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введіть логін");


// console.log(loginInput);

// switch (loginInput) {
//     case "Admin":
//         const passInput = prompt('Введіть пароль');
//         switch (passInput) {
//             case "Я главный":
//                 console.log("Здраствуйте");
//                 break;
//             case null:
//                 console.log("Отменено");
//                 break;
//             default: console.log("Неверный пароль!");
                


//         }
            
        
//         break;
//     case null:
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }

// if (loginInput === "Admin") {
//     const passInput = prompt('Введіть пароль');
//     if (passInput === "Я главный") {
//         console.log("Здраствуйте");
//     } else if (passInput === null) {
//         console.log("Отменено");
        
//     } else {
//         console.log("Неверный пароль!");
//     }

// } else if (loginInput === null) {
//     console.log("Отменено")
    
// } else {
//     console.log("Я вас не знаю")
    
// }


//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.


// let total = 0;
// let userInput = prompt('введіть число');
// while(userInput) {
//     total += Number(userInput);
//     userInput = prompt('введіть число');
    
// }
// console.log(total);

// let check = false;
// do{
//     if (userInput){
//         check = true;
//         total += Number(userInput);
//         userInput = prompt('введіть число');
//     } else {
//         check = false;
//         console.log(`Общая сумма введенных чисел равна ${total}.`);
//     }
// } while(check);


//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt
// let check = false;
// let userInput = prompt("Введіть число більше 100");
// while (userInput <= 100){
//     userInput = prompt("Введіть число більше 100");
// }
// do{
//     if(userInput <= 100){
//         check = true;
//         userInput = prompt("Введіть число більше 100");
//     }else{
//         check=false;
//     }
// }while (check);
// console.log(`ви ввели ${userInput}`)

// let message  ;
// let maxLength;
// function formatMessage(message, maxLength) {
//     let result;
    // Change code below this line
//   if(message.length > maxLength){
//     result = message.slice(0, maxLength) + '...';
//   }else {
//   result = message;
//   }
    // Change code above this line
//     return result;
//   }
//   formatMessage("Curabitur ligula sapien", 23);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript это интересно";
// console.log(message.split(" "));

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   }
  
//   console.log("Лог до вызова функции multiply");
//   multiply(2, 3, 5); // Результат умножения равен 30
//   console.log("Лог после вызова функции multiply");



// function multiply() {
//     let total = 1;
  
//     for (const argument of arguments) {
//       total *= argument;
//     }
  
//     return total;
//   }
  
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  10
//   console.log(multiply(1, 2, 3, 4, 5)); //  15

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведения операции введите сумму больше нуля");
//     } else if (amount > balance) {
//       console.log("Недостаточно средств на счету");
//     } else {
//       console.log("Операция снятия средств проведена успешно");
//     }
//   }
  
//   withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
//   withdraw(500, 300); // "Недостаточно средств на счету"
//   withdraw(100, 300); // "Операция снятия средств проведена успешно"

// function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
//  message = [message.length];
//  return 
 
 
    // Change code above this line
//  }


// const message = "JavaScript is in my blood";
// console.log(message);
// let w = [message.split('')];
// console.log(w);
// let q = "JavaScript is awesome"
// let w = q.toUpperCase().slice(0, 7);
// console.log(w);


// const numbers = [3, 5, 33, 56, 2, 55];
// let maxNumber = [0];
// console.log(numbers);
// for (const number of numbers){
//    console.log(number);
//    if(number > maxNumber){
//        maxNumber = number
//    }
// }
// console.log('kljn', maxNumber);
 
// for(сonst number of numbers){
    
    // if(maxNumber < number){
    //     maxNumber = number;
    // }
// }
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
//     if(numbers[i] < maxNumber){
//       maxNumber = numbers[i];
//     }
// }
// console.log('jjln', maxNumber)


// function slugify(title) {
//     // const q = title.toLowerCase();
//     title = title.split(' ').join('-').toLowerCase();
// //    let slug = q.split('');
// //    title = slug.join('-');
// //     const letter = title.split('');
// //     const array = title.split(' ');
// //     title = array.join('-');
//     console.log(title);
//     // console.log(q);
// //     // for ()

// //     // for (const titl of title){
// //     //     title += titl + '-';
// //     }
// // //   title = title.join('-');
  

// }

 
// slugify("How to become a JUNIOR developer in TWO WEEKS");// const friends = ['q', 'w', 'e', 'r'];
// console.log(friends);
// const string = friends.join(',');
// console.log(string);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let total = firstArray.concat(secondArray).slice(0, maxLength);
//     console.log(total);
// //     let message = total.splice(0, maxLength);
// // console.log(message);
// // return message;
// // return total

//     // Change code above this line
//   }
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);




// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//    for (let i = 0; i <= 3; i += 1){
//      total += i;
     
//    }
//    return total;
   
//      // Change code above this line
//    }


// console.log(calculateTotal(3));


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);



// const fruits = ['apple', 'plum', 'pear', 'orange'];
// // console.log(fruits);

// for (let i = 0; i < fruits.length; i += 1) { 
//     // console.log(fruits[i]);// Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }


// let count = 0;
// let userInput;
// const q = ~~(Math.random() * 100) + 1;
// console.log(q);


// do{
//     count ++;
//     const userInput = Number(prompt('ввод цифри'));
//     console.log(userInput);

//     if(userInput < q){
//     alert('q >', userInput);
// }else if( userInput > q){
//     alert('q <', userInput);
// }else{
//     alert('hurray!!!');
// }
// }
// while (q !== userInput);
// alert('count', count);




// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     // Change code above this line
//     return total;
//   }
//   calculateTotalPrice([12, 85, 37, 4])

// function calculateTotalPrice(order) {
//     // console.log(order);
//     let total = 0;
//     // Change code below this line
//   for (let i = 0; i < order.length; i += 1){
//       console.log(order[i]);
//     total += order[i];
//   }
//     // Change code above this line
//     return total;
//   }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//     // Change code below this line
// string = string.split(' ');
// console.log(string);
// let longestWord = string[0];
// console.log(longestWord);
// for (const word of string){
//     if(word.length > longestWord.length){
//         longestWord = word;
//     }
// }

// return longestWord;


//   }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//      for(let i = min; i <= max; i += 1){
//         //  console.log(i);
//         //  numbers = numbers.push(i);
//         //  console.log(numbers);
//          numbers.push(i) ;
//         //  console.log(numbers.push(i));
//         console.log(numbers);


//      }

     
//     // Change code above this line
//     // return numbers;
//   }

// //   createArrayOfNumbers(1, 3);
//   createArrayOfNumbers(29, 34);



// function filterArray(numbers, value) {
//     // Change code below this line
// //  const number = [];
// let newArr = [];
//  for (const number of numbers){
//     // console.log(number);
//     if(number > value){
//         newArr.push(number);
        
//         // console.log(newArr);
        
// //        // return number;

//     } 
        
    
    
//   }
//   console.log(newArr); 
// //    // Change code above this line
//  }

// // //  filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 22);


// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
     
//     console.log(fruits.includes(fruit) ? 'tr': 'fo');   // Change this line
//   }

//   checkFruit("mandarin");
  

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let newArrays = [];
//   for (const number of array1){
//     console.log(number);
//     // let q = array2.include(number);

//     // console.log(q);
//     // if (array2.include(number)) {
        
//         // console.log(newArrays.push(number));
//     // }
//   }
  
  
//    // Change code above this line
//   }
//   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

//   const a = [24, 12, 27, 3];
//   const s = [12, 8, 3, 36, 27];
//   const f = [];
//   for (const d of a){
//       console.log(); 
//       if (s.includes(d)) {
//           f.push(d);
          
//       }

//   }
//   console.log(f);




// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const number of order) {
//       total += number;
//     }
  
//     // Change code above this line
//     console.log(total);
//     // return total;
//   }
  



// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function getEvenNumbers(start, end) {
//     // Change code below this line
//  const e = [];
//  for (let i = start; i <= end; i += 1){
//     //  console.log(i);
//      if(i % 2 === 0 ){
//          e.push(i);
         
//      }
//  }
 
//  console.log(e);
//      // Change code above this line
//    }
//    getEvenNumbers(3, 11);


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
// break;
//   }
      
    
// }console.log(number);

// function findNumber(start, end, divisor) {
//     // Change code below this line
    
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
        
//       }
//     }
  
//     //return number;
//     // Change code above this line
//   }
  
//   console.log(findNumber(2, 6, 5));

//   function includes(array, value) {
//     // Change code below this line
    
//   for( const item of array){
//       if (item === value) {
//           return true;
//       }
 
//   }
//  return false;
//     // Change code above this line
//   }
 
//   console.log(includes([1, 2, 3, 4, 5], 5));

// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); 



// const myName = 'myroslav';
// const fackt = 'man';
// const myObjeckt = {
//     [fackt]: 'yes',
//     myName,
//     age : 35,
//     myHeight : 1.80 ,
//     mySecondName : 'kozar',
//     isPublic: true,
//     hoby : [ 'guitar', 'sports', 'it'],
//     myLocation: {
//         country: 'uk',
//         sity : 'poltava',
//     },
//     info() {
//         console.log(this);
//     },

// };
// console.log(myObjeckt);
// const q = myObjeckt.myName;
// const hoby = myObjeckt.hoby;
// console.log(q);
// console.log(myObjeckt.age);
// console.log(myObjeckt.myLocation.country);
// console.log(hoby);
// console.log(hoby.length);
// console.log(myObjeckt['hoby']);
// myObjeckt.myHeight = 1.81;
// console.log(myObjeckt['myHeight']);
// myObjeckt.hoby.push('work');
// console.log(myObjeckt.hoby);
// myObjeckt.spead = 220;
// myObjeckt.lang = 'ru';
// myObjeckt.color = ['black', 'red'];
// console.log(myObjeckt);
// myObjeckt.info();

// for (const key in myObjeckt){
//     console.log(key);
//     console.log(myObjeckt[key]);
// }

// const test1 = Object.keys(myObjeckt);
// // console.log(test1);
// for(const key of test1){
//     console.log(key);
//     console.log(myObjeckt[key]);
// }
// const test2 = Object.values(myObjeckt);
// console.log(test2);
// for(const val of test2){
//     console.log(val);
//     // console.log(myObjeckt[val]);
// }

// const test3 = Object.entries(myObjeckt);
// console.log(test3);



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
//   ];
//   console.log(books);
//   for(const book of books){
//       console.log(book.title);
//       console.log(book.author);
//       console.log(book.rating);
//   }

//   const bookName = [];
//   const bookAuthor = [];
//   const bookRaiting = [];
//   let totalRaiting = 0;
//   for(const book of books){
//       bookName.push(book.title);
//       bookAuthor.push(book.author);
//       bookRaiting.push(book.rating);
//       totalRaiting += book.rating;

//   }
//   console.log(bookName);
//   console.log(bookAuthor);
//   console.log(bookRaiting);
//   const averageRating = (totalRaiting / bookRaiting.length).toFixed(1);
//   console.log(averageRating);
  


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags.length;
//   // Change code above this line

// console.log(lastTag);


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment){
// keys.push(key);
// values.push(apartment[key]);

//  console.log(keys);


//        console.log(values);
     

    
//   }
//   console.log(keys);
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//     keys.push(key);
//   values.push(apartment[key]);
// }
  

//   // Change code above this line
// // }


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for(const key in object){
//         console.log(key);
//         if(object.hasOwnProperty(key)){
//             let a = [];
//             a.push(key)
//             propCount += a.length ;
//             // propCount.push(key.length);

// //             console.log(propCount);
// //         }
// //     }
// //     // Change code above this line
// //     return propCount;
// //   }
// // //   countProps({ name: "Mango", age: 2 })  ;
// //   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
  
// console.log(keys);
// for(const key of keys){
// values.push(apartment[key]);


// // console.log(values);
// }
// console.log();

// const book = {
//     title: "The Last Kingdom",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']


// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     // let propCount = Object.keys(object).length;
//     // console.log(propCount);
  
//     for (const key in object) {
//         console.log(key);
//       if (object.hasOwnProperty(key)) {
// propCount = Object.keys(object).length;
//         // propCount.push(object[key]).length;
//         //  console.log(propCount);
//       }
//     }
 
//     // return propCount;
//     // Change code above this line
//   }
//   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// //   countProps({ name: "Mango", age: 2 });
// // countProps({});


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys =Object.keys(apartment) ;
//   const values =Object.values(apartment) ;
// console.log(values);


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//    let values = Object.values(salaries);
// console.log(values);
//    for(const value of values){
//        console.log(value);
//        totalSalary += value;
//        console.log(totalSalary);
//    }

//     // Change code above this line
//     // return totalSalary;
//   }
//   countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for(const color of colors){
//     //   console.log(color.hex);
//     //   console.log(color.rgb);
//       hexColors.push(color.hex);
//       rgbColors.push(color.rgb);
//     //   console.log(rgbColors);
//   }
  

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
  
//   for(const product of products){
//       console.log(product);
//       if(product.name === productName){
//           console.log(product.price);
//       }
//   }
//   console.log(null);
//     // Change code above this line
//   }
// //   getProductPrice("Grip");
// getProductPrice("Engine");

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//   const array = [];
//   for(const product of products){
//       if(product[propName]){
//           array.push(product[propName]);
//       }
// //     if(propName === 'name'){
// //   array.push(product.name);
// //     }
// //     if(propName === 'quantity'){
// //       array.push(product.quantity);
// //     }
// //     if(propName === 'price'){
// //       array.push(product.price);
// //     }
//   }
//   console.log(array);
//   return array;
//     // Change code above this line
//   }
  
//   getAllPropValues('name');
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//     const totalCost = 0;
//   for(const product of products){
//     //   console.log(product.price);
//       if(product.name === productName){
//        console.log(product.price * product.quantity);
//     //    totalCost = product.price * product.quantity;
//     //    console.log(totalCost);
//       }

//   }
// //   console.log(totalCost);
// //   return totalCost;
//     // Change code above this line
//   }
// //   calculateTotalPrice("Droid");
//   calculateTotalPrice("Blaster");



// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
//   const {
//       yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   } = highTemperatures;
//   // const yesterday = highTemperatures.yesterday;
//   // const today = highTemperatures.today;
//   // const tomorrow = highTemperatures.tomorrow;
//   console.log(icon);
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
//   console.log(meanTemperature);


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const { hex, rgb } of colors) {
// //    const {hex, rgb} = color;
//     console.log(hex);
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }


//   const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const { hex, rgb, } of colors) {
//   //  const {hex, rgb} = color;
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }


// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
//   const { today: {low: lowToday, high: highToday,icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, tomorrow: {low: lowTomorrow,high: highTomorrow, tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, } = forecast;
//   // const highToday = forecast.today.high;
//   // const lowToday = forecast.today.low;
//   // const todayIcon = forecast.today.icon;
  
//   // const highTomorrow = forecast.tomorrow.high;
//   // const lowTomorrow = forecast.tomorrow.low;
//   // const tomorrowIcon = forecast.tomorrow.icon;
//   console.log(todayIcon);


// Change code below this line
// function calculateMeanTemperature(forecast) {
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     const {today:{low: todayLow, high: todayHigh,}, tomorrow:{low: tomorrowLow, high: tomorrowHigh,},} = forecast;
  
//     // Change code above this line
//     console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4); 
//   }
//   calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores) ;
// const worstScore = Math.min(...scores) ;
// console.log(worstScore);


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(worstScore);


// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings,};

//   console.log(finalSettings);



//   function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
// const arrayFn = {
//     completed: false, category: 'General', priority: 'Normal', ...data,
// }
// // console.log(arrayFn);
//   console.log(arrayFn);
//     // Change code above this line
//   }
// //   makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
//   makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }) 



//   // Change code below this line
// function add(...restArgs) {
// let totalArgs = 0;
//     console.log(restArgs);
//     console.log(totalArgs);
// for(const element of restArgs){
//     // console.log(element);
//     totalArgs += element;
   
    
// }
// console.log(totalArgs);
//   }
//   add(32, 6, 13, 19, 8);