import { getApiData } from './api.js';
import { endpoint, apiKey, section, searchInput} from './search.js';

export async function detailPage(albumName) {

    //new method and artistName and new URL to get album details, 
    const artistName = searchInput.value;
    if(artistName != ""){
        const methodGetinfo = 'album.getinfo'; 
        const urlAlbumInfo = `${endpoint}${methodGetinfo}&api_key=${apiKey}&artist=${artistName}&album=${albumName}&format=json`; 

        console.log(urlAlbumInfo);
        section.innerHTML = ''; 

        //fetch api data, details from an album
        const apiData = await getApiData(urlAlbumInfo);
        
        if(apiData.album.wiki == undefined)  {
            dataNotFound();
        } else{
            renderDetailPage(apiData);
        }
    }
};

function renderDetailPage(data){
    // create elements
    const p = document.createElement('p');
    const cover = document.createElement('img');
    const title = document.createElement('h1');
    const div = document.createElement('div');
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
    p.textContent = summaryStr;
    a.href = stringArray[1];
    a.textContent = linkTxt;

    // fill elements with content from API
    section.classList.add('Albuminfo');
    cover.src = data.album.image[4]['#text'];
    title.textContent = `${data.album.artist} - ${data.album.name}`;

    // append to html elements
    section.appendChild(div);
    div.appendChild(title);
    div.appendChild(cover);
    div.appendChild(p);
    div.appendChild(a);
};

//error state - when there is no data to be shown
function dataNotFound(){
    const errorMessage = document.createElement('p');

    errorMessage.textContent = "We couldn't find any information about this album. Please try again later.";
    section.appendChild(errorMessage);
}