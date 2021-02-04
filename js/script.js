// ---------------------------------- API ophalen -------------------------- //

var request = new XMLHttpRequest();
var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=acdc&api_key=9445b881096d29d7c6de9f9d2eb6b50d&format=json';
var body = document.querySelector('body');

request.open('GET', url, true);
request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);

    //if/else http request didnt work error message, source: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
    if(request.status >= 200 && request.status < 400){

        // erg nested... :/
        data.topalbums.album.forEach((loading) => {
            var article = document.createElement('article');
            var p = document.createElement('p');
            var img = document.createElement('img');

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














