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
