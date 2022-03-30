'use strict'
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

// const navEl = document.querySelector('.item')

// console.log(navEl);
// const parentNavItem = navEl.parentNode
// // console.log(parentNavItem);
// const childNavItem = navEl.children
// // console.log(childNavItem);
// const firstNavItem = navEl.firstElementChild
// // console.log(firstNavItem);
// const childNavItem2 = navEl.firstChild
// // console.log(childNavItem2);
// const lastNavItem = navEl.lastChild
// // console.log(lastNavItem);
// const lastElNavItem = navEl.lastElementChild
// // console.log(lastElNavItem);
// const previousSibling = navEl.previousSibling
// // console.log(previousSibling);
// const previousElSibling = navEl.previousElementSibling
// // console.log(previousElSibling);
// const nextSibling = navEl.nextSibling
// // console.log(nextSibling);
// const nextElSibling = navEl.nextElementSibling
// console.log(nextSibling);

// const titleEl = document.createElement('h1')
// titleEl.classList.add('page-title')
// titleEl.textContent = 'это заголовок страници ;)'
// // console.log(titleEl);
// //console.log(document);
// // document.body.appendChild(titleEl)
// const imageEl = document.createElement('img')
// imageEl.src ='https://yablyk.com/wp-content/uploads/2017/05/golden-hour_in_photo.jpg'
// imageEl.alt ='some'
// imageEl.width = 640
// //console.log(imageEl.width);
// // console.log('image', imageEl);
// // document.body.appendChild(imageEl)
// document.body.prepend(titleEl, imageEl)

// const navItemEl = document.createElement('li')
// navItemEl.classList.add('site-nav__item')
// // navItemEl.textContent = 'my li'
// // console.log(navItemEl);

// const navLinkEl = document.createElement('a')
// navLinkEl.classList.add('site-nav__item')
// navLinkEl.textContent = 'личный кабинет'
// navLinkEl.href='/profile'
// // console.log(navLinkEl);


// // console.log(navItemEl);
// //console.log(navLinkEl);


// const navEl = document.querySelector('.item-title')
// navEl.classList.add('first-title')
// // console.log(navEl);
// navEl.classList.remove('first-title')
// // console.log(navEl);
// // const foundSom = navEl.childNodes
// // console.log(foundSom);
// // console.log(navEl);
// // navEl.appendChild(navItemEl)
// const findToUl = document.querySelector('.item-list-animals')
// //console.log(findToUl);
// const findToLi = findToUl.lastElementChild
// // console.log(findToLi);
// findToUl.appendChild(navItemEl)
// const findToNewAddedLI = findToUl.lastElementChild
// // console.log(findToNewAddedLI);
// findToNewAddedLI.appendChild(navLinkEl)

// navItemEl.appendChild(navLinkEl)
// // console.log(navItemEl);

// navItemEl.classList.replace('site-nav__item', "item-animals")

// const allLi = document.querySelector('.item-animals')
// // console.log(allLi);
// findToUl.insertBefore(navItemEl , findToUl.firstElementChild)
// console.log(findToUl);

// const colorPickerOptions = [
//     {label: 'red', color: '#f44336'},
//     {label: 'gren', color: '#4caf50'},
//     {label: 'blue', color: '#2196f3'},
//     {label: 'grey', color: '#607d88'},
//     {label: 'pink', color: '#e91e63'},
//     {label: 'indigo', color: '#3f5185'},
// ]
    


// const colorPickerContainer = document.querySelector('.js-color-picker')
// console.log(colorPickerContainer);
// const elements = colorPickerOptions.map(option => {
         

//     const buttonEl = document.createElement('button')
//     buttonEl.tupe = 'button'
//     buttonEl.classList.add('color-picker-option')
//     buttonEl.textContent = option.label
//     buttonEl.style.backgroundColor = option.color
    
//     return buttonEl
// })
// colorPickerContainer.append(...elements)

// const makeColorPickerOptions = options =>{
//     return options.map(option => {

//         const buttonEl = document.createElement('button')
//         buttonEl.tupe = 'button'
//         buttonEl.classList.add('color-picker-option')
//         buttonEl.textContent = option.label
//         buttonEl.style.backgroundColor = option.color
        
//         return buttonEl
//     })
// }

// const elements = makeColorPickerOptions(colorPickerOptions)
// colorPickerContainer.append(...elements)
// console.log(elements);



// for( let i = 0; i < colorPickerOptions.length; i += 1){
//     // console.log(colorPickerOptions[i]);

//     const option = colorPickerOptions[i]

// const buttonEl = document.createElement('button')
// buttonEl.tupe = 'button'
// buttonEl.textContent = option.label
// buttonEl.style.backgroundColor = option.color

// elements.push(buttonEl)
// }
// console.log(elements);
// colorPickerContainer.append(...elements)



// const product = {
//     name: 'Cервоприводы',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat eligendi dolore non incidunt, quos cum tempore,  ex eveniet similique?',
//     price: 2000,
//     available: true,
//     onSale: true,
   
// }

// const productEl = document.createElement('articale')
// productEl.classList.add('product')

// const nameEl = document.createElement('h2')
// nameEl.classList.add('product__name')
// nameEl.textContent = product.name

// const paragrDescrEl = document.createElement('p')
// paragrDescrEl.classList.add('product__descr')
// paragrDescrEl.textContent = product.description

// const paragrPriceEl = document.createElement('p')
// paragrPriceEl.classList.add('product__price')
// paragrPriceEl.textContent = `Цена: ${product.price}` 

// console.log(productEl);
// // console.log(nameEl);
// // console.log(paragrDescrEl);
// // console.log(paragrPriceEl);

// productEl.append(nameEl, paragrDescrEl, paragrPriceEl)


// const testInnerHtml = document.querySelector('.title')
// console.log(testInnerHtml);
// // testInnerHtml.innerHTML 
// testInnerHtml.insertAdjacentHTML('afterend', '<p>bkhk</p>')


// function pairElement(str) {
//     // Return each strand as an array of two elements, the original and the pair.
//     var paired = [];
  
//     // Function to check with strand to pair.
//     var search = function(char) {
//       switch (char) {
//         case "A":
//           paired.push(["A", "T"]);
//           break;
//         case "T":
//           paired.push(["T", "A"]);
//           break;
//         case "C":
//           paired.push(["C", "G"]);
//           break;
//         case "G":
//           paired.push(["G", "C"]);
//           break;
//       }
//     };
  
//     // Loops through the input and pair.
//     for (var i = 0; i < str.length; i++) {
//       search(str[i]);
//     }
  
//     return paired;
//   }

//   console.log(pairElement("ATCGA"));


  














