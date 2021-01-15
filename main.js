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
      console.log(new Error('Incorrect'));
      validForm = true;
    } else {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(User(usernameForm.value, emailForm.value, passwordForm.value))
      });
      const {data} = await response.json();
      const userdata = JSON.parse(data);

      document.body.insertAdjacentHTML('beforeend', `<p>Hello, ${userdata['username']}</p>`);
    }
  } catch (err) {
    throw new Error(err);
  }
});
