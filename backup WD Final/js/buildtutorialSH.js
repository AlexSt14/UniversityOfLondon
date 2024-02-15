//Slideshows for Build a PC Tutorial PAGE

//Short slideshow for CPU installation
let slideIndexCpu = 1;
showSlidesCpu(slideIndexCpu);

//Next/previous controls
function plusSlidesCpu(n) {
    showSlidesCpu(slideIndexCpu += n);
}

function showSlidesCpu(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) {slideIndexCpu = 1}
    if (n < 1) {slideIndexCpu = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexCpu-1].style.display = "block";
}

//Slideshow for cooler installation
let slideIndexCooler = 1;
showSlidesCooler(slideIndexCooler);

//Next/previous controls
function plusSlidesCooler(n) {
    showSlidesCooler(slideIndexCooler += n);
}

function showSlidesCooler(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    if (n > slides.length) {slideIndexCooler = 1};
    if (n < 1) {slideIndexCooler = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexCooler-1].style.display = "block";
}

//Short slideshow for aftermarket cooler installation
let slideIndexAftermarket = 1;
showSlidesAftermarket(slideIndexAftermarket);

//Next/previous controls
function plusSlidesAftermarket(n) {
    showSlidesAftermarket(slideIndexAftermarket += n);
}

function showSlidesAftermarket(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    if (n > slides.length) {slideIndexAftermarket = 1};
    if (n < 1) {slideIndexAftermarket = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexAftermarket-1].style.display = "block";
}

//Short slideshow for fan connection
let slideIndexFan = 1;
showSlidesFan(slideIndexFan);

//Next/previous controls
function plusSlidesFan(n) {
    showSlidesFan(slideIndexFan += n);
}

function showSlidesFan(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    if (n > slides.length) {slideIndexFan = 1};
    if (n < 1) {slideIndexFan = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFan-1].style.display = "block";
}

//Short slideshow for RAM installation
let slideIndexRam = 1;
showSlidesRam(slideIndexRam);

//Next/previous controls
function plusSlidesRam(n) {
    showSlidesRam(slideIndexRam += n);
}

function showSlidesRam(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides7");
    if (n > slides.length) {slideIndexRam = 1};
    if (n < 1) {slideIndexRam = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexRam-1].style.display = "block";
}

//Short slideshow for IO Shield Install
let slideIndexIO = 1;
showSlidesIO(slideIndexIO);

//Next/previous controls
function plusSlidesIoShield(n) {
    showSlidesIO(slideIndexIO += n);
}

function showSlidesIO(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides8");
    if (n > slides.length) {slideIndexIO = 1};
    if (n < 1) {slideIndexIO = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexIO-1].style.display = "block";
}

//Short slideshow for GPU Install
let slideIndexGpu = 1;
showSlidesGpu(slideIndexGpu);

//Next/previous controls
function plusSlidesGpu(n) {
    showSlidesGpu(slideIndexGpu += n);
}

function showSlidesGpu(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    if (n > slides.length) {slideIndexGpu = 1};
    if (n < 1) {slideIndexGpu = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexGpu-1].style.display = "block";
}

//Short slideshow for Cable Management
let slideIndexCable = 1;
showSlidesCable(slideIndexCable);

//Next/previous controls
function plusSlidesCable(n) {
    showSlidesCable(slideIndexCable += n);
}

function showSlidesCable(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides10");
    if (n > slides.length) {slideIndexCable = 1};
    if (n < 1) {slideIndexCable = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexCable-1].style.display = "block";
}