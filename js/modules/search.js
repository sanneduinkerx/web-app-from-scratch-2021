// import actor api.js, to call function
import { getApiData } from './api.js';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input'); 
const section = document.querySelector('section');
const header = document.querySelector('header');

// url + API Key - LastFM 
const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';
const method = 'artist.gettopalbums'; 

//when user searches with a keyword for a specific artist, this function runs
export function searchArtist() {
 
    // eventlistener on form, when searching a keyword
    searchForm.addEventListener('submit', function search(e) {
            // e is the event, this time the submit event when user pushed button or enter when typing in keyword
            e.preventDefault();

            // the artist name the user searches for
            const artistName = searchInput.value;
            // in the url the artists value is de input that the user searched for, and the method is given with the function (artist.getTopAlbums)
            const url = `${endpoint}${method}&artist=${artistName}&api_key=${apiKey}&format=json`; 

            //  html section is empty to put new content in if user searches for another artist without refreshing
            section.innerHTML = ''; 

            // the keyword typed into the input field by the user, also known as an artist name 
            getApiData(url, section, artistName); 

            // input field will be empty after searching for artist
            searchInput.value = '';  

            //class remove from header
            header.classList.remove('searchForm');
        
        });
}