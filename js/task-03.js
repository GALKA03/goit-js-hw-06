const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const menuEL = document.querySelector('.gallery')
console.log(menuEL)
//console.log(itemEL)

const newImeges = images
.map((image) => `<li class="menu-item" > <img src = ${image.url} alt = ${image.alt} width = '300' height = '200'><img></li>`)
  .join("");
  menuEL.insertAdjacentHTML("beforeend", newImeges);
  
  menuEL.style.display = 'flex';
  menuEL.style.listStyle = 'none'
  menuEL.style.justifyContent = 'space-between';



// const newImeges = images.map(imge =>{
// const itemEL = document.createElement('li')
// itemEL.classList.add('galery__item')
// menuEL.append(itemEL)
// const imegeEL = document.createElement('img')
// imegeEL.classList.add('galery__img')
// itemEL.appendChild(imegeEL)
// //itemEL.appendChild(imegeEL)
// imegeEL.src = imge.url;
// imegeEL.textContent = imge.alt;
// imegeEL.width = '400'
// return itemEL;
// })


//menuEL.insertAdjacentHTML("beforeend", newImeges);


//menuEL.append(...imegeEL)
// imegeEL.src ='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// imegeEL.alt = 'White and Black Long Fur Cat'

//document.appendChild(imegeEL)
// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.