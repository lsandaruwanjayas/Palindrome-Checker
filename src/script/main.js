const inputText = document.getElementById("text-input");
const buttonCheck = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

const palindromeCheck = (input) => {
  const storeInput = input;

  if (input.trim().length === 0) {
    alert("Please input a value");
    return;
  }

  let outputMessage = `<Strong>${storeInput}</Strong> ${
    input
      .replace(/[^A-Za-z0-9]/gi, "")
      .split("")
      .join("") ===
    input
      .replace(/[^A-Za-z0-9]/gi, "")
      .split("")
      .reverse()
      .join("")
      ? "is"
      : "is not"
  } a palindrome.`;
  resultOutput.replaceChildren();
  const displayOutput = document.createElement("p");
  displayOutput.className = "inputText";
  displayOutput.innerHTML = outputMessage;
  resultOutput.appendChild(displayOutput);
  resultOutput.classList.remove("hidden");
};

buttonCheck.addEventListener("click", () => {
  palindromeCheck(inputText.value);
  inputText.value = "";
});
