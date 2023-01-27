// Theme toggle

document.documentElement.className = "light";

const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', setTheme);

function setTheme(e) {
    const root = document.documentElement;
    root.className = e.target.textContent.toLowerCase();

    themeToggle.textContent = themeToggle.textContent === 'Dark' ? 'Light' : 'Dark'; 
}

// Password confirmation

const passwords =document.querySelectorAll('.password');

const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');


passwords.forEach(el => el.addEventListener('input', checkPasswords));

function checkPasswords(e) {
    if (passwordInput.value === '' || passwordConfirmInput.value === '')
    {
        return;
    }
    else if (passwordInput.value === passwordConfirmInput.value)
    {
        passwords.forEach(el => el.setCustomValidity(''));
        passwords.forEach(el => {
            el.classList.remove('error');
            el.parentElement.classList.remove('error');
        });

    } else {
        passwords.forEach(el => el.setCustomValidity('Passwords must match.'));
        passwords.forEach(el => {
            el.classList.add('error');
            el.parentElement.classList.add('error');
        });
    }
}