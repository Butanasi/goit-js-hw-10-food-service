


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const inputEl = document.querySelector('input');

const bodyEl = document.querySelector('body');



inputEl.addEventListener('change', onColorPg)
savedColorPg()

function onColorPg(e) {
    const value = e.target.checked;
    if (value === true) {
        bodyEl.classList.remove(`${Theme.LIGHT}`)
        bodyEl.classList.add(`${Theme.DARK}`)
        localStorage.setItem('color', 'DARK')
    } else {
        bodyEl.classList.remove(`${Theme.DARK}`)
        bodyEl.classList.add(`${Theme.LIGHT}`)
        localStorage.setItem('color', 'LIGHT')
    }
}

function savedColorPg() {
    const saveColor = localStorage.getItem('color')
    
    if (saveColor === 'DARK') {
        bodyEl.classList.add(`${Theme.DARK}`)
        inputEl.checked = true
    } else {
        bodyEl.classList.add(`${Theme.LIGHT}`)
        inputEl.checked = false
    }
}