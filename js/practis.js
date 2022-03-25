'usse strict'

// function sumAll(arr) {
//     let total = 0
//     // console.log(total);
//     if(arr[0] < arr[arr.length -1]){
//             for(let i = arr[0]; i <= arr[arr.length -1]; i += 1){
//         // console.log(i);
//         total += i
//     }
//     }else{
//         for(let i = arr[0]; i >= arr[arr.length -1]; i -= 1){
//             // console.log(i);
//             total += i
//         }
//     }

    
//     return total ;
//   }
//   console.log(sumAll([1, 4]));
//   console.log(sumAll([4, 1]));
//   console.log(sumAll([5, 10]));

// function diffArray(arr1, arr2) {
    
//     const newArr = []
//         // arr2.map(velue => arr1.includes(velue) ? [] : newArr.push(velue));

//         // arr1.map(velue => arr2.includes(velue) ? [] : newArr.push(velue));
//     return newArr
//   }
//   console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// function destroyer(arr, ...args) {
//   // let q = [...arr]
//   // arr.length = 0
  
    
//     // arr.length = 0
//     // console.log(arr);
//     // let r = []
//     // q.filter( value => args.includes(value) ? [] : arr.push(value))
//     // arr.splice(0, arr.length)
//     // arr = r
//     return arr.filter(value => !args.includes(value));
//   }
//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//   console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

// function whatIsInAName(collection, source) {
//   const arr = Object.keys(source);
  // console.log(arr);
  
  
// collection.filter(obj => obj.map(elem => Object.keys(elem) === Object.keys(obj)))



  // Only change code above this line
//   return collection.filter(obj => arr.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]) );
// }
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


// console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));









