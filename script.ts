const btn_num = document.getElementsByClassName('num');
const btn = document.querySelectorAll('input[type="button"]');
const text = document.querySelector('input[type="text"]') as HTMLInputElement;
let operator: string;
let result: number;

btn.forEach(arg => {
    
    arg.addEventListener('click', () => {
        switch ((arg as HTMLInputElement).value) {
            case "+" : case "-" : case "*" : case "/" :
                text.value += (arg as HTMLInputElement).value;
                operator = (arg as HTMLInputElement).value
                break;
            case "=":
                op(operator);
                break;
            case "c":
                //da fare
                break;
            default:
                text.value += (arg as HTMLInputElement).value;
                break;
        }
    })
})


function op(operator: string): void{

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
                text.textContent = "Errore";
                return;
            } else {
            result = op1/op2;
            }
            break;
        default:
            alert("error: enter a second value");

    }

    text.value = `${result}`;

}