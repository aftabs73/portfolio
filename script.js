const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Initial theme check
const currentTheme = 'dark';

function applyTheme(theme) {
    const body = document.body;

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        // Update icon to sun
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        // Update icon to moon
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Apply the initial theme on page load
applyTheme(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});