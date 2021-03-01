// fetching api with given URL 
export async function getApiData(url) {

    // getting the data with fetch
    //source: https://stackoverflow.com/questions/59394620/why-fetch-returns-promise-pending
    // let: because data changes when given a different URL
    // await:
    let apiData = await fetch(url)
        .then(response => response.json())

    return apiData;
 };
