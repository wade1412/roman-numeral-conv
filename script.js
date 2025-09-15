import { MESSAGES } from "./messages";
import { ROMAN_NUMERALS } from "./romanNumerals";
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
