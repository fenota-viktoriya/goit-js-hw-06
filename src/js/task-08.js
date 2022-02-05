const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onSubmitForm);
 function onSubmitForm(event){
     event.preventDefault();

     const formEl = event.currentTarget.elements;
     //console.dir(formEl);

     const email = formEl.email.value;
     //console.log(emailValue);
     const password = formEl.password.value;
     //console.log(passwordValue);
if (email === '' || password === ''){
alert('заполните все поля');
return;
};
const UsserInfo = {
    email,
    password,
};
console.log(UsserInfo);
formRef.reset()
 };

 