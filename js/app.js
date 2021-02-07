// ---------------------------------- API ophalen -------------------------- //

// Feedback: zet comments neer voor eigen duidelijkheid, niet in onload data meteen erin, fetch beter dan XML request, write separate functions not in onload 

const request = new XMLHttpRequest(); 

//url with values method, artist and API key
const endpoint = 'https://ws.audioscrobbler.com/2.0/?method=';
const method = 'artist.gettopalbums';
let artist = 'acdc'; // let, because later on the value can change to a different artist on request from user
const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d';
let url = `${endpoint}${method}&artist=${artist}&api_key=${apiKey}&format=json`; // let because values change within url later

const body = document.querySelector('body');

request.open('GET', url, true);
request.send();

request.onload = function() {
    const data = JSON.parse(this.response);
    console.log(data);
    
    retrieveData(data);
};

// Render loaded data in HTML elements with function

function retrieveData(data){

    //if https request didnt work error message, source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

    if(request.status >= 200 && request.status < 400){

        data.topalbums.album.forEach(function (loading) {

                // creating elements in HTML doc for the data  
                const article = document.createElement('article');
                const p = document.createElement('p');
                const img = document.createElement('img');

                // filling source image and paragraph with name of album and image of album
                p.textContent = loading.name;
                img.src = loading.image[3]['#text'];

                // appending elements in html
                body.appendChild(article);
                article.appendChild(img);
                article.appendChild(p);
            });
    } else{
        // if something went wrong to load data you get an error message
        console.log('error');
    };

};