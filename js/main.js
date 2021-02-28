import { detailPage } from './modules/renderDetail.js';
import { searchArtist } from './modules/search.js';

router();

function router() {
    routie ('', searchArtist())
    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    routie ('album/:albumName', detailPage);  
};


