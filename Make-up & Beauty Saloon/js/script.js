//Slideshow code taken and modified from https://www.w3schools.com/howto/howto_js_slideshow.asp, I have modified this by also integrating setInterval 
//For a cool effect
//Short slideshow for testimonials Homepage
let slideIndexTestimonials = 1;
showSlidesTestimonials(slideIndexTestimonials);

//Dots selection control
function currentSlide(n) {
    showSlidesTestimonials(slideIndexTestimonials = n);
}

//Automatically moving the slide every interval of time
let slideInterval = setInterval(function() {
    plusSlidesTestimonials(1);
},5000);
function plusSlidesTestimonials(n) {
    showSlidesTestimonials(slideIndexTestimonials += n);
}

//Function will display current slide, hide other slides
function showSlidesTestimonials(n) {
    let slides = document.getElementsByClassName("my-slides-testimonials");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndexTestimonials = 1};
    if (n < 1) {slideIndexTestimonials = slides.length};
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexTestimonials-1].style.display = "block";
    dots[slideIndexTestimonials-1].className += " active";
}

//Removing g-4 class from homepage element, this is needed for mobile view, once bootstrap cards move one under each other
//it will remove any spacing between them
//Firstly getting the width of the window and then getting the first element of the div with the relevant class name
let testimonialsWidth = window.innerWidth;
let testimonialsDiv = document.getElementsByClassName("test-div")[0];
console.log(testimonialsDiv);
//This ensures if the page is directly loaded on a mobile or tablet, it will remove g-4 class
if (testimonialsWidth <= 900) {
    testimonialsDiv.classList.remove("g-4");
}
//This ensures if the page on a desktop is resized to a mobile size, it will remove g-4 class
window.addEventListener("resize", function() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 900) {
        testimonialsDiv.classList.remove("g-4");
    }
    else {
        testimonialsDiv.classList.add("g-4");
    }
})

//This small script will ensure that masonry is reloaded only after all images are loaded
//This is needed in order to prevent a bug in case images take longer to load and masonry places cards right under each other and when images load
//It looks like they overlap, by initializing masonry only after the page has loaded, we prevent this from happening
//It is especially needed for low end computers or when the page is uploaded to Coursera Static Pages because it is very slow and images take longer to load than any other pc I tested it on
//I am also using the imagesLoaded cdn to wait for images to be loaded before doing anything else
//https://imagesloaded.desandro.com/
console.log("Listening for DOM"); 
document.addEventListener("DOMContentLoaded", function() {
    let masonryGrid = document.querySelector(".my-masonry-grid");
    
    imagesLoaded(masonryGrid, function() {
        console.log("test");
        new Masonry(masonryGrid, {
            percentPosition: true
        })
    });
});
