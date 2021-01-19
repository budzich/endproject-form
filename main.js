const usernameForm = document.querySelector('#username');
const emailForm = document.querySelector('#email');
const passwordForm = document.querySelector('#password');
const confirmForm = document.querySelector('#confirm-password');
const checkForm = document.querySelector('#check');
const form = document.querySelector('#register');
const submitBtn = document.querySelector('.btn');
const resultField = document.querySelector('#result');

const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const validEmail = /\S+@\S+\.\S+/;
const validUsername = /^[a-zA-Z0-9]+$/;
let validForm = true;

const User = (name, email, password) => (
  {
    username: name,
    email: email,
    password: password,
  }
)

const passwordCheck = () => {
  validForm = validForm && (passwordForm.value === confirmForm.value) && (passwordForm.value.match(validPassword));
}

const usernameCheck = () => {
  validForm = validForm && usernameForm.value.match(validUsername);
}

const emailCheck = () => {
  validForm = validForm && emailForm.value.match(validEmail);
}

form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      passwordCheck();
      usernameCheck();
      emailCheck();
      if ((!validForm || !checkForm.checked)) {
        resultField.textContent = `Error: Incorrect`;
        validForm = true;
        return false;
      }

      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(User(usernameForm.value, emailForm.value, passwordForm.value)),
      });

      submitBtn.textContent = '';
      submitBtn.insertAdjacentHTML('beforeend', '<span class="spinner-border spinner-border-sm" ' +
        'role="status" aria-hidden="true"></span>\n  Loading...');

      const {id} = await response.json();
      const user = await fetch(`http://localhost:4000/post/${id}`);
      const {username} = await user.json();

      submitBtn.innerHTML = 'Submit';

      resultField.textContent = `Hello, ${username}`;
    } catch (err) {
      resultField.textContent = `Error 503`;
      submitBtn.innerHTML = 'Submit';
      throw new Error(err);
    }
  }
);
