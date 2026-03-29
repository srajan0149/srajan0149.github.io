function echo(input) {
  return input.slice(1).join(" ");
}
function clear() {
  document.querySelector("#main").innerHTML = "";
  return "";
}

var PROGRAMS = (
  await import("./utils/programs.json", {
    with: { type: "json" },
  })
).default;
console.log(PROGRAMS);

function lazy_load(name) {
  import(`bin/${name}.js`)
    .then((mod) => {
      return mod();
    })
    .catch(() => {
      return "Some error occurred";
    });
}

function exec(input) {
  let args = input.split(" ");
  let name = args[0];
  if (PROGRAMS.includes(name)) {
    return lazy_load(name);
  } else return `<span class="error">Unknown command: ${input}</span>`;
}

export default exec;
