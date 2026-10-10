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
            if (currentInput === "0"){
                currentInput = clickedButtonTextContent;
            } else {
                currentInput += clickedButtonTextContent;
            }
            displayOutput.textContent = currentInput;
        }
    }
});