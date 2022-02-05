const inputRef = document.querySelector('#validation-input');
console.dir(inputRef);

inputRef.addEventListener('blur', onBlurcheckLength);

function onBlurcheckLength(event){
if (event.currentTarget.value.length === Number( inputRef.dataset.length)){
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
    return;
  }
  inputRef.classList.remove('valid')
  inputRef.classList.add('invalid')
};