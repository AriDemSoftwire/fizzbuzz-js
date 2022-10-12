// Here, we create our main function.
function fizzbuzz() {

  let fizz = 'Fizz';
  let buzz = 'Buzz';
  let bang = 'Bang';
  let bong = 'Bong'; 
  let fezz = 'Fezz';
  
    for (let i = 1; i <= 300; i++) {
        let wordToLog = [];
        let wordToLogReverse = []; 
        if (i % 3 === 0) {
          wordToLog.push(fizz);
        }
        if (i % 13 === 0) {
          wordToLog.push(bong);
        }
        if (i % 5 === 0) {
          wordToLog.push(buzz);
        }
        if (i % 7 === 0) {
          wordToLog.push(bang);
        }
        if (i % 17 === 0 && i > 34) {
     wordToLogReverse = wordToLog.reverse();
     console.log(wordToLogReverse.join()); 
        } else if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
          console.log(wordToLog.join());
        } else if (i % 11 === 0) {
            console.log(bong);
        } else {
          console.log(i);
        }
      } 
}

// Now we run the main function...
fizzbuzz();
