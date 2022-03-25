// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         console.log(this.pizzas.includes(pizzaName));
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };
//   console.log(pizzaPalace.order("Smoked"));
//   console.log(pizzaPalace.order("Four meats"));
//   console.log(pizzaPalace.order("Four"));

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//     //   return emails
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };
  
//   console.log(historyService.getOrdersLog());
//   console.log(historyService.getEmails());
//   console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
//   console.log(historyService.getOrdersByEmail("artemis@coldmail.net") );
//   console.log();
//   console.log();

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const child = Object.create(parent);
  
//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;
//   console.log(parent);
//   console.log(child.name);

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   console.log(parent.heritage);
//   console.log(child.name);
//   console.log();
  
// class Car {
//     constructor(brand, model, price){
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getPrice(){
//         return this.price;
//     }
//     changePrice(newPrice){
//         this.price = newPrice;
//     }
// }
// const car = new Car("Audi","Q3", 36000);
// console.log(car);
//  console.log(car.getPrice());

// class Storage{
//     constructor (item) {
//     this.item = item;
//     }
//     getItems(){
//         return this.item;
//     }
//     addItem(newItem){
//         this.item.push(newItem);
//     }
//     removeItem(itemToRemove){

//         // let g = this.item.indexOf(itemToRemove);
//         // console.log(g);
//         this.item.splice(this.item.indexOf(itemToRemove), 1);
//     }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//  console.log(["Nanitoids", "Prolonger", "Antigravitator"].indexOf("Prolonger").splace);


// class StringBuilder {
//     constructor (value){
//     this._value = value;
//     }
//     getValue(){
//         return this._value
//     }
//     padEnd(str){
         
//          return this._value = this._value + str
//     }
//     padStart(str){
        
//         return this._value =   str + this._value
//     }
//     padBoth(str){
//         return this._value = str + this._value + str
        
//     }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// // console.log('.' + '^.');
// builder.getValue()
// console.log();

// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = Car.MAX_PRICE > newPrice ? newPrice : this.#price;
  
//     }
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000
//   console.log(audi.MAX_PRICE);

// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
  
//     #email;
  
//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));

// function spinalCase(str) {
  
//     return str.split(/\s|_|(?=[A-Z])/).join('-');
//   }
//   console.log(spinalCase('This Is Spinal Tap'));
//   console.log(spinalCase("The_Andy_Griffith_Show"));
//   console.log(spinalCase("thisIsSpinalTap"));
//   console.log(spinalCase("Teletubbies say Eh-oh"));
// function translatePigLatin(str) {
//     return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//   }
//   console.log(translatePigLatin("consonant"));

// function myReplace(str, before, after) {
//   console.log(before[0] === before[0].toUpperCase());
// if(before[0] === before[0].toUpperCase()){
  
//   after = after[0].toUpperCase() + after.slice(1)
// }
// if(before[0] === before[0].toLowerCase()){
//   after = after[0].toLowerCase() + after.slice(1)
// }
// // console.log(arrStr);
//     return str.replace(before, after);
//   }
  

//   console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));  
// console.log(myReplace("I think we should look up there", "up", "Down"));