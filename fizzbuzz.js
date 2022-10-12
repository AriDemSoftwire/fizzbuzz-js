// Here, we create our main function.
function fizzbuzz() {
  let fizz = "Fizz";
  let buzz = "Buzz";
  let bang = "Bang";
  let bong = "Bong";
  let fezz = "Fezz";

  for (let i = 1; i <= 2500; i++) {
    let wordToLog = [];
    let wordToLogReverse = [];
    if (i % 3 === 0 && i % 11 !== 0) {
      wordToLog.push(fizz);
    }
    if (i % 13 === 0) {
      wordToLog.push(fezz);
    }
    if (i % 5 === 0 && i % 11 !== 0) {
      wordToLog.push(buzz);
    }
    if (i % 7 === 0 && i % 11 !== 0) {
      wordToLog.push(bang);
    }
    if (i % 11 === 0) {
      wordToLog.push(bong);
    }
    if (i % 17 === 0 && wordToLog.length > 0) {
      wordToLogReverse = wordToLog.reverse();
      console.log(wordToLogReverse.join(""));
    } else if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i % 13 === 0 || i % 11 === 0) {
      console.log(wordToLog.join(""));
    } else {
      console.log(i);
    }
  }
}

// Now we run the main function...
fizzbuzz();
