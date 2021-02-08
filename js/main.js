// selecting elements in DOM
const searchInput = document.querySelector('input'); 
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

// eventlistener on form, when searching a keyword
searchForm.addEventListener('submit', (e) => {
    // e is the event, this time the submit event when user pushed button or enter when typing in keyword
    e.preventDefault(); 
    section.innerHTML = ''; // so that the html section is empty to put new content in if user searches for another artist without refreshing
    getData(); // the keyword typed into the input field by the user, also known as an artist name 
});



// activated when user searchs a specific artist in input form
function getData() {

    // url api
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
    const method = 'artist.gettopalbums'; // method api is the top albums from an specific artist
    const artist = searchInput.value; // the searched keyword the user typed into the input field
    const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';
    const url = `${endpoint}${method}&artist=${artist}&api_key=${apiKey}&format=json`; // in the url the artists value is de input that the user searched for

    // getting the data with fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showResults(data);
        })
        .catch((err) => console.log('error')); // if url or api doesnt work it sends
    
};


// function which shows the results from the user search
function showResults(data){

    const topAlbum = data.topalbums.album;
    const searchResult = document.createElement('p');

    searchResult.textContent = `Showing results for '${searchInput.value}'`; // feedback for user, knows where he/she searched for
    section.appendChild(searchResult);

    // for each album, an article with the name and album image from the API
    topAlbum.forEach(function (loading) {

        // creating elements in HTML doc for the data  
        const article = document.createElement('article');
        const p = document.createElement('p');
        const img = document.createElement('img');

        // filling source image and paragraph with name of album and image of album
        p.textContent = loading.name;
        img.src = loading.image[3]['#text'];

        // appending elements in html
        section.appendChild(article);
        article.appendChild(img);
        article.appendChild(p);
    });

    searchInput.value = ''; //input field empty after loading data
}





