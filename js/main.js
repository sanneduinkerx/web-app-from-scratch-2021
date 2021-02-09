import { getData } from './modules/api.js';
import { showResults } from './modules/render.js';

// selecting elements in DOM
const searchInput = document.querySelector('input'); 
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

// eventlistener on form, when searching a keyword
searchForm.addEventListener('submit', (e) => {
    // e is the event, this time the submit event when user pushed button or enter when typing in keyword
    e.preventDefault(); 
    section.innerHTML = ''; // so that the html section is empty to put new content in if user searches for another artist without refreshing
    const data = getData(searchInput.value); // the keyword typed into the input field by the user, also known as an artist name 
    showResults(data, section);
});




