// imported modules
import { getApiData } from './api.js';
import { showResults } from './render.js';
import {dataNotFound} from './states.js';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input'); 
const section = document.querySelector('section');
const header = document.querySelector('header');

// url + API Key - LastFM 
const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';
let artistName;

//when user searches with a keyword for a specific artist, this function runs
function searchArtist() {
    // eventlistener on form, when searching a keyword
    searchForm.addEventListener('submit', search);
};

// async function when user searches for an artist
async function search(e){
    // e is the event, this time the submit event when user pushed button or enter when typing in keyword
    e.preventDefault();
    //  html section is empty to put new content in if user searches for another artist without refreshing
    section.innerHTML = '';

    // the method to see what kind of json to get
    const method = 'artist.gettopalbums'; 

    artistName = searchInput.value;
    // in the url the artists value is de input that the user searched for, and the method is given with the function (artist.getTopAlbums)
    const url = `${endpoint}${method}&artist=${artistName}&api_key=${apiKey}&format=json`; 

    // try.. catch for error message if promise gives an error
    try{
        // awaits until data is available, then filters then runs function showResults()
        const apiData = await getApiData(url);

        //filter apiData
        //object.values, source: https://stackoverflow.com/questions/55458675/filter-is-not-a-function
        const filteredData = Object.values(apiData.topalbums.album).filter(noImg => noImg.image[3]['#text'] != "");
        showResults(filteredData, section);

        section.classList.remove('error');
    } catch (error) {
        dataNotFound(section);
    } 

    // search input empty, so that user can search a different artist immediatly when he/she wants
    searchInput.value = '';
    //class remove from header, search input is smaller and different layout when shown results
    header.classList.remove('searchForm');
    //if there's a class .albuminfo in section it gets removed
    section.classList.remove('Albuminfo');
};

// exporting function and variables needed in other modules
export {searchArtist, endpoint, apiKey, section, header, artistName };
