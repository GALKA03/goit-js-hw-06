let counterValue = 0;
const counterValueCounter = document.querySelector('#value');

const actionsMinus = document.querySelector('button[data-action="decrement"]') 

const actionPlus = document.querySelector('button[data-action="increment"]');

//counterValue.classList.add('span-value')

actionsMinus.addEventListener('click', () => {
    console.log(counterValue -= 1) ;
    counterValueCounter.textContent = counterValue;
} )


actionPlus.addEventListener('click', () => {
    console.log(counterValue += 1)
    counterValueCounter.textContent = counterValue;
})

//actions.classList.add('class_button')
//console.log(actions[1].dataset.action)
console.log(actionsMinus);
console.log(actionPlus);
console.log(counterValue);
// console.log(actions);
//

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.