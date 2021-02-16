// import actor api.js, to call function
import { getApiData } from './api.js';

//when user searches with a keyword for a specific artist, this function runs
export function searchArtist() {
    
    const searchForm = document.querySelector('form');
    const section = document.querySelector('section');
    const searchInput = document.querySelector('input'); 
    const method = 'artist.gettopalbums'; 
 
    // eventlistener on form, when searching a keyword
    searchForm.addEventListener('submit', function search(e) {
            // e is the event, this time the submit event when user pushed button or enter when typing in keyword
            e.preventDefault();

            //  html section is empty to put new content in if user searches for another artist without refreshing
            section.innerHTML = ''; 

            // the keyword typed into the input field by the user, also known as an artist name 
            getApiData(searchInput.value, method, section); 

            // input field will be empty after searching for artist
            searchInput.value = '';  

            //class remove from header 
            const header = document.querySelector('header');
            header.classList.remove('searchForm');

            // return data;          
        });
}