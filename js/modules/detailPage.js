//imported modules
import { getApiData } from './api.js';
import { endpoint, apiKey, section, header} from './search.js';
import { dataNotFound } from './states.js';
import { renderDetailPage } from './render.js'

// async function fetching detail Page info, with the parameter albumName 
export async function detailPage(albumName) {

    // section empty, so the new content with details can get in
    section.innerHTML = ''; 
    header.classList.remove('searchForm');

    //getting array from session storage
    const artistName = JSON.parse(sessionStorage.getItem('artist'));

    // new methode in URL to get json
    const methodGetinfo = 'album.getinfo'; 
    //URL to fetch 
    const urlAlbumInfo = `${endpoint}${methodGetinfo}&api_key=${apiKey}&artist=${artistName[0]}&album=${albumName}&format=json`; 

    //fetch api data, details from an album, try/catch when api couldnt get fetched error messages gets shown
    try{
        const apiData =  await getApiData(urlAlbumInfo);
        renderDetailPage(apiData, section);
    } catch (error) {
        dataNotFound(section);
    }

};