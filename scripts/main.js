const catImage = document.getElementById("fetchimage")
console.log(catImage)
const catImageButton = document.getElementById("imagebut")
console.log(catImageButton)
const catFact = document.getElementById("fetchfact")
console.log(catFact)
const loadMore = document.getElementById("factbut")
console.log(loadMore)

function fetchCatFact () {

  loadMore.innerText = "Loading...";

  //fetch cat fact
  fetch("https://cat-fact.herokuapp.com/facts/random?amount=3")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((fact) => {
        catFact.innerHTML += `
        <div  class="factblock">
            <p>${fact.text}</p>
        </div>
            `;
      });

      loadMore.innerText = "Load More";
    });

};

function fetchCatImage(){
  
  catImageButton.innerText = "Loading...";

  // fetch cat image
  fetch("https://cataas.com/cat?json=true")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      catImage.innerHTML = `<img id="imageblock" src="https://cataas.com/${data.url}"></img>`;

      catImageButton.innerText = "Fetch New Image";
    });
};

fetchCatFact();
fetchCatImage();
