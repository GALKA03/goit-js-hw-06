// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInputEL = document.querySelector('#name-input');
console.log(nameInputEL)
const nameOutputEL = document.querySelector('#name-output')
console.log(nameOutputEL)

nameInputEL.addEventListener('input', onInputChenge);
//nameOutputEL.addEventListener('click', onInputNone)
 function onInputChenge(event){
  if( nameOutputEL.textContent = event.currentTarget.value){
    console.log(event.currentTarget.value)
  }
  else if(event.currentTarget.value ==='') {
    nameOutputEL.textContent = 'Anonymous';
      }
  
 } 
 //function onInputNone(event){
 //}
// console.log(event.currentTarget.value)}
// nameOutputEL.addEventListener("click", () => {
//     nameOutputEL.blur();
//   });
//   nameOutputEL.addEventListener("blur", () => {
//     nameOutputEL.value = "Anonymous";
//   });
// }
//event =>{
//     nameOutputEL.textContent = event.target.value
//       if(event.currentTarget.value = '') {
//         nameOutputEL = 'Anonymous'
//     }
// })
 
//  function onNameSubmit () {
//     if(nameInputEL === nameOutputEL){  
//  console.log(nameOutputEL.textContent = nameInputEL)}
//   return  nameOutputEL.textContent = 'Anonymous'};

// const handleClick = (event) => {
//     console.log("event: ", event);
//     console.log("event type: ", event.type);
//     console.log("currentTarget: ", event.currentTarget);
//   };
//   nameInputEL.addEventListener('input', handleClick, onNameSubmit) 
  
  
