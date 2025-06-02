const form = document.getElementById('loginForm');
const email = form.querySelector('.email');
const password = form.querySelector('.password');
const button = form.querySelector('.connexion');

function checkFields() {
  button.disabled = !(email.value && password.value);
}

email.addEventListener('input', checkFields);
password.addEventListener('input', checkFields);


document.querySelector('.connexion-frame').addEventListener('click', function(e) {
  const btn = this.querySelector('.connexion');
  if (!btn.disabled) {
    btn.click();
  }
});