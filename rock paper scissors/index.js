const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i = 0; i <buttons.length; i++){

  buttons[i].addEventListener("click", function(e) {

    let playerGuess = e.target.innerText  
    let selection = Math.floor(Math.random()*3); 
    let gameArray = ["Rock","Paper","Scissors"];
    let computerGuess = gameArray[selection];

      console.log(computerGuess);
      console.log(playerGuess);

    if(playerGuess == "Rock" && computerGuess == "Paper") {
    console.log("C Wins")
    }
    else if (playerGuess == "Paper" && computerGuess == "Scissors") {
      console.log("C Wins")
    }
    else if (playerGuess == "Scissors" && computerGuess == "Rock"){
      console.log("C Wins")
    }

  });
}

