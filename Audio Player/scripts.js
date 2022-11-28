const lion = document.querySelector(".lionClass");
const tiger = document.querySelector(".tigerClass");
const dog = document.querySelector(".dogClass");
const lionSound = new Audio('/Audio Player/sounds/roaring_lion_sns.wav');
const tigerSound = new Audio('/Audio Player/sounds/Tiger Roar 6 - QuickSounds.com.mp3');
const dogSound = new Audio('/Audio Player/sounds/small_dog_bark_IgU_UsS.wav');

lion.addEventListener("click", function(){
    console.log("click lion");
    lionSound.play();
  }
);

tiger.addEventListener("click", function(){
  console.log("click tiger");
  tigerSound.play();
  } 
);

dog.addEventListener("click", function(){
  console.log("click dog");
  dogSound.play()
  }
);
