//error state - when there is no data to be shown
export function dataNotFound(section){
    const heading = document.createElement('h1');
    const errorMessage = document.createElement('p');

    section.classList.add('error');
    heading.textContent = "We're sorry!"
    errorMessage.textContent = "We couldn't find the information you were looking for 😞. Maybe try a different one.";

    section.appendChild(heading);
    section.appendChild(errorMessage);
}