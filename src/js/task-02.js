const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const list = document.querySelector("ul")
 const arr = [];
//  console.log(list)
ingredients.forEach(ingredient => { 
const newIngridientsEL = document.createElement('li')
console.log(newIngridientsEL)
newIngridientsEL.textContent = ingredient;
newIngridientsEL.classList.toggle('item')
arr.push(newIngridientsEL)
 }); 
 list.after(...arr)

// let list = document.querySelector("ul")

// let ingredient = (in1, in2) => {
//   for(const ingredient of in2 ) {

//     const li = document.createElement('li');  
//       li.textContent = ingredient;
//     in1.append(li);
// console.log(ingredient)

//   }

// }
// ingredient(list,ingredients)



//list.append(newIngridientsEL)


//console.log(itemlist)


//const itemAdd = document.querySelector(".item")


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.