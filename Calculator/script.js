// Variablen für leichte Rechnungen mit 2 zahlen 
// HTML mit Buttons für jede Nummer, ein Display, buttons für Operatoren und ein clear-button

const calc = function(num1, opp, num2) {
    if (opp === "+") {
       return num1 + num2
    }
    else if (opp === "-") {
        return num1 - num2
    }
    else if (opp === "*") {
        return num1 * num2
    }
    else if (opp === "/") {
        return num1 / num2
    }
    else {
        return "An Error occured, please try again."
    }
}

console.log(calc(1, "/" , 2))