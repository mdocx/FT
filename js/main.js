/* ========== Navigation =========== */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});

/* ========== SignIn Form =========== */
const signInForm = document.querySelector("header .wrapper");

document.querySelector(".signin").onclick = () => {
  signInForm.classList.add("active");
};

document.querySelector(".close-form").onclick = () => {
  signInForm.classList.remove("active");
};



// script.js

const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    
    // Change button text based on the mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});




script.js

// Check local storage for dark mode preference
const currentMode = localStorage.getItem('darkMode');
if (currentMode === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');

    // Save the user's preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleButton.textContent = 'Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleButton.textContent = 'Dark Mode';
    }
});
