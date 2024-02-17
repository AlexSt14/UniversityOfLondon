// //Homepage MAIN carousel/slideshow
// let slideIndex = 1;
// showSlides(slideIndex);

// //Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("my-slides");
//     if (n > slides.length) {slideIndex = 1};
//     if (n < 1) {slideIndex = slides.length};
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
// }

//Short slideshow for testimonials Homepage
let slideIndexTestimonials = 1;
showSlidesTestimonials(slideIndexTestimonials);

//Next/prev controls
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

//Removing g-4 class from homepage element
let testimonialsWidth = window.innerWidth;
let testimonialsDiv = document.getElementsByClassName("test-div")[0];
console.log(testimonialsDiv);
//This ensures if the page is loaded on a mobile, it will remove g-4 class
if (testimonialsWidth <= 600) {
    testimonialsDiv.classList.remove("g-4");
}
//This ensures if the page on a desktop is resized to a mobile size, it will remove g-4 class
window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 600) {
        testimonialsDiv.classList.remove("g-4");
    }
    else {
        testimonialsDiv.classList.add("g-4");
    }
})
