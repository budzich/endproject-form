const usernameForm = document.querySelector('#username');
const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');
const confirmForm = document.querySelector('#confirm-password');
const checkForm = document.querySelector('#check');
const form = document.querySelector('#register');

const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const validEmail = /\S+@\S+\.\S+/;
const validUsername = /^[a-zA-Z0-9]+$/;
let validForm = true;

const passwordCheck = () => {
  validForm = validForm && (passwordForm.value === confirmForm.value) && (passwordForm.value.match(validPassword));
}

const usernameCheck = () => {
  validForm = validForm && usernameForm.value.match(validUsername);
}

const emailCheck = () => {
  validForm = validForm && emailForm.value.match(validEmail);
}

form.addEventListener('submit', (e) => {
  passwordCheck();
  usernameCheck();
  emailCheck();
  if ((!validForm || !checkForm.checked)) {
    console.log(new Error('Incorrect'));
    e.preventDefault();
    validForm = true;
  }
});
