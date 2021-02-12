import { showResults } from './render.js';

export function getApiData(artistName, section) {
    // activated when user searchs a specific artist in input form

    // url api
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
    const method = 'artist.gettopalbums'; // method api is the top albums from an specific artist
    // const artist = artistName; // the searched keyword the user typed into the input field
    const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';
    const url = `${endpoint}${method}&artist=${artistName}&api_key=${apiKey}&format=json`; // in the url the artists value is de input that the user searched for

    // getting the data with fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    return fetch(url)
        .then(response => response.json())
        .then(data => {            
            console.log(data);
            showResults(data, section, artistName);
        })
        .catch((err) => console.log('error')); // if url or api doesnt work it sends
 };
