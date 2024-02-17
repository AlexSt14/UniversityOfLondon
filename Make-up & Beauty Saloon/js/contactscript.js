//Removing g-4 class from contact element
let contactDiv = document.getElementsByClassName("contact-div")[0];
if (window.innerWidth <= 600) {
    contactDiv.classList.remove("g-4");
}
//This ensures if the page on a desktop is resized to a mobile size, it will remove g-4 class
window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    if (windowWidth <=600) {
        contactDiv.classList.remove("g-4");
    }
    else {
        contactDiv.classList.add("g-4");
    }
})