let randomNumber = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess (guess){
    if(isNaN(guess)){
        alert("Enter a valid Number");
    }
    else if(guess>100){
        alert("Enter a number less than 100");
    }
    else if(guess<1){
        alert("Enter a number greater than 1.")
    }
    else{
        prevGuess.push(guess);
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`Game over. random guesses was ${randomNumber}`);
            endgame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    if(guess=== randomNumber){
        displayMessage(`well done| you blow this one`)
    }
    else if(guess< randomNumber){
        displayMessage(`You suck| it's too low`);
    }
    else if(guess> randomNumber){
        displayMessage(`WTH | Too high `)
    }
}

function displayGuess (guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`
}

function displayMessage (message){
    lowOrHi.innerHTML = `<h2>${message} </h2>`
}

function endgame (){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start over</h2?`
    startOver.appendChild(p);
    playGame= false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(){
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
}
