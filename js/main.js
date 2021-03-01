import { detailPage } from './modules/detailPage.js';
import { searchArtist } from './modules/search.js';

router();

//router function for the different
function router() {
    routie ('', searchArtist());
    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    routie ('album/:albumName', detailPage);  
};


