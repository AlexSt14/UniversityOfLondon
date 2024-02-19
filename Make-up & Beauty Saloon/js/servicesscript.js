// Changing and applying the active class to the clicked elements
let items = document.querySelectorAll(".services-list li");
let description = Array.from(document.getElementsByClassName("services-description"));
console.log(description); //debugging purposes

items.forEach(item => {
    item.addEventListener("click", function() {
        //Removing the clicked class and add it only to the clicked element
        document.querySelector(".clicked").classList.remove("clicked");
        this.classList.add("clicked");

        //Hiding all the cards first
        description.forEach(desc => {
            desc.style.display = "none";
        })

        //Displaying the card with the same index as the item clicked
        let index = [...items].indexOf(this);
        description[index].style.display = "flex";
    });
});
