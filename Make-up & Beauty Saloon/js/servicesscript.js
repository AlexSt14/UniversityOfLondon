//Small interactive script for changing and applying classes to divs inside the services page, mixing css in order to achieve the desired effect
// Changing and applying the active class to the clicked elements
let items = document.querySelectorAll(".services-list li");
//Needed to use the Array.from as I needed an array for this to work and apply a for each method
let description = Array.from(document.getElementsByClassName("services-description"));
console.log(description); //debugging purposes

items.forEach(item => {
    item.addEventListener("click", function() {
        //Removing the clicked class from previous elements
        document.querySelector(".clicked").classList.remove("clicked");
        this.classList.add("clicked");

        //Hiding all the cards first
        description.forEach(desc => {
            desc.style.display = "none";
        })

        //Displaying the card with the same index as the item clicked
        //This takes advantage of the this element from within the foreach loop of items, takes the index of this current foreach loop and
        //assigns it to the description div. Effective way for an interactive script
        let index = [...items].indexOf(this);
        description[index].style.display = "flex";
    });
});
