// ---------------------------------- API ophalen -------------------------- //

//var waarin de url van de API staat
var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=queen&api_key=9445b881096d29d7c6de9f9d2eb6b50d&format=json';

var request = new XMLHttpRequest();

request.open('GET', url, true);
request.send();

// request.onload = function () {
//     var data = request.response; //var aanmaken titles die wacht op aanvraag van de json file
//     console.log(data);
// }; 

// met arrow functie 
request.onload = ( topAlbums => {
    var data = JSON.parse(request.response);
    var p = document.querySelector('p');

    console.log(data);
    
    p.textContent = data.topalbums.album[1].name;
   
});








