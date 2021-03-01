import { detailPage } from './modules/detailPage.js';
import { searchArtist } from './modules/search.js';

routie({
    '': searchArtist(),
    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    'album/:albumName/:artist': detailPage
});





