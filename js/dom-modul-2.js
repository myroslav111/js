'use strict'

// const newElDiv = document.createElement('div')
// newElDiv.classList.add('btnForTestEv')
// newElDiv.style.padding = '10px'
// newElDiv.style.backgroundColor = 'blue'

// console.log(newElDiv);
// const nameOfBtn = [{class: 'js-target-btn', txt: 'кнопка'}, {class: 'js-add-listener', txt: 'добавить слушателя'}, {class: 'js-remove-listener', txt: 'снять слушателя'}]

// const newListBtn = arr => arr.map(option => {
//     const buttonNew = document.createElement('button')
//     buttonNew.type = 'button'
//     buttonNew.classList = option.class
//     buttonNew.textContent = option.txt
//     buttonNew.style.margin = '10px'
    

//     return buttonNew
// })
// // console.log(newListBtn(nameOfBtn));
// const makeContainerWithBtn = newListBtn(nameOfBtn)
// newElDiv.append(...makeContainerWithBtn)

// document.body.append(newElDiv)

// const firstBtn = document.querySelector('.js-target-btn')
// const secondBtn = document.querySelector('.js-add-listener')
// const thirdBtn = document.querySelector('.js-remove-listener')

// firstBtn.addEventListener('click', handleTargetButtonClick
//    )

//function handleTargetButtonClick() {
//    console.log('клик');
// }
//targetButtonClickHandler
// onTargetButtonClick

// secondBtn.addEventListener('click', () => {
//     console.log('вешаю слушателя на кнопка');

//     firstBtn.addEventListener('click', onTargetButtonClick)
// })

// thirdBtn.addEventListener('click', () => {
//     console.log('снимаю слушателя на кнопка');

//     firstBtn.removeEventListener('click', onTargetButtonClick)
// })

// function onTargetButtonClick() {
//     console.log('клик по кнопке');
// }

// function logMassage(){
//     console.log('клик по целевой кнопке');
// }
// console.log();



/////////////////////////////////////////////////


// const myForm = document.createElement('form')
// myForm.classList.add('js-register-form')
// myForm.autocomplete = 'off'
// myForm.style.width = '500px'
// myForm.style.height = '200px'
// // myForm.style.backgroundColor = 'blue'
// document.body.prepend(myForm)
// // console.log(myForm);

// const mainDiv = document.createElement('div')
// // mainDiv.setAttribute(role, group)
// // console.log(mainDiv);
// myForm.append(mainDiv)

// const firstLabel = [{txt: 'почта', type: 'email', name: 'email'}, {txt: 'пароль', type: 'password', name: 'password'}]
// const secondLabel = []

// const makeInput = arr => arr.map(obj => {


//     return `<label>${obj.txt}<input type ='${obj.type}' name ='${obj.name}' /></label>`
// })
// // console.log(makeInput(firstLabel));
// const firstInputDone = makeInput(firstLabel).join('')
// mainDiv.insertAdjacentHTML("beforeend", firstInputDone)

// const secondInputDone = makeInput(secondLabel).join('')
// mainDiv.insertAdjacentHTML("afterbegin", secondInputDone)

// console.log(inputDone);
// mainDiv.insertAdjacentHTML("afterend", '<br/>')

// const mainSecondDiv = document.createElement('div')
// mainSecondDiv.classList.add('gdv')
// myForm.append(mainSecondDiv)
// mainSecondDiv.insertAdjacentHTML("afterbegin", '<b>Тип подписки</b>')
// mainSecondDiv.insertAdjacentHTML("afterend", '<button type="submit">зарегестрироватся</button>')

// const checkBox1 = [{type: 'radio', name: 'subscription', value: 'free', txt: 'free'}, {type: 'radio', name: 'subscription', value: 'basic', txt: 'basic'}, {type: 'radio', name: 'subscription', value: 'pro', txt: 'pro'}]

// const secondInputForContainer = arr1 => arr1.map(obj => {


//     return `<label><input type="${obj.type}" name="${obj.name}" value="${obj.value}"/>${obj.txt}</label>`
// })

// const secondInpputDone = secondInputForContainer(checkBox1 ).join('')
// mainSecondDiv.insertAdjacentHTML("beforeend", secondInpputDone)
// // console.log(secondInpputDone);
// mainSecondDiv.insertAdjacentHTML("afterend", '<br/>')

// // console.log(myForm);

// const form = document.querySelector('.js-register-form')
// // console.log(form);

// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit(event) {
//     event.preventDefault()

//     // console.dir(event.currentTarget.elements.subscription.value);

//     const formData = new FormData(event.currentTarget)
//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> value', value);
//         console.log('onFormSubmit -> name', name);
//     })


//     // console.log('это сабмит формы');
// }



//////////////////////////////////////////////////


// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckBox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),

// }
// // console.log(refs.licenseCheckBox);

// refs.input.addEventListener('input', onInputChange)
// refs.licenseCheckBox.addEventListener('change', onLicenseChange)

// function onInputFocus() {
//     console.log('input poluchil focus - sobutie focus');
// }

// function onInputBlur() {
//     console.log('input poteral focus - sobutie blur');
// }

// function onInputChange(event) {
//     // console.log(event.currentTarget.value);
//     refs.nameLabel.textContent = event.currentTarget.value
// }

// function onLicenseChange(event){
// // console.log(event.currentTarget.checked);
// // console.log('refs.btn.disabled', refs.btn.disabled);

// refs.btn.disabled = !event.currentTarget.checked

// }


///////////////////////////////////////////////////////

// const button = document.createElement('button')
// button.classList.add('js-clear')
// button.textContent = 'Очистить'
// button.style.margin = '10px'
// // console.log(button);
// document.body.prepend(button)
// button.insertAdjacentHTML("afterend", '<br/>')

// button.insertAdjacentHTML("afterend", '<p class="output js-output"></p>')


// const refs1 = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// }
// // console.log();
// window.addEventListener('keypress', onKeypress)
// refs1.clearBtn.addEventListener('click', onClearOutput)

// function onKeypress(event) {
//     console.log(event.key);
//     // console.log(event.code);

//     refs1.output.textContent += event.key
// }

// function onClearOutput() {
//     refs1.output.textContent = ''
// }

////////////////////////////////////////////////

// const refs = {
//     openModalBtn: document.querySelector('[data-action="open-modal"]'),
//     closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop')
// }

// console.log(refs);
// refs.openModalBtn.addEventListener('click', onOpenModal)
// refs.closeModalBtn.addEventListener('click', onCloseModal)
// refs.backdrop.addEventListener('click', onBackdropClick)

// function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress)
//     document.body.classList.add('show-modal')
// }

// function onCloseModal () {
//     window.removeEventListener('keydown', onEscKeyPress)
// document.body.classList.remove('show-modal')
// }

// function onBackdropClick (event) {
    
//     if(event.currentTarget === event.target){
//         onCloseModal()
//     }
// }

// function onEscKeyPress (event) {
// const ESC_KEY_CODE = 'Escape'

//     if(event.code === ESC_KEY_CODE){
//         onCloseModal()
//     }
// }

/////////////////////////////////////////////////

// const object = {
//     obj1: {
//         a: 1,
//         b: 11,
//         c: 111,
//         obj2: {
//             a: 2,
//             b: 22,
//             c: 222,
//             obj3: {
//                 a: 3,
//                 b: 33,
//                 c: 333,
//                 obj4: {
//                     a: 4,
//                     b: 44,
//                     c: 444,
//                     obj5: {
//                         a: 5,
//                         b: 55,
//                         c: 555,
//                     }
//                 }
//             }
//         }
//     },
//     obj6: {
//         a: 6,
//         b: 66,
//         c: 666,
//         obj7: {
//             a: 7,
//             b: 77,
//             c: 777,
//             obj8: {
//                 a: 8,
//                 b: 88,
//                 c: 888,
//             }
//         }
//     },
//     obj9 :{
//         a: 9,
//         b: 9,
//         c: 9,
//     }    
// }

// function qqqqqqq(obj) {
//     if( obj.b !== undefined){
//         for(let key in obj.b){
//             console.log(key);
//             qqqqqqq(obj.b[key])
//         }
//     }
// }

// for ( let key in object) {
//     qqqqqqq(object[key])
// }
// console.log('fffffff');

// qqqqqqq(object)