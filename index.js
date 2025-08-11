function displayPoem(response)
{ console.log("Poem generated");
   new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",


});
}

function generatePoem (event)
{event.preventDefault();
  let inputElement=document.getElementById("user-instructions");
  console.log("inputElelment.value");
  let apiKey= "bd75f0b07t2b8413f599c23a504017fo";
  let context="´You are a sad but successful poet, famous for very short poems. Always follow the ${users-instructions}´. Output only a title on the first line and then the poem. Keep it to 3–6 lines. Separate each line with <br>. No explanations or extra text.";
  let prompt=`user instrutions: Generate a poem about, ${inputElement.value}`;
 
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

 