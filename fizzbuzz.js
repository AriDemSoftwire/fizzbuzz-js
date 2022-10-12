// Here, we create our main function.
function fizzbuzz() {

  let fizz = "Fizz";
  let buzz = "Buzz";
  let bang = "Bang";
  let bong = "Bong";
  let fezz = "Fezz";

  let wordToLog = [];
  let wordToLogReverse = [];

function divisibleBy3 () {
  if (i % 3 !== 0) {
      return;
    } else {
    wordToLog.push(fizz)
  };
}

function divisibleBy5 () {
  if (i % 5 !== 0) {
    return;
  } else {
  wordToLog.push(buzz);
  }
}

function divisibleBy7 () {
  if (i % 7 !== 0) {
    return;
  } else {
  wordToLog.push(bang);
  }
}

function divisibleBy11 () {
  if (i % 11 !== 0) {
    return;
  } else if (i % 13 === 0) {
    wordToLog.push(bong);
  } else {
    wordToLog = [];
    wordToLog.push(bong);
} 
}

function divisibleBy13 () {
  if (i % 13 !== 0) {
    return;
   } else if (wordToLog.length > 1) {
   for (j = wordToLog.length; j > 0; j--) {
if (wordToLog[j - 1][0] === 'B') {
  wordToLog.splice(j, 0, fezz);
}
   }
  } else if (wordToLog.length >= 1 && wordToLog[0][0] === 'B') {
    wordToLog.unshift(fezz);
  } else {
    wordToLog.push(fezz);
  }
}

function divisibleBy17 () {
  if (i % 17 !== 0) {
    return;
  } else {
  wordToLogReverse = wordToLog.reverse();
  wordToLog = wordToLogReverse;
}
}

  for (i = 1; i <= 350; i++) {

  wordToLog = [];
  wordToLogReverse = [];

  divisibleBy3();
  divisibleBy5();
  divisibleBy7();
  divisibleBy11();
  divisibleBy13();
  divisibleBy17();

  if (wordToLog.length !== 0) {
      console.log(wordToLog.join(""));
    } else {
      console.log(i);
    }

  }
}

// Now we run the main function...
fizzbuzz();
