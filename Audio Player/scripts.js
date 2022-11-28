const lion = document.querySelector(".lionClass");
const tiger = document.querySelector(".tigerClass");
const dog = document.querySelector(".dogClass");
const lionSound = new Audio('/Audio Player/sounds/roaring_lion_sns.wav');

lion.addEventListener("click", function(){
    console.log("lick lion");
    lionSound.play();
  }
);

tiger.addEventListener("click", function(){
  console.log("click tiger");
  } 
);

dog.addEventListener("click", function(){
  console.log("click dog");
  }
);
