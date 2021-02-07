// ---------------------------------- API ophalen -------------------------- //

// Feedback: zet comments neer voor eigen duidelijkheid, niet in onload data meteen erin, fetch beter dan XML request, gebruik endpoint, consistent! 

const request = new XMLHttpRequest(); 

//url with values method, artist and API key
const endpoint = 'https://ws.audioscrobbler.com/2.0/?method='
const method = 'artist.gettopalbums'
const artist = 'acdc'
const apiKey = '9445b881096d29d7c6de9f9d2eb6b50d'
const url = `${endpoint}${method}&artist=${artist}&api_key=${apiKey}&format=json`

const body = document.querySelector('body');

request.open('GET', url, true);
request.send();

request.onload = function() {
    const data = JSON.parse(this.response);
    console.log(data);

    //if/else http request didnt work error message, source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
    if(request.status >= 200 && request.status < 400){

        data.topalbums.album.forEach(function (loading) {
                const article = document.createElement('article');
                const p = document.createElement('p');
                const img = document.createElement('img');

                p.textContent = loading.name;
                img.src = loading.image[3]['#text'];

                body.appendChild(article);
                article.appendChild(img);
                article.appendChild(p);
            });
    } else{
        console.log('error');
    };
};














