const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
//console.log(inputRef);
//console.log(spanRef);
inputRef.addEventListener('input',onInputFontSizeChange);
function onInputFontSizeChange(){
    const fontSize  = inputRef.value;
    spanRef.style.fontSize = `${fontSize}px`;
    //console.log(fontSize)
}