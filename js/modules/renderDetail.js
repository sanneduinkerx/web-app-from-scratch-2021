import { getApiData } from './api.js';

const section = document.querySelector('section');
const searchInput = document.querySelector('input'); 

const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';

export function detailPage(albumName) {
    const artistName = searchInput.value;
    const method = 'album.getinfo'; 
    const url = `${endpoint}${method}&api_key=${apiKey}&artist=${artistName}&album=${albumName}&format=json`; 

    console.log(url);
    section.innerHTML = ''; 

    getApiData(url).then(data => {            
        render(data);
    });
};

function render(data){
    console.log(data);
}