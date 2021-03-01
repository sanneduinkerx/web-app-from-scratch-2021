// imported modules
import { detailPage } from './modules/detailPage.js';
import { searchArtist } from './modules/search.js';

//routie tiny hash router - to make routes for starting page and detailpage 
routie({
    '': searchArtist(),
    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    'album/:albumName/:artist': detailPage
});
