let coin = document.getElementById("coin");
let result = document.getElementById("result");
const button = document.getElementById("flip");

coin.addEventListener("click", flipCoin);
button.addEventListener("click", flipCoin);

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    flipCoin();
  }
});

function flipCoin() {
    coin.classList.add("flipping");
    
    coin.addEventListener("animationend", () => {
        const flip = Math.random() < 0.5 ? "Heads" : "Tails";
        if (flip === "Heads") {
            coin.src = "assets/heads.svg";
            result.textContent = "Heads";
        } else {
            coin.src = "assets/tails.svg";
            result.textContent = "Tails";
        }
        
        coin.classList.remove("flipping");
  });
}
