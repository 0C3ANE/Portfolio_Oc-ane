const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = [];
for (let x = 0; x < columns; x++)
  drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(11, 15, 23, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00f5ff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 35);

const encrypted = document.querySelector(".encrypted");
const originalText = encrypted.innerText;
const lettersEnc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

encrypted.addEventListener("mouseover", () => {
  let iteration = 0;

  const interval = setInterval(() => {
    encrypted.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }

        return lettersEnc[Math.floor(Math.random() * 36)];
      })
      .join("");

    if (iteration >= originalText.length) clearInterval(interval);

    iteration += 1 / 3;
  }, 30);
});