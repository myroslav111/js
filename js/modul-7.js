'use strict'

// const container = document.querySelector('.js-container')

// container.addEventListener('click', onClick)

// function onClick(event) {
//     if(event.target.nodeName !== 'BUTTON'){
//         return
//     }
//      //console.log(event.target);
//      console.log(event.target.nodeName);
// }

// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6

// addBtn.addEventListener('click', onAddBtnClick)

// function onAddBtnClick() {
//     const btn = document.createElement('button')
//     btn.type = 'button'
//     btn.textContent = `button ${labelCounter}`
    

//     container.append(btn)
//     labelCounter += 1
// }

////////////////////////////////////////////////////////

// const tagsCounter = document.querySelector('.js-tags')
// let selectedTag = null

// tagsCounter.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick (event){
//     if(event.target.nodeName !== 'BUTTON'){
//         return
//     }
    
//     const curentActiveBtn = document.querySelector('.tags__btn--activ');
//     // if(curentActiveBtn){
//     //     curentActiveBtn.classList.remove('tags__btn--activ')
//     // }
//     curentActiveBtn?.classList.remove('tags__btn--activ')

    
//     const nextCurrentBtn = event.target
//     nextCurrentBtn.classList.add('tags__btn--activ')
//     selectedTag = nextCurrentBtn.dataset.value

//     console.log(selectedTag);
// }


// const tagsCounter = document.querySelector('.js-tags')
// const selectedTags = new Set()

// tagsCounter.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick (event){
//     if(event.target.nodeName !== 'BUTTON'){
//         return
//     }
    
//     const tag = event.target.dataset.value
//     const isActiv = event.target.classList.contains('tags__btn--activ')
//     if(isActiv){
//         selectedTags.delete(tag)
//     }else{
//         selectedTags.add(tag)
//     }

//     event.target.classList.toggle('tags__btn--activ')

//     console.log(selectedTags);
    
// }


// function multiple(a, b){
//     console.log(a, b);
//     return a * b

// }

// function partial(fn, ...fixed){
// console.log(fixed);
//     return function(...args){
//         console.log();
//         console.log(args);
//         console.log(fixed.concat(args)); 
//         return fn.apply(this, fixed.concat(args))
//     }
// }
// const double = partial(multiple, 2)
// // console.log(double);
//  console.log(double(21));


// function divade(a, b){
//     return  a / b
// }
// // console.log(divade(6, 2));

// function highest (fn, ...rest){
//     return function (...args){
//         console.log(args);
//     return fn.apply(this, args.concat(rest));
//     }
// }

// const split = highest(divade, 2)
// console.log(split(6));