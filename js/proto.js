'use strict';
// // function Animal() {}

// // Animal.prototype = {
// //   constructor: Animal,
// //   eat: function() {
// //     console.log("nom nom nom");
// //   }
// // };

// // function Dog() {}

// // // Add your code below this line
// // Dog.prototype = Object.create(Animal.prototype);

// // let beagle = new Dog();
// // beagle.eat(); // Should print "nom nom nom"

// // Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// console.log(tea4TeamFCC);

// Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27) ;
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13) ;
// // Only change code above this line

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );

// tabs is an array of titles of each site open within the window
// const Window = function(tabs) {
//     this.tabs = tabs; // We keep a record of the array inside the object
//   };
  
//   // When you join two windows into one window
//   Window.prototype.join = function(otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
//   };
  
//   // When you open a new tab at the end
//   Window.prototype.tabOpen = function(tab) {
//     this.tabs.push('new tab'); // Let's open a new tab for now
//     return this;
//   };
  
//   // When you close a tab
//   Window.prototype.tabClose = function(index) {
  
//     // Only change code below this line
  
//     const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
//     console.log(this);
//     console.log(tabsBeforeIndex);
//     // console.log(videoWindow);
//     const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
// //   console.log(tabsAfterIndex);
//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
//     // Only change code above this line
  
//     return this;
//    };
  
// //   Let's create three browser windows
//   const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
//   const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
//   const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
//   const video = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
//   // Now perform the tab opening, closing, and other operations
// //   const finalTabs = socialWindow
//     // .tabOpen() // Open a new tab for cat memes
//     // .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//    // .join(workWindow.tabClose(1).tabOpen());
// //   console.log(finalTabs.tabs);

// //   ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
// console.log(workWindow);
// console.log(socialWindow);
// console.log(videoWindow);
// console.log(video.tabOpen().join(videoWindow.tabClose(2)));


// The global variable
// let fixedValue = 4;

// function incrementer(w) {
//   // Only change code below this line

// return w +1
//   // Only change code above this line
// }
// console.log(incrementer(fixedValue));


// The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
// function add(copyBookList, bookName) {
// let newArr = [...copyBookList]
//   newArr.push(bookName);
//   return newArr;
  
//   // Change code above this line
// }

// // Change code below this line
// function remove(copyBookList, bookName) {
//   let newArr = [...copyBookList]
//   const book_index = newArr.indexOf(bookName);
//   if (book_index >= 0) {

//     newArr.splice(book_index, 1);
//     return newArr;

//     // Change code above this line
//     }
// }
// console.log(add(bookList, 'rrr'));
// console.log(bookList);
// console.log(remove(bookList, 'The Hound of the Baskervilles'));
// console.log(bookList);
// console.log();

// The global variable
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];
// console.log();

// function getRating(watchList) {
//   // Only change code below this line
//   let q = watchList.filter(writ => writ.Director === "Christopher Nolan").map(rating => Number(rating.imdbRating))
//   let averageRating = q.reduce(((total, rate) => total + rate), 0);
//   console.log(q.length);
//   // watchList.reduce(element)

// /// 
//   // Only change code above this line
//   return averageRating / q.length;
// }

// console.log(getRating(watchList));
// const filteredList = watchList.filter(ratin => ratin.imdbRating >= 8).map(({Title: title, imdbRating: rating}) => ({title, rating}))


// console.log(filteredList);
// // Only change code below this line

// const ratings = watchList.map(({Title: title, imdbRating: rating}) => ({title, rating}));


// // for (let i = 0; i < watchList.length; i++) {
// //   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// // }

// // Only change code above this line

// console.log(JSON.stringify(ratings));
// console.log(JSON.stringify);


// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   const newArray = [];
//   // Only change code below this line
//   this.forEach(element => newArray.push(callback(element)))
//   // Only change code above this line
//   console.log(callback);
//   console.log(this);
//   return newArray;
// };
 
// const new_s = s.myMap(function(item) {
//   console.log(item);

//   return item * 2;
// });
// console.log(new_s);


// const z = [2, 3, 4]
// Array.prototype.w = function(callback){
//   const x = []
//   this.forEach(num => x.push(callback(num)))

//   return x
// }
// console.log(Array.prototype.w = (z));
// console.log();
// console.log();
// console.log();


// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });
// console.log(Math.random() > 0.5);

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");


// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   // Only change code below this line
//   const newArray = [];
//   this.forEach(element => callback(element) ? newArray.push(element): [])
//   // Only change code above this line
//   return newArray;
// };

// const new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });
// console.log(new_s);

// function sliceArray(anim, beginSlice, endSlice) {
//   // Only change code below this line
// return anim.slice(beginSlice, endSlice)

//   // Only change code above this line
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

// console.log(sliceArray(inputAnim, 1, 3));

// function nonMutatingConcat(original, attach) {
//   // Only change code below this line


// return original.concat(attach)
//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];


// console.log(nonMutatingConcat(first, second));
// console.log(first);
// console.log(second);


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;


// console.log(tags);
// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   console.log(acc);
//   console.log(tag);
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});
// // console.log(countTags);
// // console.log(tags);
// const tagCount = countTags(tags);
// console.log(tagCount);

// const squareList = arr => {
//   // Only change code below this line

//   return arr;
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// // console.log([-3, 4.8, 5, 3, -3.2].filter(num => num % parseInt(num) === 0));
// console.log();
// let c = [-3, 4.8, 5, 3, -3.2].filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2))
// console.log(c);
// .map(num => Math.pow(num))

// function alphabeticalOrder(arr) {
//   // Only change code below this line

//   return arr.sort((a, b) => a.localeCompare(b))
//   // Only change code above this line
// }


// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// const globalArray = [1, 30, 4, 21, 100000];

// function nonMutatingSort(arr) {
//   // Only change code below this line
// let q = [...globalArray]
// q.sort((a, b) => a - b)
// return q
//   // Only change code above this line
// }
// console.log(nonMutatingSort(globalArray));

// function sentensify(str) {
//   // Only change code below this line
// return str.split(/\W/).join(' ')

//   // Only change code above this line
// }


// console.log(sentensify("The.force.is.strong.with.this.one"));

// Only change code below this line
// function urlSlug(title) {

// return title.toLowerCase().split(' ').filter(word => word !== '').join('-')
// }
// // Only change code above this line

// console.log(urlSlug(" Winter Is  Coming"));
