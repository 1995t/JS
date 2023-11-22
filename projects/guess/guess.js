let randomNumber = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('submit',function(event){
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
}

    function validateGuess(guess){
           if(isNaN(guess))
           {
            alert('Please enter a valid input!');
           }
           else if(guess < 1){
            alert('Please enter a number greater than 1');
           }
           else if(guess > 100)
           {
            alert(`Please enter a value less than 100`);
           }
           else{
            prevGuess.push(guess);
            if(numGuess === 11)
            {
                displayGuess(guess);
                displayMessage(`Game over random number is ${randomNumber}`);
                endGame();
            }
            else{
                displayGuess(guess);
                checkGuess(guess);
            }
           }
    }

    function checkGuess(guess){
         if(guess === randomNumber){
            displayMessage(`You guessed it right`);
         }
         else if(guess < randomNumber){
            displayMessage(`Your guess is TOO low`);
         }
         else if(guess > randomNumber){
            displayMessage(`Your guess is TOO High`);
         }
    }

    function displayGuess(guess){
      userInput.value = '';
      guessSlot.innerHTML += `${guess},`;
      numGuess++;
      remaining.innerHTML = ${11 - numGuess};
        }

    function displayMessage(message){
      lowOrHi.innerHTML = `<h2>${message}</h2>`;
    }

    function endGame(){
     userInput.value = '';
     userInput.setAttribute('disabled','');
     p.classList.add('button');
     p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
     startOver.appendChild(p);
     playGame = false;
     newGame();
    }

    function newGame(){

    }
});