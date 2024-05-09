
function a(a, operazione, b){
    switch (operazione){
        case'+':
            console.log(a+b);
        break;
        case '-':
            console.log(a-b);
        break;
        case 'x':
            console.log(a*b);
        break;
        case '÷':
            if(b==0){
                console.log("Errore404")
            } else {
            console.log(a/b)}
        break;
    }
}

a(1, "+", 2)
a(3, "-", 5)
a(7, "x", 9)
a(9, "÷", 6)
a(9, "÷", 0)