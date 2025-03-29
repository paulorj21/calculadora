let interf = document.querySelector("#interface");
let num = 0;
let op = "";

function clearDisplay() {
    interf.textContent = "0";
}

function backspace() {
    if (interf.textContent.length === 1) {
        clearDisplay();
    } else {
        interf.textContent = interf.textContent.slice(0, -1);
    }
}

function changeDisplay() {
    numbers = document.querySelectorAll(".number");
    numbers.forEach(function (number) {
        number.addEventListener("click", function () {
            if (interf.textContent === "0") {
                interf.textContent = "";
            }
            interf.textContent += number.textContent;
        });
    });
}
changeDisplay();

function saveNumber() {
    num = parseInt(interf.textContent);
}

function saveOperator() {
    operators = document.querySelectorAll(".operator");
    operators.forEach(function (operator) {
        operator.addEventListener("click", function () {
            if (operator.textContent !== "=") {
                op = operator.textContent;
                saveNumber();
                clearDisplay();
            }
        });
    });
}
saveOperator();

function calculate() {
    switch (op) {
        case "÷":
            interf.textContent = num / parseInt(interf.textContent);
            break;
        
        case "×":
            interf.textContent = num * parseInt(interf.textContent);
            break;
        
        case "-":
            interf.textContent = num - parseInt(interf.textContent);
            break;
        
        case "+":
            interf.textContent = num + parseInt(interf.textContent);
            break;
    }
    op = "";
    num = 0;
}