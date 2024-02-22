//Removing g-4 class from contact element, this is needed for mobile view, once bootstrap cards move one under each other
//it will remove any spacing between them
//Firstly getting the width of the window and then getting the first element of the div with the relevant class name
let contactDiv = document.getElementsByClassName("contact-div")[0];
//This ensures if the page is loaded on a mobile, it will remove g-4 class
if (window.innerWidth <= 800) {
    contactDiv.classList.remove("g-4");
}
//This ensures if the page on a desktop is resized to a mobile size, it will remove g-4 class
window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 800) {
        contactDiv.classList.remove("g-4");
    }
    else {
        contactDiv.classList.add("g-4");
    }
})