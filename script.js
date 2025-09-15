import { MESSAGES } from "./messages.js";
import { ROMAN_NUMERALS } from "./romanNumerals.js";
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const clearInput = () => {
  numberInput.value = "";
};

const showMessage = (message, isAlert = false) => {
  output.classList.remove("hidden");
  output.innerHTML = `<p class="${isAlert ? "alert" : ""}">${message}</p>`;
};

const inputCheck = (input) => {
  if (input === "") {
    showMessage(MESSAGES.EMPTY_INPUT, true);
    clearInput();
    return false;
  } else if (input < 0) {
    showMessage(MESSAGES.LOW_NUMBER_INPUT, true);
    clearInput();
    return false;
  } else if (input > 3999) {
    showMessage(MESSAGES.BIG_NUMBER_INPUT, true);
    clearInput();
  } else return true;
};

const numberToRoman = (number) => {
  let entries = Object.entries(ROMAN_NUMERALS).sort(
    (a, b) => Number(b[0]) - Number(a[0])
  );
  let arr = [];
  for (const entry of entries) {
    while (number >= Number(entry[0])) {
      number -= Number(entry[0]);
      arr.push(entry[1]);
    }
  }
  return arr.join("");
};

const convertInputToRoman = (input) => {
  if (!inputCheck(input)) {
    return;
  }
  let arr = numberToRoman(input);
  output.classList.remove("hidden");
  output.innerHTML = `<p>${arr}</p>`;
};

convertBtn.addEventListener("click", () => {
  let userInput = numberInput.value;
  convertInputToRoman(userInput);
});
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let userInput = numberInput.value;
    convertInputToRoman(userInput);
  }
});
