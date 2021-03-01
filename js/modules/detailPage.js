//imported modules
import { getApiData } from './api.js';
import { endpoint, apiKey, section, artistName} from './search.js';
import { dataNotFound } from './states.js';
import { renderDetailPage } from './render.js'

// async function fetching detail Page info, with the parameter albumName 
export async function detailPage(albumName) {

    // section empty, so the new content with details can get in
    section.innerHTML = ''; 

    //getting array from session storage
    const artistName1 = JSON.parse(sessionStorage.getItem('artist'));
    console.log(artistName1[0]);

    // new methode in URL to get json
    const methodGetinfo = 'album.getinfo'; 
    //URL to fetch 
    const urlAlbumInfo = `${endpoint}${methodGetinfo}&api_key=${apiKey}&artist=${artistName1[0]}&album=${albumName}&format=json`; 
    console.log(urlAlbumInfo);
        //fetch api data, details from an album
    const apiData = await getApiData(urlAlbumInfo);
        
    // if/else statement for error message if some data is missing and de wiki is undefined then the function dataNotFound wil run
    if(apiData.album.wiki == undefined){
        dataNotFound(section);
    } else{
        renderDetailPage(apiData, section);
        console.log(apiData);
    };
    // } 
    
};