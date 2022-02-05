const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const elements = [];
/*for ( const el of ingredients){
  const makeEl = document.createElement('li');
  makeEl.classList.add('item');
  makeEl.textContent = el;
elements.push(makeEl);
}*/


ingredients.map(item =>{
  const makeEl = document.createElement('li');
  makeEl.classList.add('item');
  makeEl.textContent = item;
elements.push(makeEl);
});
ingredientsEl.append(...elements);