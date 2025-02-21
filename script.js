document.addEventListener("DOMContentLoaded",()=>{
    const btnList = document.querySelectorAll(".btn");
    const display = document.querySelector(".text-display")
    currentInput = "";
    firstVal = "";
    secondVal = "";
    operation = "";
    btnList.forEach(button =>{
        button.addEventListener("click",() =>{
            const value = button.textContent;
            if(button.classList.contains("numbers")){
                currentInput += value;
                display.value = currentInput;
            }
            else if(button.classList.contains("operations")){
                if(currentInput !== ""){
                    firstVal = currentInput;
                    operation = value;
                    display.value = firstVal+" "+operation;
                    currentInput = "";
                }
            }
            else if(button.classList.contains("equals")){
                if(firstVal !== "" && currentInput !== ""){
                    secondVal = currentInput;
                    display.value = calculation(firstVal, secondVal, operation);
                    currentInput = display.value;
                    firstVal = "";
                    operation = "";
                }
            }
            else if(button.classList.contains("clr")){
                currentInput = "";
                firstVal = "";
                secondVal = "";
                display.value = "";
            }
        });
    });
    function calculation(num1, num2, op){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch(op){
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "x": return num1 * num2;
            case "%": return num2 !== 0 ? num1 / num2 : "Error";
            default:  return "";
        }
    }
});