// Here, we create our main function

// Assumes every word starts with a captial (for 17)
function fizzbuzz() {
  const fizz = "Fizz";
  const buzz = "Buzz";
  const bang = "Bang";
  const bong = "Bong";
  const fezz = "Fezz";

  function divisibleBy(currentNum, divisibleNum, word, wordToAdd) {
    if (currentNum % divisibleNum !== 0) {
      return word;
    } else {
      return (word += wordToAdd); 
    }
  }

  function divisibleBy11(currentNum, word) {
    if (currentNum % 11 !== 0) {
      return word;
    }

    return bong;
  }

  // Returns the index of the word in the existing word that begins with the letter provided (B). -1 if there is no word with that letter
  function firstWordLetter(letter, word) {
    return word.indexOf(letter);
  }
// newWord - Fezz in this case
  function addWordToStringAtIndex(word, newWord, index) {
    return word.slice(0, index) + newWord + word.slice(index);
  }

  function divisibleBy13(currentNum, word) {
    if (currentNum % 13 !== 0) {
      // Not a multiple of 13, exit out
      return word;
    }

    let index = firstWordLetter("B", word);

    if (index != -1) {
      return addWordToStringAtIndex(word, fezz, index);
    }

    return (word += fezz);
  }

  function divisibleBy17(currentNum, word) {
    if (currentNum % 17 !== 0) {
      return word;
    }

    // Splitting the string at caps to reverse it
    let array = word.split(/(?=[A-Z])/);
    array.reverse();
    return array.join("");
  }


  // The actual loop
  for (let i = 1; i <= 260; i++) {
    let Word = "";

    // Divisible by 3 - Print Fizz
    Word = divisibleBy(i, 3, Word, fizz);

    // Divisible by 5 - Print Buzz
    Word = divisibleBy(i, 5, Word, buzz);

    // Divisible by 7 - Print Bang
    Word = divisibleBy(i, 7, Word, bang);

    // Divisible by 11 - Replace all with Bong
    Word = divisibleBy11(i, Word);

    // Divisible by 13 - Fezz in front of words starting with B, behind words starting with else
    Word = divisibleBy13(i, Word);

    // Divisible by 17 - Reverses the words
    Word = divisibleBy17(i, Word);

    if (Word === "") {
      Word = i;
    }

    console.log(Word);
  }
}

// Now we run the main function...
fizzbuzz();
