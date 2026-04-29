let main = document.body.querySelector("#main") as HTMLDivElement;
let prompt = document.body.querySelector("#prompt") as HTMLDivElement;
let ctime = document.body.querySelector("#ctime") as HTMLSpanElement;
const DELAY_PC = 27.3;
const MIN_DELAY = 200;
const MAX_DELAY = 1500;

ctime.textContent = `[${new Date().toTimeString().slice(0, 8)}]`;
setInterval(() => {
  ctime.textContent = `[${new Date().toTimeString().slice(0, 8)}]`;
}, 1000);

async function add_text(
  _texts: string | Array<string>,
  user = "",
  addDelay = false,
) {
  let texts = Array<string>();
  if (typeof _texts === "string") {
    texts.push(_texts as string);
  } else {
    texts = _texts as Array<string>;
  }
  if (user == "srajan0149") texts = ["", ...texts, ""];
  for (let text of texts) {
    if (addDelay) {
      await delay(text.length * DELAY_PC + getRandom(MIN_DELAY, MAX_DELAY));
    }
    let d = document.createElement("div");
    d.className = "text-div";
    let m = document.createElement("span");
    m.className = "meta";

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

    main.appendChild(d);
    main.scrollTop = main.scrollHeight;
  }
}

const TEXTS = [
  "Hii",
  "I am Srajan Dehariya",
  "I had been wanting to create my portfolio website as a TUI and",
  "first time I used IRC in irssi, it was so fun",
  "soo...",
  "I am creating this",
  "although this is just naive website right now, and does not have any thing related to IRC",
  "Let me know if you have any suggestions at <nope not yet>@gmail.com",
  "",
  "Commands status: /about, /projects, /experience, /skills, /contact",
];

const CMDS = ["about", "projects", "experience", "skills", "contact"];
function commandResp(cmd: string) {
  switch (cmd) {
    case "about":
      return add_text(
        [
          "My name is Srajan Dehariya (srajan0149 on the internet)",
          "junior undergrad currently pursuing BTech in AI at IITGn.",
        ],
        "srajan0149",
        true,
      );
    case "projects":
      return add_text(
        [
          "I have done several projects mostly through my academic courses like",
          "improving upon xv6-pi5 OS (team work)",
          "building automated distributed pipeline for text extraction from Common Crawl corpus under Prof. Mayank Singh",
          "developing YACLL (Yet Another C Like Language) which was also team work,",
          "and ImageSeqBenchmark where I created the pipeline for data curation and inferencing",
        ],
        "srajan0149",
        true,
      );
    case "experience":
      return add_text(
        [
          "I do not have any professional experience yet",
          "but I have been part of the Election Commission at IITGn as a Technical Officer",
          "where I worked on management of the voting portal and implementing kiosks for voting.",
          "In addition to that I have contributed in telescopic observation sessions through the Odyssey-Astronomy club.",
        ],
        "srajan0149",
        true,
      );
    case "skills":
      return add_text(
        [
          "I have worked with Python most of the time",
          "although I am familiar with C more than I am with C++",
          "and this website is in Typescript which is a superset of JavaScript.",
          "I use Arch btw!",
        ],
        "srajan0149",
        true,
      );
    case "contact":
      return add_text(
        [
          "You can contact me at srajan.dehariya@iitgn.ac.in",
          "My linkedin profile is at https://www.linkedin.com/in/srajan0149/",
          "sorry I am yet to implement the links in this interface",
        ],
        "srajan0149",
        true,
      );
    case "help":
      return add_text(
        [
          "Just type one of these commands to know about me",
          "/about, /projects, /experience, /skills, /contact",
        ],
        "srajan0149",
        true,
      );
    default:
      return add_text(
        ["Something is wrong with your command", "maybe just try again??"],
        "",
        false,
      );
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

await add_text(TEXTS, "srajan0149", true);

prompt.innerText = "\u258A";

let input = "";
async function getc(e: KeyboardEvent) {
  if (e.isComposing === false) {
    if (e.key.length === 1) {
      input += e.key;
      prompt.innerText = input + "\u258A";
    } else if (e.key === "Enter") {
      const entered = input;
      input = "";
      prompt.innerText = "\u258A";
      if (!entered.startsWith("/")) {
        if (entered.length !== 0) {
          prompt.innerText = "\u258A";
          add_text(entered, "user");
          await add_text(
            [
              "cant talk rn",
              "I have a lot to implement",
              "But you can contact me. Type /contact for details",
            ],
            "srajan0149",
            true,
          );
        }
      } else {
        let cmd = entered.slice(1).split(" ")[0];
        commandResp(cmd);
      }
    } else if (e.isComposing === false && e.key == "Backspace") {
      input = input.slice(0, -1);
      prompt.innerText = input + "\u258A";
    }
  }
}

document.body.addEventListener("keydown", getc);

export {};
