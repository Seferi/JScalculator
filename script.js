
// JS Calculator [prompt] by Seferi

function plus(k,l) {
    result = k + l;
    alert(result);
}

function minus(k,l) {
    result = k - l;
    alert(result);
}

function divide(k,l) {
    result = k / l;
    alert(result);
}

function multiply(k,l) {
    result = k * l;
    alert(result);
}


function toplama() {
    if (op == "+" || "-" || "/" || "*") {
    b = prompt("Enter the second number:");
    var num2 = Number(b);
    plus(num1,num2);
    
}

else {
    alert("This is not a valid operator!");
}

}

function cikarma() {
    if (op == "+" || "-" || "/" || "*") {
    b = prompt("Enter the second number:");
    var num2 = Number(b);
    minus(num1,num2);
}

else {
    alert("This is not a valid operator!");
}

}

function bolme() {
    if (op == "+" || "-" || "/" || "*") {
    b = prompt("Enter the second number:");
    var num2 = Number(b);
    divide(num1,num2);
}


else {
    alert("This is not a valid operator!");
}

}

function carpma() {
    if (op == "+" || "-" || "/" || "*") {
    b = prompt("Enter the second number:");
    var num2 = Number(b);
    multiply(num1,num2);
}

else {
    alert("This is not a valid operator!");
}

}

var a = prompt("Enter the first number:");
var num1 = Number(a);
var b;
var op = prompt("Enter an operation:");

switch (op) {
    case "+":
        toplama();
        break;
    case "-":
        cikarma();
        break;
    case "/":
        bolme();
        break;
    case "*":
        carpma();
        break;
    
    default: alert("Don't know what to do with that");
    
}