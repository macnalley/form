document.documentElement.className = "light";

const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', setTheme);

function setTheme(e) {
    const root = document.documentElement;
    root.className = e.target.textContent.toLowerCase();

    themeToggle.textContent = themeToggle.textContent === 'Dark' ? 'Light' : 'Dark'; 
}

