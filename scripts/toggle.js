const toggleButton = document.querySelector('.toggle-button');
const themeIcon = document.querySelector('.theme-icon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeIcon.src = 'images/6165787.png';
  } else {
    themeIcon.src = 'images/moon_891869.png';
  }
});