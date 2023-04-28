


const useDark = window.matchMedia('(prefers-color-scheme: dark)');
let darkModeState = true;

function toggleDarkMode(state) {
  document.documentElement.classList.toggle('dark-mode', state);
}

toggleDarkMode(darkModeState);

useDark.addEventListener('change', (evt) => {
  darkModeState = evt.matches;
  toggleDarkMode(darkModeState);
});
