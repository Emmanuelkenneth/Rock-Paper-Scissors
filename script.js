// state
 let user_score = 0;
 let computer_score = 0;
 // to select elements
 const hands = document.querySelectorAll(".hands img");
 const userScore = document.querySelector('.user_score');
 const computerScore = document.querySelector('.computer_score');
 const mainMessage = document.querySelector('.message');
// get computer choice

const getComputerChoice = () => {
    const hands = ["rock", "paper", "scissors"];
    const computerChoice = hands[Math.floor(Math.random() * hands.length)];
    return computerChoice;
}

// function to display message and update scores
const displayMessageUpdate = (e, condition, computerChoice ) => {
    if (condition === "draw"){
        //display message
        mainMessage.textContent = `Draw you and computer both selected ${e.target.id}.;`
    }
    if (condition === "win") {
        mainMessage.textContent = `You win ${e.target.id} beats ${computerChoice}.`
        //adds a point to the user score if user wins
        user_score++;
        userScore.textContent = user_score;
    }
    if(condition === "lose") {
        mainMessage.textContent = `You lose ${computerChoice} beats ${e.target.id}.`
        //adds a point to the computer score if computer wins
        computer_score++;
        computerScore.textContent = computer_score;
    }
}

// select choice
 const play = e =>  {
const computerChoice = getComputerChoice();

// check for a draw
if(e.target.id === "rock" && computerChoice === "rock"  || e.target.id === "paper" && computerChoice === "paper" || e.target.id === "scissors" && computerChoice === "scissors" ) {
    //display score and corresponding message
       displayMessageUpdate(e, "draw", computerChoice)
}

// check if the user won
if(e.target.id === "rock" && computerChoice === "scissors"  || e.target.id === "paper" && computerChoice === "rock" || e.target.id === "scissors" && computerChoice === "paper" ) {
    //display score and corresponding message
       displayMessageUpdate(e, "win", computerChoice)
}

// check user loss
if(e.target.id === "rock" && computerChoice === "paper"  || e.target.id === "paper" && computerChoice === "scissors" || e.target.id === "scissors" && computerChoice === "rock" ) {
    //display score and corresponding message
       displayMessageUpdate(e, "lose", computerChoice)
}
 }

 hands.forEach(e => {
    e.addEventListener("click", play)
 })

 // this code is sued to make the value of computer and user scores 0 when the page isreloaded
 window.addEventListener("load", function() {
    userScore.textContent = user_score;
    computerScore.textContent = computer_score;
 } )
