export function router() {

    // when the user clicks on an album and the window browser has an #album/albumName, that function gets called.
    routie('album/:albumName', function(albumName){
        console.log(albumName);
    });
};
