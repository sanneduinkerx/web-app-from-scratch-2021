// fetching api with given URL 
export async function getApiData(url) {

    // getting the data with fetch
    //source: https://stackoverflow.com/questions/59394620/why-fetch-returns-promise-pending
    // let: because data changes when given a different URL
    // await: waits until data is fetched 
    let apiData = await fetch(url)
        //then does the next thing and says that it is a json file
        .then(response => response.json())

    // returns the fetched data
    return apiData;
 };
