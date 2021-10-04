import markupTemplay from '../templates/markup-templay.hbs';
import elements from '../menu.json';
markupTemplay(elements)

const ulEl = document.querySelector('.js-menu')

ulEl.insertAdjacentHTML('beforeend', markupTemplay(elements))

