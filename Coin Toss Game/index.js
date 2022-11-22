let buttons = document.querySelectorAll("button");
let coinArray = ["Heads","Tails"];
let score = [0,0];
let message = document.querySelector(".message");

function tossCoin(e){

  let computerToss = Math.floor(Math.random()*2);

  let playerGuess= e.target.innerText
  let coinFlip= coinArray[computerToss]
  let output;

  message.innerHTML = "Computer Selected " + coinFlip;

  if(playerGuess === coinFlip){
      output="Player Wins"
      score[0]++;
  }
  else {
    output = "Computer Wins"
    score[1]++;
  }
  message.innerHTML = output + "<br>Player" + score[0] + " Computer" + score[1];

};



for(let i = 0; i <buttons.length; i++){
  console.log(buttons[i])
  buttons[i].addEventListener('click', tossCoin);
  
};


