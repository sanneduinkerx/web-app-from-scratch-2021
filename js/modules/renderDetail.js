import { getApiData } from './api.js';
import { endpoint, apiKey, section, searchInput} from './search.js';

export function detailPage(albumName) {

    const artistName = searchInput.value;
    const methodGetinfo = 'album.getinfo'; 
    const urlAlbumInfo = `${endpoint}${methodGetinfo}&api_key=${apiKey}&artist=${artistName}&album=${albumName}&format=json`; 

    console.log(urlAlbumInfo);
    section.innerHTML = ''; 

    getApiData(urlAlbumInfo)
        .then(data => {render(data)})
};

function render(data){
    console.log(data);

    // create elements
    const p = document.createElement('p');
    const cover = document.createElement('img');
    const title = document.createElement('h1');
    const div = document.createElement('div');

    // fill elements with content from API
    section.classList.add('Albuminfo');
    p.textContent = data.album.wiki.content;
    cover.src = data.album.image[4]['#text'];
    title.textContent = `${data.album.artist} - ${data.album.name}`;

    // append to html elements
    section.appendChild(div);
    div.appendChild(title);
    div.appendChild(cover);
    div.appendChild(p);
};