function echo(input) {
  return input;
}
function clear() {
  document.querySelector("#main").innerHTML = "";
  return "";
}

const PROGRAMS = {
  echo: echo,
  clear: clear,
};

function exec(input) {
  let args = input.split(" ");
  if (PROGRAMS[args[0]]) {
    return PROGRAMS[args[0]](args);
  } else return `<span class="error">Unknown command: ${input}</span>`;
}

export default exec;
