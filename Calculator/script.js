
// wenn die erste Zahl negativ ist, soll "-" als opp für den neuen Input gespeichert werden, ansonsten gilt +

    const numbers = document.querySelector(".numbers")
    const opps = document.querySelectorAll(".opp")
    const display = document.querySelector(".display")
    const calc_btn = document.querySelector(".calc")
    const delete_btn = document.querySelector(".delete")
  
    for (i = 0; i < 10; i++) {
        
        let new_button = document.createElement("button")
        new_button.setAttribute("class", "number")
        new_button.style.order = 10 - i
        new_button.textContent = i

        new_button.addEventListener("click", () => {
            calculator.display(new_button.textContent)
            calculator.newInput.push(new_button.textContent)
        })

        numbers.insertAdjacentElement("afterbegin", new_button)
    }

    opps.forEach(opp => {
        opp.addEventListener("click", () => {
            
            calculator.check(opp.textContent)
            // else {
            //     calculator.inputs.push({
            //         number: parseInt(calculator.newInput.join("")),
            //         opp: opp.textContent
            //     })
            //     calculator.display(opp.textContent)
            // }
        })
    })

    calc_btn.addEventListener("click", () => {
        calculator.storeInput();
        calculator.calc();
    })

    delete_btn.addEventListener("click", () => {
        calculator.delete();
    })

    const calculator =  {

        newInput: [],
        inputs: [],
        displayValue: "",
        opperator: "+",
        
        display(content)  {
            this.displayValue = this.displayValue + content
            display.textContent = this.displayValue
        },
        storeInput(opp, num) {

            this.inputs.push({
                opperator: this.opperator,
                number: parseInt(this.newInput.join("")),
            })
            this.newInput = []
        },
        check(opp) {
            
            if (this.inputs.length === 0 && this.newInput.length === 0) {
                if (opp === "-") {
                    this.opperator = opp;
                    this.display(opp)
                    return
                } else {
                    return;
                }
            }

            this.storeInput()
            this.display(opp)
            this.opperator = opp
        },
        calc() {
            const result = this.inputs.reduce((acc, value) => {
     
                if (value.opperator === "+") {
                    return acc + value.number
                }
                if (value.opperator === "-") {
                    return acc - value.number
                }
                if (value.opperator === "*") {
                    return acc * value.number
                }
                if (value.opperator === "/") {
                    return acc / value.number
                }
            }, 0)

            this.displayValue = ""
            this.display(result)
            this.delete()
            this.newInput.push(result)
        },
        delete() {
            this.inputs = []
        }
    }




