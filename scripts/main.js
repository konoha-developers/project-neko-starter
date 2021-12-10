console.log("javascript loaded")

const catImage = document.getElementById("container-image")
const imgBtn = document.getElementById("img-btn")
const facts = document.getElementById("container-facts")
const fctBtn = document.getElementById("fact-btn")

function loadCatImage(){
    fetch("https://cataas.com/cat/says/Hello%20Hoomans?json=true") 
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        console.log(`The complete url is https://cataas.com/${data.url}` )
        catImage.innerHTML=`<img id="catImg" src="https://cataas.com${data.url}"></img>`
    })
}

function loadCatFact(){
    fetch("https://cat-fact.herokuapp.com/facts/random")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        facts.innerHTML=`<div class="facts"><p>${data.text}</p></div>`;
    })
} 

loadCatImage();
loadCatFact();  
