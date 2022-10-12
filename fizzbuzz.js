

// Here, we create our main function.
function fizzbuzz() {
    
    for (let i = 1; i <= 110; i++) {
        let wordToLog = "";
        if (i % 3 === 0) {
          wordToLog = wordToLog + "Fizz";
        }
        if (i % 5 === 0) {
          wordToLog = wordToLog + "Buzz";
        }
        if (i % 7 === 0) {
          wordToLog = wordToLog + "Bang";
        }
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
          console.log(wordToLog);
        } else {
          console.log(i);
        }
      } 
}

// Now we run the main function...
fizzbuzz();
