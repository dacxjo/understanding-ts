function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var showResult = true;
var resultPhrase = 'The value is: ';
add(number1, number2, showResult, resultPhrase);
