// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel.

let vowelsArr = ["a", "i", "o", "u", "e"];

function firstCharIsVowel(input){
  let array = input.split(" ");
  for (let i = 0; i < array.length; i++){
    if(vowelsArr.includes(array[i][0].toLowerCase())){
      array[i] = array[i] + "way";
    } else if (array[i][0] === "q" && array[i][1] === "u"){
      array[i] = array[i].substring(2, array[i].length) + "quay";
    }
    else {
      array[i] = firstConstVal(array[i]);
    }
    
  }
  return array;
}

function firstConstVal(word) {
  for(let i = 0; i < word.length; i++){
    if(vowelsArr.includes(word[i]) || (word[i] === "q" && i === 1)){
      const removed = word.substring(0,i);
      word = word.substring(i, word.length);
      let output = word + removed + "ay";
      return output;
    }
  }
}

// UI Logic
function createOutput() {
  const input = document.getElementById("input").value;
  const output = firstCharIsVowel(input);
  document.getElementById("output-field").innerText = output.join(" ");
}

window.addEventListener("load", function () {
  console.log("page loaded");
  this.document.getElementById("submit-button").addEventListener("click", createOutput);
});