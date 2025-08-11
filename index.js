function generatePoem (event)
{event.preventDefault();
    
    new Typewriter("#poem", {
  strings: ["My Poem, Your poem, Our poem. Are we poem?"],
  autoStart: true,
  delay:1,
  cursor:"",


});
}   
let poemFormElement = document.getElementById("poem-form");
poemFormElement.addEventListener("submit", generatePoem); 

