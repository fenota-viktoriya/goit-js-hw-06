function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divRef = document.querySelector('#controls');
const inputRef = divRef.querySelector('input');
const btnCreateRef = divRef.querySelector('button[data-create]');
const btnDestroyRef = divRef.querySelector('button[data-destroy]');
const divBoxRef = document.querySelector('#boxes');
btnCreateRef.addEventListener('click', onClickBoxCreate);
btnDestroyRef.addEventListener('click', destroyBoxes);

function onClickBoxCreate(){
  const amount = inputRef.value;
  return createBoxes(amount);
};
 

function createBoxes(amount) {
  const basicSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    divBoxRef.append(div);
  }
  return divBoxRef;
};


function destroyBoxes() {
divBoxRef.textContent = '';
};





