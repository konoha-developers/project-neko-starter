
console.log("javascript loaded")

const catImage = document.getElementById("cat-image")
const fetchimgbtn = document.getElementById("fetch-image-button")
const facts = document.getElementById("katy-cat-facts")
const fctBtn = document.getElementById("load-more-facts")

function fetchimage(){
    fetch("https://cataas.com/cat/says/welcome%20to%20katy's%20world?json=true") 
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        console.log(`The complete url is https://cataas.com/${data.url}` )
        catImage.innerHTML=`<img id="catImg" src="https://cataas.com${data.url}"></img>`
    })
}

function fetchfacts(){
    fetch("https://cat-fact.herokuapp.com/facts/random")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        facts.innerHTML=`<div class="facts"><p>${data.text}</p></div>`;
    })
} 

fetchimage();
fetchfacts();