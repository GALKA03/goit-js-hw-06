function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEL = document.querySelector('.change-color')
console.log(buttonEL)
const spanEL = document.querySelector('.color') 
console.log(spanEL)



function onTargetButtonEvent(event){
  //console.log('click',onTargetButtonEvent)
const colorRandom = getRandomHexColor()
document.body.style.backgroundColor = colorRandom;
spanEL.textContent = colorRandom;


}


 buttonEL.addEventListener('click',  onTargetButtonEvent)







// Напиши скрипт, который изменяет цвета фона элемента <body> через 
// инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.