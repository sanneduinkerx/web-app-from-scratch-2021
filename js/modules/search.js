// imported modules
import { getApiData } from './api.js';
import { showResults } from './render.js';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input'); 
const section = document.querySelector('section');

// url + API Key - LastFM 
const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';

//JSON.parse(localStorage.getItem('artist')) tp check if maybe there are already strings in the array
let artistNameStorage = JSON.parse(sessionStorage.getItem('artist')) || [];
let artistName;

//when user searches with a keyword for a specific artist, this function runs
function searchArtist() {

    // eventlistener on form, when searching a keyword
    searchForm.addEventListener('submit', async function search(e) {
            // e is the event, this time the submit event when user pushed button or enter when typing in keyword
            e.preventDefault();

            const header = document.querySelector('header');
            // the method to see what kind of json to get
            const method = 'artist.gettopalbums'; 
            // the artist name the user searches for
            artistName = searchInput.value;

            // pushing artist the user searches for in array: unshift, pushes it in the beginning
            artistNameStorage.unshift(searchInput.value);
            // learned from course 30 day challenge Javascript - day 15 Local storage courses.wesbos.com
            sessionStorage.setItem('artist', JSON.stringify(artistNameStorage));

            console.log(artistName);
            // in the url the artists value is de input that the user searched for, and the method is given with the function (artist.getTopAlbums)
            const url = `${endpoint}${method}&artist=${artistName}&api_key=${apiKey}&format=json`; 

            // awaits until data is available, then runs function showResults()
            const apiData = await getApiData(url);
         
            console.log(apiData);

            //  html section is empty to put new content in if user searches for another artist without refreshing
            section.innerHTML = '';

            //filter apiData
            //object.values, source: https://stackoverflow.com/questions/55458675/filter-is-not-a-function
            const filteredData = Object.values(apiData.topalbums.album).filter(noImg => noImg.image[3]['#text'] != "");
            showResults(filteredData, section);
            
            //class remove from header, search input is smaller and different layout when shown results
            header.classList.remove('searchForm');
            //if there's a class .albuminfo in section it gets removed
            section.classList.remove('Albuminfo');
            section.classList.remove('error');
        });
}

// exporting function and variables needed in other modules
export {searchArtist, endpoint, apiKey, section, artistName};
