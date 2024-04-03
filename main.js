let black_white_btn = document.querySelector(".black_white_btn");
let black_white_btn_span = document.querySelector(".black_white_btn span");
let black_white_btnspan_p = document.querySelector(".black_white_btn span p");

let state = false;

function setColorMode() {
  localStorage.getItem("colormode") == "dark" ? darkmode() : lightmode();
  localStorage.getItem("colormode") == "dark"
    ? (state = true)
    : (state = false);
}

function darkmode() {
  black_white_btnspan_p.style =
    "animation:go 0.15s 1 forwards; background:black";
  black_white_btn_span.style =
    "  background: linear-gradient(to bottom left,#3CC59D,#3797DB);";

  document.documentElement.style.setProperty("--body-color", "rgb(30, 32, 42)");
  document.documentElement.style.setProperty(
    "--main-black-color",
    "rgb(255, 255, 255)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "rgb(139, 151, 198)"
  );
  document.documentElement.style.setProperty("--div-color", "rgb(37, 42, 65)");
  document.documentElement.style.setProperty(
    "--hover-color",
    "rgb(53, 57, 82)"
  );
}
function lightmode() {
  "animation:back .15s 1 forwards; background: rgb(247, 243, 243);";
  black_white_btn_span.style = "  background: var(--button-color)";
  document.documentElement.style.setProperty(
    "--body-color",
    "rgb(255, 255, 255)"
  );
  document.documentElement.style.setProperty(
    "--main-black-color",
    "rgb(30, 32, 42)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "rgb(99, 103, 126)"
  );
  document.documentElement.style.setProperty(
    "--div-color",
    "rgb(240, 242, 250)"
  );
  document.documentElement.style.setProperty(
    "--hover-color",
    "rgb(227, 231, 248"
  );
}
black_white_btn_span.addEventListener("click", function () {
  if (state == false) {
    darkmode();

    localStorage.setItem("colormode", "dark");
  } else {
    black_white_btnspan_p.style = lightmode();
    localStorage.setItem("colormode", "light");
  }

  state = !state;
});

setColorMode();
