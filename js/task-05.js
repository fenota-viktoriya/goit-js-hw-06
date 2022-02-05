const inputRef = document.querySelector('#name-input');
const inputSpanRef = document.querySelector('#name-output');
console.log(inputRef);
console.log(inputSpanRef);


inputRef.addEventListener('input', onInputChangeOutput );

function onInputChangeOutput(event){
    
    return inputSpanRef.textContent = event.currentTarget.value;
};