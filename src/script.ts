const btn_num = document.getElementsByClassName('num');
const btn = document.querySelectorAll('input[type="button"]');
const text = document.querySelector('input[type="text"]') as HTMLInputElement;
const operators: string[] = ["+", "-", "*", "/"];
let operator: string;
let result: number;

btn.forEach(arg => {
    
    arg.addEventListener('click', () => {

        switch ((arg as HTMLInputElement).value) {
            case "+" : case "-" : case "*" : case "/" :

                let n: number = (text.value).length - 1;
                
                if ((text.value).includes("+") || 
                    (text.value).includes("-") ||
                    (text.value).includes("*") || 
                    (text.value).includes("/")) { //permette di fare più operazioni con una linea
                    op(operator);
                } else if (text.value[n] == "+" ||
                           text.value[n] == "-" ||
                           text.value[n] == "*" ||
                           text.value[n] == "/") { //evita che l'user concateni operatori
                    break;
                } //mi piace scrivere codice non leggibile @AanRuu
                text.value += (arg as HTMLInputElement).value;
                operator = (arg as HTMLInputElement).value;
                break;
            case "=":
                op(operator);
                break;
            case "c":
                clear();
                break;
            default:
                text.value += (arg as HTMLInputElement).value;
                break;

        }
    })
})


function op(operator: string): void{

    if (!operator) {
        return;
    }

    let boys = text.value.split(operator);
    let op1: number = +boys[0];
    let op2: number = +boys[1];

    switch(operator) {

        case '+':
            result = op1+op2;
            break;
        case '-':
            result = op1-op2;
            break;
        case '*':
            result = op1*op2;
            break;
        case '/':
            if (op2 == 0) {
                text.value = "Errore";
                return;
            } else {
            result = op1/op2;
            }
            break;
        default:
            text.value = "Errore";

        }

    text.value = `${result}`;

}

function clear() :void {

    text.value = "";
    operator = "";
    
}