const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = "";
let awaitingNExtValue = false;

function sendNumberValue(number) {
  //  Replace current display value if first value is entered
  if (awaitingNExtValue) {
    calculatorDisplay.textContent = number;
    awaitingNExtValue = false;
  } else {
    //  if current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

function addDecimal() {
  // If operator pressed, don't add decimal
  if (awaitingNExtValue) return;
  // If no decimal, add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Assign firstValue if no value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log("current value", currentValue);
  }

  //  Ready for next value, store operator

  operatorValue = operator;
  console.log("firstValue", firstValue);
  console.log("operatorValue", operatorValue);
}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

// Reset all values, display
function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNExtValue = false;
  calculatorDisplay.textContent = "0";
}

// Event Listener for reset
clearBtn.addEventListener("click", resetAll);
