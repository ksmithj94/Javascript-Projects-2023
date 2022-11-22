let button = document.querySelector("button");

let input = document.querySelector("input");

let h1 = document.querySelector("h1");

let h3 = document.querySelector("h3");

let time = new Date();


button.addEventListener("click", function() {
  console.log(time.getHours());

  h1.innerHTML = `Welcome, ` + input.value + `!!`;
 
  h3.innerHTML = "";


  if (time < 12) {
    document.body.style.backgroundColor = "green";
  }
  else if (time > 12) {
    document.body.style.backgroundColor = "red";
  }
  else if (time = 12) {
    document.body.style.backgroundColor = "yellow";
  }
  else {
  
  }

});

