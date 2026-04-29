let main = document.body.querySelector("#main");
let prompt = document.body.querySelector("#prompt");
let ctime = document.body.querySelector("#ctime");

ctime.textContent = `[${new Date().toTimeString().slice(0, 8)}]`;
setInterval(() => {
  ctime.textContent = `[${new Date().toTimeString().slice(0, 8)}]`;
}, 1000);

async function add_text(text, user = "", delay_time = 0) {
  let d = document.createElement("div");
  d.className = "text-div";
  let m = document.createElement("span");
  m.classNmae = "meta";

  if (user.length == 0) {
    m.textContent = `[${new Date().toTimeString().slice(0, 8)}] -!- `;
  } else {
    m.textContent = `[${new Date().toTimeString().slice(0, 8)}] < ${user}> `;
  }
  let p = document.createElement("span");
  p.className = "text";
  p.innerText = text;
  d.appendChild(m);
  d.appendChild(p);

  if (delay_time) {
    await delay(delay_time);
  }
  main.appendChild(d);
}

const TEXTS = [
  "Hii",
  "I am Srajan Dehariya",
  "Junior Undergrad at IITGn majoring in AI",
  "I had been wanting to create my portfolio website as a TUI and",
  "first time I used IRC in irssi, it was so fun",
  "soo...",
  "I am creating this",
  "although this is just naive website, and does not have any thing related to IRC",
  "Let me know if you have any suggestions at <nope not yet>@gmail.com",
  "",
  "Commands status: NOT IMPLEMENTED",
  "mphrik status: NOT IMPLEMENTED (check out at https://github.com/ProgVal/Limnoria)",
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

for (let text of TEXTS) {
  await add_text(text, "srajan0149", text.length * 27 + getRandom(400, 800));
}
prompt.innerText = "\u258A";

let input = "";
async function getc(e) {
  if (e.isComposing === false) {
    if (e.key.length === 1) {
      input += e.key;
    } else if (e.key === "Enter") {
      if (!input.startsWith("/")) {
        add_text(input, "user");
        await add_text("cant talk rn", "srajan0149", getRandom(800, 1500));
        await add_text(
          "I have a lot to implement",
          "srajan0149",
          getRandom(1000, 1500),
        );
      } else {
        if (input.startsWith("/help ")) {
          add_text("wircc: Not yet implemented");
        } else
          add_text(`wircc: Unknown command: ${input.slice(1).split(" ")[0]}`);
      }
      input = "";
    } else if (e.isComposing === false && e.key == "Backspace") {
      input = input.slice(0, -1);
    }
  }
  prompt.innerText = input + "\u258A";
}

document.body.addEventListener("keydown", getc);
