const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateEl = document.getElementById("generateEl");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;
  let password = "";

  if (upper.checked) {
    password += getUpperCase();
  }
  if (lower.checked) {
    password += getLowerCase();
  }
  if (number.checked) {
    password += getNumber();
  }
  if (symbol.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}

function generateX() {
  const xs = [];

  if (upper.checked) {
    xs.push(getUpperCase());
  }
  if (lower.checked) {
    xs.push(getLowerCase());
  }
  if (number.checked) {
    xs.push(getNumber());
  }
  if (symbol.checked) {
    xs.push(getSymbol());
  }
  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) return;

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard");
});
