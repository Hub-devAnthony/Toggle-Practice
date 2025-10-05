const toggleButton = document.querySelector('.toggle-button');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.toggle('dark', savedTheme === 'dark');
  themeIcon.src = savedTheme === 'dark' ? 'images/sun-color-icon.svg' : 'images/night-icon.svg';
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    themeIcon.src = 'images/sun-color-icon.svg';
  } else {
    themeIcon.src = 'images/night-icon.svg';
  }
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeIcon.src = 'images/sun-color-icon.svg';
  } else {
    themeIcon.src = 'images/night-icon.svg';
    localStorage.setItem('theme', 'light');
  }
});