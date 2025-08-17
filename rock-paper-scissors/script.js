let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".msg")

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const drawgame = () => {
    msg.innerText = "Game was Draw, Play again. ";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose. Your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawgame();
    }
    else {
        let userWin = true;

        if (userChoice === "rock") {
            // userWin = compChoice === " paper" ? false : true;
            if(compChoice==="paper"){
                userWin = false;
            }
            else true;
        }
        else if (userChoice === "paper") {
            // userWin = compChoice === " scissors " ? false : true;
            if(compChoice==="scissors"){
                userWin = false;
            }
            else true;
        }
        else {
            // userWin = compChoice === " rock" ? false : true;
            if(compChoice==="rock"){
                userWin = false;
            }
            else true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

 choices.forEach((choice)=> {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

