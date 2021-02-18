import { showResults } from './render.js';

// activated when user searchs a specific artist in input form
export function getApiData(url, section, artistName) {

    // getting the data with fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(url)
        .then(response => response.json())
        .then(data => {            
            showResults(data, section, artistName);
        })
        // if url or api doesnt work it sends
        .catch((err) => console.log('error')); 
 };
