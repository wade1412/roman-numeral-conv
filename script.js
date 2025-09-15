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

const separateNumber = (number) => {
  let arr = number.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= Math.pow(10, arr.length - 1 - i);
  }
  return (number = arr);
};

const arrToRoman = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = ROMAN_NUMERALS[arr[i]];
  }
  return arr.join("");
};

const convertInputToRoman = (input) => {
  if (!inputCheck(input)) {
    return;
  }
  let inputArr = separateNumber(input);
  input = arrToRoman(inputArr);
  output.innerHTML = `<p>${input}</p>`;
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
