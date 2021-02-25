import { detailPage } from './renderDetail.js';
import { searchArtist } from './search.js';

export function router() {
    routie ('', searchArtist());   
    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    routie ('album/:albumName', detailPage);   
};



