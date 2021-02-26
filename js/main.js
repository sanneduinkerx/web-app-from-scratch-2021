import { detailPage } from './modules/renderDetail.js';
import { searchArtist } from './modules/search.js';

function router() {

    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    routie ('album/:albumName', detailPage);   
};

router();

