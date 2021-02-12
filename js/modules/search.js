import { getApiData } from './api.js';

export function search() {
    
    // eventlistener on form, when searching a keyword
    const searchForm = document.querySelector('form');
    const section = document.querySelector('section');
    const searchInput = document.querySelector('input'); 
 
    searchForm.addEventListener('submit', function search(e) {
            // e is the event, this time the submit event when user pushed button or enter when typing in keyword
            e.preventDefault();
            section.innerHTML = ''; // so that the html section is empty to put new content in if user searches for another artist without refreshing

            const data = getApiData(searchInput.value, section); // the keyword typed into the input field by the user, also known as an artist name 
            searchInput.value = '';  
            return data;          
        });
}