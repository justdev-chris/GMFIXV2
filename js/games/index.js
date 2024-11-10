const originalTitle = document.querySelector('title').textContent;
const addition = '- Geometry Tryhard';

// Check if the addition is already in the title
if (!originalTitle.includes(addition)) {
  let newTitle = originalTitle;

  // Replace specific patterns with the addition
  newTitle = newTitle.replace(/\| 3kh0/, addition);
  newTitle = newTitle.replace(/- ubg235 GameDistribution/, addition);
  newTitle = newTitle.replace(/- ubg235 GC/, addition);
  newTitle = newTitle.replace(/- TBG35/, addition);
newTitle = newTitle.replace(/&middot Geometry Tryhard/, addition);

  // If no replacements were made, add the addition to the end
  if (newTitle === originalTitle) {
    newTitle += addition;
  }

  document.querySelector('title').textContent = newTitle;
}