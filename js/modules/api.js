import { showResults } from './render.js';

// activated when user searchs a specific artist in input form
export function getApiData(artistName, method, section) {

    // url + API Key - LastFM 
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
    const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';

    // in the url the artists value is de input that the user searched for, and the method is given with the function (artist.getTopAlbums)
    const url = `${endpoint}${method}&artist=${artistName}&api_key=${apiKey}&format=json`; 

    // getting the data with fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(url)
        .then(response => response.json())
        .then(data => {            
            console.log(data);
            showResults(data, section, artistName);
        })
        // if url or api doesnt work it sends
        .catch((err) => console.log('error')); 
 };
