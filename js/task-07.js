// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) и 
// изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.
const textInputEL = document.querySelector('#font-size-control')
console.log(textInputEL)
console.log('id',textInputEL)
const spanTextEL = document.querySelector('#text')
console.log(spanTextEL)
textInputEL.addEventListener('change', onInputChengSise)
function onInputChengSise (event){
    spanTextEL.style.fontSize = event.target.value + 'px';

}