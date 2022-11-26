const message = document.querySelector(".message");
const heading = document.querySelector("h2");
const buttons = document.querySelectorAll("button");

for(let i = 0; i <buttons.length; i++){

  buttons[i].addEventListener("click", function(e) {

    let playerGuess = e.target.innerText;  
    let selection = Math.floor(Math.random()*3); 
    let gameArray = ["Rock","Paper","Scissors"];
    let computerGuess = gameArray[selection];
    let score = [0,0]

      console.log(computerGuess);
      console.log(playerGuess);

    if(playerGuess == "Rock" && computerGuess == "Paper") {
      heading.innerHTML = "Computer Wins!"
      message.innerHTML = "Player chose: " + playerGuess + "<br> Computer chose: " + computerGuess 
    }
    else if (playerGuess == "Rock" && computerGuess == "Scissors") {
      heading.innerHTML = "Player Wins!"
      message.innerHTML = "Player chose: " + playerGuess + "<br> Computer chose: " + computerGuess 
    }
    else if (playerGuess == "Paper" &&    computerGuess == "Scissors") {
      heading.innerHTML = "Computer Wins!"
      message.innerHTML = "Player chose: " + playerGuess + "<br> Computer chose: " + computerGuess 
    }
    else if (playerGuess == "Paper" && computerGuess == "Rock") {
      heading.innerHTML = "Player Wins!"
      message.innerHTML = "Player chose: " + playerGuess + "<br> Computer chose: " + computerGuess 
    }
    else if (playerGuess == "Scissors" && computerGuess == "Rock"){
      heading.innerHTML = "Computer Wins!"
      message.innerHTML = "Player chose: " + playerGuess + "<br> Computer chose: " + computerGuess 
    }
    else if (playerGuess == "Scissors" && computerGuess == "Paper") {
      heading.innerHTML = "Player Wins!"
      message.innerHTML = "Player chose: " + playerGuess + "<br> Computer chose: " + computerGuess 
    }
    else {
      heading.innerHTML = "It's A Tie!"
      message.innerHTML = ""
    }
  });
};

