//Defining the container showing the sleepy cat image
const containerCat = document.getElementById("container-cat");
console.log(containerCat);
//Defining the button which loads the image
const loadImage = document.getElementById("load-image");
console.log(loadImage);
//Defining the container showing the facts of sleepy cat
const containerFacts = document.getElementById("container-facts");
console.log(containerFacts);
//Defining the button whihc loads the facts
const showFacts = document.getElementById("show-facts");
console.log(showFacts);

function loadCatImage()
{
    //display loading.. while the time api fetch is done
    loadImage.innerText="Loading...";

    //fetch api
    fetch("https://cataas.com/cat/sleepy?json=true")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        containerCat.innerHTML=`<img id="img-cat" src="https://cataas.com${data.url}"></img>`;
    });
    
    loadImage.innerText="Load Another Image";
};

loadImage.addEventListener("click",loadCatImage);
//fetch the image and fact when the page is initially loaded
function initial()
{
    fetch("https://cataas.com/cat/sleepy?json=true")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        containerCat.innerHTML=`<img id="img-cat" src="https://cataas.com${data.url}"></img>`;
    });

    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        data.forEach((fact)=>{
            containerFacts.innerHTML=`<div class="facts">
            <p>${fact.text}</p>
            </div>`;
        });
    });
};

function showFactsNow()
{
    //display loading.. while the time api fetch is don
    showFacts.innerText="Loading";
    //fetch api
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        data.forEach((fact)=>{
            containerFacts.innerHTML=`<div class="facts">
            <p>${fact.text}</p>
            </div>`;
        });
    });

    showFacts.innerText="show Another Fact";
};
showFacts.addEventListener("click",showFactsNow);