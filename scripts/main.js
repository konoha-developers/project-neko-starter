const button = document.getElementById('button');
const button_fact = document.getElementById('button-fact');

button.addEventListener('click',getCatImage);
button_fact.addEventListener('click',getCatFact);

function getCatImage(){
    fetch('https://cataas.com/cat?json=true')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        
        document.getElementById('out-image').innerHTML = `<img src="https://cataas.com${data.url}" class="cat-image">`;
    })
}

function getCatFact(){
    fetch('https://cat-fact.herokuapp.com/facts/random?amount=3')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        let out = '';
        for(i in data){
            out += `<div class="fact">
                <p>${data[i].text}</p>
            </div>`
        }
        document.getElementById('out').innerHTML = out;
    })
}
getCatFact();
getCatImage();