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
function openModal() {
    //getting the data-image from the clicked card
    let imageSrc = event.target.closest(".card").getAttribute("data-image");
    //getting the modal element
    let modal = document.getElementById("staticBackdrop");
    //getting the img element inside the modal
    let modalImage = modal.querySelector("img");
    //setting the img src from the modal to correct data-image the got earlier
    modalImage.src = imageSrc
    myModal.show();
}
