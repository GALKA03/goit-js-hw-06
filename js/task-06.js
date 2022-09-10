const textInputEL = document.querySelector('input')
console.log(textInputEL)
const inputLength = textInputEL.getAttribute('data-length');
console.log('inputLength',inputLength)
console.log(typeof Number(inputLength))
textInputEL.addEventListener('blur', onBlurInput);
//textInputEL.addEventListener('focus', onFocusInput)
function onBlurInput(event){
  if(event.target.value.length === Number(inputLength)){
    textInputEL.classList.add('valid');
    textInputEL.classList.remove('invaild');  
  }
  else { 
   textInputEL.classList.remove('valid');  
 textInputEL.classList.add('invaild');
  }
//if(event.target.length === textInputEL.getAttribute('data-length')){
    //textInputEL.classList.add('vaild')
    //textInputEL.classList.remove('invald')
}
//if(textInputEL.event.target.length !== textInputEL.getAttribute('data-length')){
 //   textInputEL.classList.remove('invald')
    //textInputEL.classList.add('vaild')}}
// function onFocusInput (event){
//     const input = event.target
// input.classList.add('vaild')
//     console.log(input)
    
// }
//console.log(textInputEL.target)

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное 
// количество введённых символов.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, 
// используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

