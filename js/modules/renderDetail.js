//imported modules
import { getApiData } from './api.js';
import { endpoint, apiKey, section, artistName} from './search.js';
import { dataNotFound } from './states.js';

// async function fetching detail Page info, with the parameter albumName 
export async function detailPage(albumName) {

    //if artistName is empty then nothing
    if(artistName != ""){
        // new methode in URL to get json
        const methodGetinfo = 'album.getinfo'; 
        //URL to fetch 
        const urlAlbumInfo = `${endpoint}${methodGetinfo}&api_key=${apiKey}&artist=${artistName}&album=${albumName}&format=json`; 

        console.log(urlAlbumInfo);
        // section empty, so the new content with details can get in
        section.innerHTML = ''; 

        //fetch api data, details from an album
        const apiData = await getApiData(urlAlbumInfo);
        
        // if/else statement for error message if some data is missing and de wiki is undefined then the function dataNotFound wil run
        if(apiData.album.wiki == undefined){
            dataNotFound(section);
        } else{
            renderDetailPage(apiData);
        };
    } 
};

//rendering detail page 
function renderDetailPage(data){

    // create elements
    const title = document.createElement('h1');
    const div = document.createElement('div');
    const cover = document.createElement('img');
    const listeners = document.createElement('p');
    const playcount = document.createElement('p');
    const summary = document.createElement('p');
    const a = document.createElement('a');

    // splitting and retrieving pieces from string //
    // source: https://www.w3schools.com/js/js_string_methods.asp
    const summaryText = data.album.wiki.summary;

    //finding the position where the link element starts in string summary 
    const linkPosition = summaryText.lastIndexOf("<a href");

    const summaryStr = summaryText.substr(0,linkPosition);
    const linkStr = summaryText.substr(linkPosition);

    //split the retrieved link in 3 with " - to get de a href link and text content from a href
    const stringArray = linkStr.split('"');
    const link2Position = stringArray[2].indexOf("</a>");
    const linkTxt = stringArray[2].substr(1, link2Position - 1);
    
    // fill elements with the string content retrieved above
    summary.textContent = summaryStr;
    a.href = stringArray[1];
    a.textContent = linkTxt;

    // fill elements with content from API
    section.classList.add('Albuminfo');
    title.textContent = `${data.album.artist} - ${data.album.name}`;
    cover.src = data.album.image[4]['#text'];
    listeners.textContent = `Listeners: ${data.album.listeners}`;
    playcount.textContent = `Playcount: ${data.album.playcount}`;

    // append to html elements
    section.appendChild(title);
    section.appendChild(div);
    div.appendChild(cover);
    div.appendChild(listeners);
    div.appendChild(playcount);
    div.appendChild(summary);
    summary.appendChild(a);
};