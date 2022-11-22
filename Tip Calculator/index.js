let button = document.querySelector("button");
 let output = document.querySelector (".output");
 let cost = document.querySelector("input");



button.addEventListener("click", function() {
  output.innerHTML = cost.value*.20 + "%"
});