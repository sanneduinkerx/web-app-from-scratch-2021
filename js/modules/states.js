//error state - when there is no data to be shown, when promise returns an error
export function dataNotFound(section){
    // creating elements for error message
    const heading = document.createElement('h1');
    const errorMessage = document.createElement('p');

    //adding class for styling in css
    section.classList.add('error');

     //filling elements with content feedback to the user
    heading.textContent = "We're sorry!"
    errorMessage.textContent = "We couldn't find the information you were looking for 😞. Maybe try something else.";

    //append to elements
    section.appendChild(heading);
    section.appendChild(errorMessage);
}

//loading state when url is being fetched
export function loading(){

    const divLoading = document.querySelector('body > div');
    divLoading.classList.add('loadingState'); 

    //source: https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function loadingOff(){
        console.log('ello');
        divLoading.classList.remove('loadingState');  
    }, [800]);
}