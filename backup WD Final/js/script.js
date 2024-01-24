
window.onload = function() {
    //Accesing JSON file for website PC Parts database
    var pcParts = [];

    fetch("../db/video-card.json")
        .then(response => response.json())
        .then(data => {
            assignJSON(data);
        })
    
    function assignJSON(data) {
        pcParts = data;
        console.log(pcParts[0], "here it is");
    }


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
};