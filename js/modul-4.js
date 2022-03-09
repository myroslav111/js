// makePizza = () =>  "Your pizza is being prepared, please wait.";

// const result = makePizza();
// const pointer = makePizza;
// console.log(pointer);
// console.log(result);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(pointer);

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return console.log(callback(pizzaName)); 
    
//   }
//   // makeMessage("Royal Grand", makePizza)
//   makeMessage("Ultracheese", deliverPizza);
//   // console.log(makeMessage);

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//   }
  
//   // Передаём инлайн функцию greet как колбэк
//   registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   });
  
// //   Передаём инлайн функцию notify как колбэк
//   registerGuest("Поли", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
//   });


// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
  
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//       console.log(`eatpizza ${pizzaName}.`);
//   });

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError)  {
//         if(this.pizzas.includes(pizzaName)){
            
//             return onSuccess(pizzaName);
//         }
//        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`); 
//     },
//   };
// //   // Change code above this line
  
// //   // Callback for onSuccess

// //   // Change code above this line
  
// //   // Callback for onSuccess
//   function makePizza(pizzaName) {

//     return ( `Your order is accepted. Cooking pizza ${pizzaName}.`);
//   }
  
// //   // Callback for onError
//   function onOrderError(error) {
//     return (`Error! ${error}`); 
//   }
//   pizzaPalace.order("Smoked", makePizza, onOrderError)

//  console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError)); 
//   pizzaPalace.order("Four meats", makePizza, onOrderError)
  
//   pizzaPalace.order("Vienna", makePizza, onOrderError)


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(element => totalPrice += element
    
    
//     // console.log(totalPrice);
//   );

//   // Change code above this line
//   return totalPrice; 
  
// }
//   // console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// // ;
  

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// // numbers.forEach(element => {
// //   console.log(element);
// //   if (element > value) {

// //     filteredNumbers.push(element);
// //   }
// // });
// numbers.forEach(element => element > value ? filteredNumbers.push(element) : filteredNumbers
  
// );

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   // firstArray.forEach(element => {
//   //   console.log(element);
//   //   if(secondArray.includes(element)){
//   //     commonElements.push(element);
  
//   //   }
//   // });
// firstArray.forEach(element => secondArray.includes(element) ? commonElements.push(element) : commonElements
  
// );

//   return commonElements;
//   // Change code above this line
// }
// // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem ;

// console.log(calculateTotalPrice(8, 60));


// const calculateTotalPrice = (orderedItems) =>{
//   let totalPrice = 0;

//   orderedItems.forEach(element => totalPrice += element
    
//  );
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => number > value ? filteredNumbers.push(number) : filteredNumbers
    
//   );

//   // Change code above this line
//   return filteredNumbers;
// }


// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(number => number > value ? filteredNumbers.push(number) : filteredNumbers
//     // console.log(number);
//   );

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => secondArray.includes(element) ? commonElements.push(element) : commonElements);

//   // Change code above this line
//   return commonElements;
// }
// getCommonElements([1, 2, 3], [10, 20, 30]);

// function changeEven(numbers, value) {
//   // Change code below this line
//   let q = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//       console.log(numbers[i]);
//       numbers[i] = numbers[i] + value;
      
//     }
//   }
// return numbers;
//   // Change code above this line
// }


// function changeEven(numbers, value) {

// const newArrey = [];
//   numbers.forEach(element => {
//     console.log(element);
//     if(element % 2 === 0){
//       newArrey.push(element + value)
//     }
//     if(element % 2 !== 0){
//       newArrey.push(element);
//     }
//   }
//   ); 
//   return newArrey;
//   }
// console.log(changeEven([17, 24, 68, 31, 42], 100));



// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     if(element % 2 === 0){
//         newArray.push(element * value);
//     }
  
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// // console.log(book);
// console.log(titles);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);


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
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];

//   const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)

//   console.log(getNamesSortedByFriendCount(users));

// const getSortedFriends = users => [...users].flatMap(frend => frend.friends).filter((friendsName, index, array) => array.indexOf(friendsName) === index).sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));


// const getTotalBalanceByGender = (users, gender) => users.filter(gen => gen.gender === gender).reduce((totalBal, bal) => totalBal + bal.balance, 0);
    

// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));
// users.filter(user => user.gender === gender  user.reduce((total, bal) => total + bal.balance) 



//   const sortByAscendingBalance = users => users.sort((a, b) => a.balance - b.balance);
//   console.log(sortByAscendingBalance(users));


// const sortByDescendingFriendCount = users =>[...users].sort((a, b) => b.friends.length - a.friends.length);

// console.log(sortByDescendingFriendCount(users));


// const sortByName = users =>[...users].sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortByName(users));


//   const calculateTotalBalance = users => users.reduce((totalCaunt, user) => totalCaunt + user.balance, 0);
// console.log(calculateTotalBalance(users));

// const getTotalFriendCount = (users) => users.reduce((totalCaunt, user) => 
//     totalCaunt + user.friends.length, 0);
// console.log(getTotalFriendCount(users));
// console.log(getTotalFriendCount(users).length);


//   const isEveryUserActive = (users) => users.every(user => user.isActive)
//   console.log(isEveryUserActive(users));


// const getUserWithEmail = (users, email) => users.find(userEmail => userEmail.email === email);
// //   console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

//   const getActiveUsers = (users) => users.filter(usersIsActiv => !usersIsActiv.isActive)

//   console.log(getActiveUsers(users));

//   const getFriends = (users) => users.flatMap(userFriends => userFriends.friends).filter((fr, index, arr) => arr.indexOf(fr) === index);

//   console.log(getFriends(users));

//   const getUsersWithFriend = (users, friendName) =>
//   users.filter(userFriends => userFriends.friends.includes(friendName));


//   console.log(getUsersWithFriend(users, "Briana Decker"));

//   const getUsersWithAge = (users, minAge, maxAge) => users.filter(
//       userAge => userAge.age > minAge && userAge.age < maxAge
//   );
//   console.log(getUsersWithAge(users, 20, 30));


// const getUsersWithEyeColor = (users, color) => users.filter(userEye => userEye.eyeColor === color ? userEye : 0).flatMap(nameEye => nameEye.name);
// const getUsersWithEyeColor = (users, color) => users.filter(userEye => userEye.eyeColor === color ? userEye : 0);
// console.log(users);
// console.log(getUsersWithEyeColor(users, 'brown'));
// console.log(getUsersWithEyeColor());



// const getUserNames = users.map(userNames => userNames.name);
// console.log(getUserNames);

// const getUserNames = users => users.map(userNames => userNames.name);
//       console.log(getUserNames(users));
// const getUserEmails = users => users.map(userEmail => userEmail.email);

// console.log(getUserEmails(users));


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0 );
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
  // Change code below this line
//   const allGenres = books.flatMap(bookGenres => bookGenres.genres);
//   .filter((genre, index, array ) => array.indexOf(genre) === 0);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(allGenres);
// console.log(uniqueGenres);


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const MIN_BOOK_RATING = 8;
  
//   const names = [...books]
//   .filter(values => values.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map(book => book.author)
//  console.log(names);




  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(autorBook => autorBook.author === AUTHOR );
//   console.log(topRatedBooks);
//   console.log(booksByAuthor);


// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];


//   const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author)
//   );
//   const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author)
//   );
//   const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
//   const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
//   console.log(sortedByAuthorName);
//   console.log(sortedByReversedAuthorName);
//   console.log(sortedByAscendingRating);
//   console.log(sortedByDescentingRating);



//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
 
//   const bookByAuthor = books.find(aut => aut.author ===AUTHOR);
  
//  console.log( bookByAuthor);


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(num => num % 2 !==0);

// const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;
// console.log(eachElementInFirstIsOdd);


// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((total, count) => total + count);
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log();

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
  
//   console.log(total); //
//  const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//     console.log(total);
//     console.log(student);
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(totalScore);

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
  // Пройдем по всем элементам коллекции и добавим значения свойства tags
  // к аккумулятору, начальное значение которого укажем пустым массивом [].
  // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
//   const tags = tweets.reduce((allTags, tweet) => {
//       console.log(allTags);
//       console.log(tweet);
//     allTags.push(...tweet.tags);
  
//     return allTags;
//   }, []);
  
//   console.log(tags);
  
  // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
  // для сбора тегов из коллекции
//   const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);
  
//       return allTags;
//     }, []);
  
//   console.log(getTags(tweets));

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame);


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
// const ascendingReleaseDates = releaseDates.sort((a, b) => a - b);
// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);