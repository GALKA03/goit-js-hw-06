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

function onCreateBoxes(){
let amount  = + refs.divBoxes.value; 
createBoxes(amount)
};
function createBoxes(amount){
const firstDiv = 30;
const elements = [];
 for (var i = 0; i < amount; i++) {
  let size = firstDiv + i * 10;
const createDiv = document.createElement('div')
createDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()} )`;
elements.push(createDiv)

};
return elements;
let boxesToAdd = createBoxes(inputNum.value)
	boxes.append(...boxesToAdd)
}
//const createDiv = document.createElement('div')
// if(createDiv = amount.value){
//   createDiv.append(refs.divBoxes)}
refs.createButton.addEventListener('click', onCreateBoxes)
refs.destroyButton.addEventListener('click', onDestroyBoxes)






// Создай функцию createBoxes(amount), которая принимает 
// один параметр - число. Функция создает столько <div>,
//  сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.