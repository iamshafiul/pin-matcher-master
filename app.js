const getPin = () => {
  const randomNumber = Math.random() * 10000;
  const pin = (randomNumber + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    console.log("shorter pin" + pin);
    return getPin();
  }
};

//display generate pin
const generatePin = () => {
  const userInput = document.getElementById("user-input");
  userInput.value = getPin();
};

//handle calculate button event
document.getElementById("cal-body").addEventListener("click", (event) => {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    if (digit === "C") {
      const typedInput = document.getElementById("typed-pin");
      typedInput.value = " ";
    }
  } else {
    const typedInput = document.getElementById("typed-pin");
    typedInput.value = typedInput.value + digit;
  }
});

//verify pin
const verifyPin = () => {
  const pin = document.getElementById("user-input").value;
  const typedPin = document.getElementById("typed-pin").value;

  if (pin === typedPin) {
    const correct = document.getElementById("correct-pin");
    correct.style.display = "block";
    const inCorrect = document.getElementById("incorrect-pin");
    inCorrect.style.display = "none";
    displayMatchResult("block", "none");
  } else {
    displayMatchResult("none", "block");
  }
};

//display match result
function displayMatchResult(correctStatus, incorrectStatus) {
  const correct = document.getElementById("correct-pin");
  correct.style.display = correctStatus;
  const inCorrect = document.getElementById("incorrect-pin");
  inCorrect.style.display = incorrectStatus;
}
