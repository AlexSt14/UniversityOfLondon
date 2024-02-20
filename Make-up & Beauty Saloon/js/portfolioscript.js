//Homepage MAIN carousel/slideshow
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Dots image controls
function slideSelected(n) {
    showSlides(slideIndex = n);
}

//Automatically moving the slide every interval of time
let slideInterval = setInterval(function() {
    showSlides(slideIndex += 1);
},4000)

//Function will display slides, hide other slides, remove active class from dots
function showSlides(n) {
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
}

//Opening modal when user clicks on an image
let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
//Modal slideshow index
let modalIndex = 1;
modalShowSlides(modalIndex);

//Function to open the modal when image is clicked, will also update the index of the clicked image for the slideshow
function openModal(n) {
    console.log(n);
    modalIndex = n;
    console.log(modalIndex);
    modalShowSlides(modalIndex);
    myModal.show();
}

//Next/previous controls
function ModalPlusSlide(n) {
    modalShowSlides(modalIndex += n);
}

//Function to show the modal slides while hiding the unnecessary ones that were previously displayed
function modalShowSlides(n) {
    let slides = document.getElementsByClassName("modal-slide");
    
    if (n > slides.length) {modalIndex = 1};
    if (n < 1) {modalIndex = slides.length};
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[modalIndex-1].style.display = "block";
}