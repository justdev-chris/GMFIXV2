function rotateGames() {
  const gameFrames = document.querySelectorAll('.gameframe');

  gameFrames.forEach(gameFrame => {
    // We need to find the h1 element within the parent span element
    const h1Element = gameFrame.querySelector('h1'); 

    if (h1Element) {
      console.log(h1Element.textContent); 
    } else {
      console.log("No h1 element found in this gameframe"); 
    }
  });
}
