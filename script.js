const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.startsWith('pt') ? 'pt' : 'en';

function loadContent() {
  const title = document.querySelector(".title h1");
  const subtitle = document.querySelector(".title h2");
  const button = document.getElementById("flip");
  const result = document.getElementById("result");
  
  if (lang === 'pt') {
    title.textContent = "Cara ou Coroa";
    subtitle.textContent = "Clique na moeda ou no botão para girá-la";
    button.textContent = "GIRAR";
    result.textContent = "Cara";
  } else {
    title.textContent = "Flip the coin";
    subtitle.textContent = "Click the coin or the button to flip it";
    button.textContent = "RANDOM";
    result.textContent = "Heads";
  }
}

loadContent();

let coin = document.getElementById("coin");
let result = document.getElementById("result");
const button = document.getElementById("flip");

let isFlipping = false;

coin.addEventListener("click", flipCoin);
button.addEventListener("click", flipCoin);

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    flipCoin();
  }
});

function flipCoin() {
  if (isFlipping) return;
  isFlipping = true;
  coin.classList.add("flipping");
  
  coin.addEventListener("animationend", () => {
    const flip = Math.random() < 0.5 ? "Heads" : "Tails";
    if (flip === "Heads") {
      coin.src = "assets/heads.svg";
      result.textContent = lang === 'pt' ? "Cara" : "Heads";
    } else {
      coin.src = "assets/tails.svg";
      result.textContent = lang === 'pt' ? "Coroa" : "Tails";
    }
    
    coin.classList.remove("flipping");
    isFlipping = false;
  }, { once: true });
}
