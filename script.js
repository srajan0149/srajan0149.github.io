import exec from "./programs/exec.js";

let main = document.body.querySelector("#main");
console.log(main);

let input = "";
function getc(e) {
  if (e.isComposing === false) {
    if (e.key.length === 1) {
      main.innerHTML += e.key;
      input += e.key;
    } else if (e.key === "Enter") {
      main.innerHTML += "<br>";
      let output = exec(input);
      main.innerHTML += output;
      main.innerHTML += "<br><span class='prompt'>$ </span>";
      input = "";
    } else if (e.isComposing === false && e.key == "Backspace") {
      main.innerHTML = main.innerHTML.slice(0, -1);
      input = input.slice(0, -1);
    }
  }
  console.log(main.innerHTML);
}

document.body.addEventListener("keydown", getc);
