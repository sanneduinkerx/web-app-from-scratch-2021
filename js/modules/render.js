// rendering all albums from searched artist from user
export function showResults(filteredData, section){
    const searchResult = document.createElement('h1');

    // feedback for user, knows where he/she searched for
    searchResult.textContent = `Showing results for '${filteredData[0].artist.name}'`; 
    section.appendChild(searchResult);

    // for each album, an article with the name and album image from the API
    filteredData.forEach((albums) => {

            // creating elements in HTML doc for the data  
            const article = document.createElement('article');
            const link = document.createElement('a');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');

            // filling source image and paragraph with name of album and image of album + link has an href with the album neem #album
            // link from every article around an album, has its own link with the album name for the routie
            link.href = `#album/${albums.name}`;
            h2.textContent = albums.name;
            img.src = albums.image[3]['#text'];

            // appending elements in html
            section.appendChild(article);
            article.appendChild(link);
            link.appendChild(img);
            link.appendChild(h2);
        });
}

//rendering detail page 
export function renderDetailPage(data, section){

    // create elements
    const title = document.createElement('h1');
    const div = document.createElement('div');
    const divSongs = document.createElement('div');
    const listSongs = document.createElement('ul');
    const cover = document.createElement('img');
    const listeners = document.createElement('p');
    const playcount = document.createElement('p');
    const summary = document.createElement('p');
    const a = document.createElement('a');
    const tracks = document.createElement('h2');

    // splitting and retrieving pieces from string //
    // source: https://www.w3schools.com/js/js_string_methods.asp
    const summaryText = data.album.wiki.summary;

    //finding the position where the link element starts in string summary 
    const linkPosition = summaryText.lastIndexOf("<a href");

    const summaryStr = summaryText.substr(0,linkPosition);
    const linkStr = summaryText.substr(linkPosition);

    //split the retrieved link in 3 with " - to get de a href link and text content from a href
    const stringArray = linkStr.split('"');
    const link2Position = stringArray[2].indexOf("</a>");
    const linkTxt = stringArray[2].substr(1, link2Position - 1);
    
    // fill elements with the string content retrieved above
    summary.textContent = summaryStr;
    a.href = stringArray[1];
    a.textContent = linkTxt;

    // fill elements with content from API
    section.classList.add('Albuminfo');
    title.textContent = `${data.album.artist} - ${data.album.name}`;
    cover.src = data.album.image[4]['#text'];
    listeners.textContent = `Listeners: ${data.album.listeners}`;
    playcount.textContent = `Playcount: ${data.album.playcount}`;
    tracks.textContent = 'Tracks';

    // all the tracks from the album in a list item
    data.album.tracks.track.forEach((track) => {
        const li = document.createElement('li');
        li.textContent = track.name;
        listSongs.appendChild(li);
    });

    // append to html elements
    section.appendChild(title);
    section.appendChild(div);
    section.appendChild(divSongs);
    divSongs.appendChild(tracks);
    divSongs.appendChild(listSongs);
    div.appendChild(cover);
    div.appendChild(listeners);
    div.appendChild(playcount);
    div.appendChild(summary);
    summary.appendChild(a);
};