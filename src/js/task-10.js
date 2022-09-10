const refs = {
inputEL: document.querySelector('input'),
createButton: document.querySelector('button[data-create]'),
destroyButton: document.querySelector('button[data-destroy]'),
divBoxes: document.querySelector('#boxes')
}
console.log(refs.inputEL)
console.log(refs.createButton)
console.log(refs.destroyButton)
console.log(refs.divBoxes)








function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateBoxes(amount){
console.log(amount += 1)
const createDiv = document.createElement('div')

if(createDiv = amount.value){
  createDiv.append(refs.divBoxes)
};

}

refs.createButton.addEventListener('click', onCreateBoxes)
//refs.destroyButton.addEventListener('click', onDestroyBoxes)


// Создай функцию createBoxes(amount), которая принимает 
// один параметр - число. Функция создает столько <div>,
//  сколько указано в amount и добавляет их в div#boxes.