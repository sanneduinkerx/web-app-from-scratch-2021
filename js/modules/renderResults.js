// function which shows the results from the user search
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