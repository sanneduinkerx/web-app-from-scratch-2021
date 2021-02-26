// fetching api with given URL 
export function getApiData(url) {

    // getting the data with fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(url)
        .then(response => response.json())
        // if url doesnt match or couldnt fetch api it sends an error message
        .catch((err) => console.log('error')); 
 };
