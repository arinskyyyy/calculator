let displayOutput = document.querySelector("output");
let buttons = document.getElementById("buttons");

let currentInput = "0";
let previousInput = "";
let currentOperator = null;

buttons.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.tagName !== "BUTTON") {
        return;
    } else {
        let clickedButtonID = e.target.id;
        let clickedButtonTextContent = e.target.textContent;

        if (!isNaN(clickedButtonTextContent)){
            if (currentInput === "0" || currentInput === "ERROR!"){
                currentInput = clickedButtonTextContent;
            } else {
                currentInput += clickedButtonTextContent;
            }
            displayOutput.textContent = currentInput;
        } else if (["+", "-", "x", "/"].includes(clickedButtonTextContent)) {
            previousInput = currentInput;
            currentOperator = clickedButtonTextContent;
            currentInput = "0";
        } else if (clickedButtonTextContent === "=") {
            let num1 = Number.parseFloat(previousInput);
            let num2 = Number.parseFloat(currentInput);

            if (currentOperator === "+") {
                currentInput = num1 + num2;
            } else if (currentOperator === "-") {
                currentInput = num1 - num2;
            } else if (currentOperator === "x") {
                currentInput = num1 * num2;
            } else if (currentOperator === "/") {
                if (num2 === 0) {
                    currentInput = "ERROR!";
                }else {
                    currentInput = num1 / num2;
                }
            }
            currentInput = currentInput.toString();
            displayOutput.textContent = currentInput;
        } else if (clickedButtonTextContent === "AC") {
            currentInput = "0";
            previousInput = "";
            currentOperator = null;
            displayOutput.textContent = currentInput;
        } else if (clickedButtonTextContent === "delete") {
            if (currentInput.length === 1 || currentInput === "ERROR!") {
                currentInput = "0";
            } else {
                currentInput = currentInput.slice(0 ,-1);
            }
            displayOutput.textContent = currentInput;
        } else if (clickedButtonTextContent === ".") {
            if (!currentInput.includes(".")) {
                currentInput += "."
            }
            displayOutput.textContent = currentInput;
        }
    }
});