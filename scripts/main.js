function fetchCatImage(){
    document.getElementById("fetch-image-button").innerText = "Loading...";
  
    // fetch cat image
    fetch("https://cataas.com/cat?json=true")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data) and visualize it in browser to extract useful information for us
        console.log(data);
  
        // set innerHTML of cat-container div to the image
        document.getElementById("cat-container").innerHTML = `<img id="cat-image" src="https://cataas.com/${data.url}">`;
  
        // replace `Loading...` text with `Fetch New Image` after fetching the image
        document.getElementById("fetch-image-button").innerText = "Fetch New Image";
      });
  };

  function fetchCatFacts(){
    // set `Loading...` text while fetching the cat facts
    document.getElementById("load-more-button").innerText = "Loading...";
  
    // fetch cat facts
    fetch("https://cat-fact.herokuapp.com/facts/random?amount=3")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data) and visualize it in browser to extract useful information for us
        console.log(data);
  
        // use forEach array method to iterate over each fact(array element) and set innerHTML of the cat-facts div
        data.forEach((fact) => {
            document.getElementById("cat-facts").innerHTML += `
          <div  class="fact-block">
              <p>${fact.text}</p>
          </div>
              `;
        });
  
        // replace `Loading...` text with `Load More` after fetching the facts
        document.getElementById("load-more-button").innerText = "Load More";
      });
  };
  
  fetchCatImage();
  fetchCatFacts();