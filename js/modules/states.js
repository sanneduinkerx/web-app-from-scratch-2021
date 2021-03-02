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
    //adding class to the loading div to trigger loading state
    const divLoading = document.querySelector('body > div');
    divLoading.classList.add('loadingState'); 

    //setTimeout, after 800ms classlist is removed: loading state is removed after 800ms
    setTimeout(function loadingOff(){
        divLoading.classList.remove('loadingState');  
    }, [800]);
}