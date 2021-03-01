//error state - when there is no data to be shown
export function dataNotFound(section){
    // creating elements for error message
    const heading = document.createElement('h1');
    const errorMessage = document.createElement('p');

    //adding class for styling in css
    section.classList.add('error');

     //filling elements with content feedback to the user
    heading.textContent = "We're sorry!"
    errorMessage.textContent = "We couldn't find the information you were looking for 😞. Maybe try a different one.";

    //append to elements
    section.appendChild(heading);
    section.appendChild(errorMessage);
}

//loading state when url is being fetched
export function loading(){
    console.log('loading');
}