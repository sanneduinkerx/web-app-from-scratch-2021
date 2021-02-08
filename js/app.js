
// selecting elements in DOM
const searchInput = document.querySelector('input'); 
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

// eventlistener on form, when searching a keyword: source, Victor Boucher and Lisa Oude Elferink
searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // search meaning
    fetchAlbums(searchInput.value); // the keyword typed into the input field by the user, the artist
});

function fetchAlbums(searchKeyword) {

    // url api
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
    const method = 'artist.gettopalbums';
    const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';
    const url = `${endpoint}${method}&artist=${searchKeyword}&api_key=${apiKey}&format=json`; // in the url the artists value is de input that the user searched for

    // getting the data with fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderHTML(data);
        });
};

function renderHTML(data){

    data.topalbums.album.forEach(function (loading) {

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
    
}





