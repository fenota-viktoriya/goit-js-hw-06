const inputRef = document.querySelector('#name-input');
const outputSpanRef = document.querySelector('#name-output');
//console.log(inputRef);
//console.log(outputSpanRef);


inputRef.addEventListener('input', onInputChangeOutput );

function onInputChangeOutput(event){
    const outputValue = event.currentTarget.value;
 return !outputValue ? outputSpanRef.textContent = 'Anonymous' : outputSpanRef.textContent = outputValue;
 
}
