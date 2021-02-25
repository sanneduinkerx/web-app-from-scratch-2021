// function which shows the results from the user search
export function showResults(data, section, artistName){

    const topAlbum = data.topalbums.album;
    const searchResult = document.createElement('p');

    // feedback for user, knows where he/she searched for
    searchResult.textContent = `Showing results for '${artistName}'`; 
    section.appendChild(searchResult);

    // for each album, an article with the name and album image from the API
    topAlbum.forEach(function (loading) {

        // creating elements in HTML doc for the data  
        const article = document.createElement('article');
        const link = document.createElement('a');
        const p = document.createElement('p');
        const img = document.createElement('img');

        // filling source image and paragraph with name of album and image of album + link has an href with the album neem #album
        link.href = `#album/${loading.name}`; 
        p.textContent = loading.name;
        img.src = loading.image[3]['#text'];

        // appending elements in html
        section.appendChild(article);
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(p);
    });
}