
window.onload = function() {
    //Script changing the active class to the navbar where the user clicks
    var a = document.getElementsByClassName("activeScript");

    //Geting the stored active element index from localStorage
    var storedIndex = localStorage.getItem("activeElementIndex");

    //Attaching click event listener to each li element and passing the event object to the caller
    for (var i = 0; i < a.length; i++) {
        (function(i) {
            a[i].addEventListener("click", function(event) {
            handleClick(event, i);
            });
        })(i);

        //Applying the active class if the stored index matches the current element index
        if (storedIndex !== null && i.toString() === storedIndex) {
            a[i].classList.add("active");
        }
    }

    //Handling click on the navbar links
    function handleClick(event, i) {
        //Removing all "active" class first before adding active to the clicked link
        for (var j = 0; j < a.length; j++) {
            a[j].classList.remove("active");
        }

        //If click is inside dropdown, it will be handled separately, else it will be adding the active class normally
        if(event.target.closest('.dropdown-menu')) {
            //Getting the parent dropdown anchor and adding the active class to it
            var dropdown = event.target.closest('.dropdown-toggle');
            dropdown.classList.add('active');
        } else {
            event.target.classList.add('active');
            //Store clicked index which will be used inside the event listener to apply active class once page reloads
            localStorage.setItem("activeElementIndex", i.toString());
        }
    }
    //END script
    
    //Small script to change navbar class for mobile users by adding a class
    //Changing the width dynamically depending on the width 
    var navbar = document.getElementsByClassName("nav-tabs");
    window.addEventListener("resize", () => {
        if (window.innerWidth < 500) {
            navbar[0].classList.add("flex-column");
        }
        else {
            navbar[0].classList.remove("flex-column");
        }
    })
    
};


//Slideshow script for TopGPU page THE 1440p SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activee", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activee";
}

//Slideshow script for TopGPU page the 4k SLIDESHOW
let slideIndex4k = 1;
showSlides4k(slideIndex4k);

// Next/previous controls
function plusSlides4k(n) {
    showSlides4k(slideIndex4k += n);
}

// Thumbnail image controls
function currentSlide4k(n) {
    showSlides4k(slideIndex4k = n);
}

function showSlides4k(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) {slideIndex4k = 1}
    if (n < 1) {slideIndex4k = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activee", "");
    }
    slides[slideIndex4k-1].style.display = "block";
    dots[slideIndex4k-1].className += " activee";
}

//Index page form submission
//This is obviously imitating a real world scenario as I am not connected to a database
//Made it like this to make it more believable
function accountSubmit() {
    let indexForm = document.getElementById("modalJS");
    if (indexForm.childNodes[1].innerHTML === "<h5>Your account has been successfully created</h5>") {
        alert("You have already created an account.");
    }
    indexForm.childNodes[1].innerHTML = "<h5>Your account has been successfully created</h5>";
    indexForm.childNodes[3].innerHTML = "<p>You will receive details on your email on how to proceed. You can close this window.</p>";
}
