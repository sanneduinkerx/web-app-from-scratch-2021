import { showResults } from './renderResults.js';
import {section} from './search.js';

export function filter(apiData) {
    //object.values, source: https://stackoverflow.com/questions/55458675/filter-is-not-a-function
    const filteredData = Object.values(apiData.topalbums.album).filter(noImg => noImg.image[3]['#text'] != "");
    showResults(filteredData, section);
}