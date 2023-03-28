// write your code here
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    // data === ramens
    ramens.forEach((ramen) => {
      rendertheRamens(ramen); // iterate through the data of ramen one by one
    });
  });

// global scope for 'menu'
let menu = document.getElementById("main-menu");

// I don't know if its normal function or arrow function
// const rendertheRamens = (ramen) => {
function rendertheRamens(ramen) {
  // iterating through the ramen data to do things with it
  // iterate to get the image and paste it on the menu bar
  let img = document.createElement("img"); // creating image tag
  img.src = ramen.image;
  // appending the images to the menu bar
  menu.append(img);

  // add an event listener when an image is clicked
  img.addEventListener("click", () => {
    let ramenimage = document.getElementsByClassName("detail-image");
    ramenimage.src = ramen.image;

    let name = document.getElementsByClassName("name");
    name.innerHTML = ramen.name;

    let restaurant = document.getElementsByClassName("restaurant");
    restaurant.innerHTML = ramen.restaurant;

    let rating = document.getElementById("rating-display");
    rating.innerHTML = ramen.rating;

    let comment = document.getElementById("comment-display");
    comment.textContent = ramen.comment;
  });
}

/* // POST request 
    fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

         })
    })

*/
