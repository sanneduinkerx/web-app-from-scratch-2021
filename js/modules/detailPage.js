//imported functions from modules
import { fetchData } from './api.js';
import { dataNotFound, loading } from './states.js';
import { renderDetailPage } from './render.js'
//imported variables from module
import { endpoint, apiKey, section, header } from './search.js';

// async function fetching detail Page info, with the parameter albumName 
export async function detailPage(albumName, artist) {

    // section empty, so the new content with details can get in
    section.innerHTML = ''; 
    header.classList.remove('searchForm');

    // new methode in URL to get data
    const methodGetinfo = 'album.getinfo'; 
    //URL to fetch 
    const urlAlbumInfo = `${endpoint}${methodGetinfo}&api_key=${apiKey}&artist=${artist}&album=${albumName}&format=json`; 

    //fetch api data, details from an album, try/catch when api couldnt get fetched error messages gets shown
    try{
        loading();
        const apiData =  await fetchData(urlAlbumInfo);
        renderDetailPage(apiData, section);
    } catch (error) {
        //if there was an error in the promise the following function gets called with an error message
        dataNotFound(section);
    } 
};