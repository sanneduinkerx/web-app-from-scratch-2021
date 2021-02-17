import { searchArtist } from './modules/search.js';
import { router } from './modules/routes.js';

function start() {
    const searchResult = searchArtist();
}

function router() {
    routie('album/:albumName', function(albumName){
        console.log(albumName);
    });
}

start();
router();

