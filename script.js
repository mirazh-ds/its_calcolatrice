var btn_num = document.getElementsByClassName('num');
var btn = document.querySelectorAll('input[type="button"]');
var text = document.querySelector('input[type="text"]');
var operator;
var result;
btn.forEach(function (arg) {
    arg.addEventListener('click', function () {
        switch (arg.value) {
            case "+":
            case "-":
            case "*":
            case "/":
                text.value += arg.value;
                operator = arg.value;
                break;
            case "=":
                op(operator);
                break;
            case "c":
                //da fare
                break;
            default:
                text.value += arg.value;
                break;
        }
    });
});
function op(operator) {
    var boys = text.value.split(operator);
    var op1 = +boys[0];
    var op2 = +boys[1];
    switch (operator) {
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            if (op2 == 0) {
                text.textContent = "Errore";
                return;
            }
            else {
                result = op1 / op2;
            }
            break;
        default:
            alert("error: enter a second value");
    }
    text.value = "".concat(result);
}
