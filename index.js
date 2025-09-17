function displayPoem {(response)


 console.log("Poem generated");
  let text=  response.data.answer,
   new Typewriter("#poem", {
  
  autoStart: true,
  delay:35,
  cursor:"",
 strings: [text],

});
}

function generatePoem (event)
{event.preventDefault();

let smallElement= document.querySelector("small");
smallElement.style.opacity=0

  let inputElement=document.getElementById("user-instructions");
  console.log(inputElement.value);

  let apiKey= "bd75f0b07t2b8413f599c23a504017fo";
  let context=`Generate a poem about, ${inputElement.value} make it short, need a title and to be in verses all styled in the center
  `;
  let prompt=`Generate a poem about, ${inputElement.value}`;
 
  let apiURL=
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("Generating poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

    axios.get(apiURL).then(displayPoem
    );
  
}   
let poemFormElement = document.getElementById("poem-form");
poemFormElement.addEventListener("submit", generatePoem); 

 