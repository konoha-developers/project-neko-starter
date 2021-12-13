// access the div with cat-container id in html and store the div element inside catContainer variable
const catContainer = document.getElementById("cat-container");
console.log(catContainer);

// access the button with fetch-image-button id in html and store the button element inside fetchImageButton variable
const fetchImageButton = document.getElementById("fetch-image-button");
console.log(fetchImageButton)

// access the div with cat-facts id in html and store the div element inside catFacts variable
const catFacts = document.getElementById("cat-facts");
console.log(catFacts);

// access the button with load-more-button id in html and store the button element inside loadMoreButton variable
const loadMoreButton = document.getElementById("load-more-button");
console.log(loadMoreButton);

function fetchCatImage(){


  // fetch cat image
  fetch("https://cataas.com/cat/Orange?json=true")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data) and visualize it in browser to extract useful information for us
      console.log(data);

     // set innerHTML of cat-container div to the image
      catContainer.innerHTML = `<img id="cat-image" src="https://cataas.com/${data.url}">`;

    });
};



function fetchCatFacts(){
// fetch cat facts
  fetch("https://cat-fact.herokuapp.com/facts/random?amount=2")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data) and visualize it in browser to extract useful information for us
      console.log(data);

      // use forEach array method to iterate over each fact(array element) and set innerHTML of the cat-facts div
      data.forEach((fact) => {
        catFacts.innerHTML += `
        <div  class="fact-block">
            <p>${fact.text}</p>
        </div>
            `;
      });

    });
};


fetchCatFacts();
fetchCatImage();