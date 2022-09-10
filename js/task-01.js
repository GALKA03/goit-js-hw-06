
const itemsCategoriesEL = document.querySelectorAll('li.item')

console.log(`Categories number: ${itemsCategoriesEL.length}`);

const titleEL = document.querySelectorAll('h2');

titleEL.forEach(title => {
    console.log(`Category: ${title.textContent}`)
    const listTitle = title.nextElementSibling;
    console.log(`Elements:${listTitle.children.length}`)
} )




