function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
//console.log(bodyRef);
const widgetRef = document.querySelector('.widget');
//console.log(widgetRef);
const spanRef = widgetRef.querySelector('.color');
//console.log(spanRef);
const btnRef = widgetRef.querySelector('.change-color');
//console.log(btnRef);
btnRef.addEventListener('click', onClickChangeColor);
 
function onClickChangeColor(){
bodyRef.style.backgroundColor = getRandomHexColor();
spanRef.textContent = bodyRef.style.backgroundColor;
}

