// ---------------------------------- API ophalen -------------------------- //
// var request = new XMLHttpRequest();

// //var waarin de url van de API staat
// var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=queen&api_key=9445b881096d29d7c6de9f9d2eb6b50d&format=json';

// request.open('GET', url, true);

// request.onload = ( topAlbums => {
//     var data = JSON.parse(request.response);
//     loadingData(data);
//     console.log(data);
// });

// request.send();

// function loadingData(data) {
//     var p = document.querySelector('p');
//     p.textContent = data.topalbums.album[1].name;

// };
var request = new XMLHttpRequest();
var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=queen&api_key=9445b881096d29d7c6de9f9d2eb6b50d&format=json';

var body = document.querySelector('body');
var article = document.createElement('article');
var p = document.createElement('p');
var img = document.createElement('img');

request.open('GET', url, true);
request.send();


request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);

    p.textContent = data.topalbums.album[0].name;
    img.src = data.topalbums.album[0].image[3]['#text'];
    body.appendChild(article);
    article.appendChild(img);
    article.appendChild(p);
};











