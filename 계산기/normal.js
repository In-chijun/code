// //공학(일반) 계산기
// class Calculator{};
// var normalcalculation = new Calculator;

// normalcalculation.prototype.oneValue = function(value){     // oneValue 생성자 함수
//     this.value = value;
// }
// normalcalculation.prototype.twoValue = function(value1, value2){    // twoValue 생성자 함수
//     this.value1 = value1;
//     this.value2 = value2;
// }

const Context = (function() {
    function Context() {
        this.strategy = null;
    }
    Context.prototype.setStrategy = function(strategy) {    //계산기 선택한 것 할당해주는 함수
        this.strategy = strategy;
    }
    Context.prototype.doAlgorithm = function(value, algorithm) {    //선택한 알고리즘 실행시켜주는 함수
        this.algorithm = algorithm;
        this.strategy.algorithm(value);
    }
    return Context;
})();

// 값 1개
const pi = (function() {
    function pi() {}
    pi.prototype.algorithm = function(value) {    
        console.log(Math.PI * value);
    };
    return pi;
})();
const absolute = (function() {
    function absolute() {}
    absolute.prototype.algorithm = function(value) {    
        console.log(Math.abs(value));
    };
    return absolute;
})();
const squareRoot = (function() {
    function squareRoot() {}
    squareRoot.prototype.algorithm = function(value) {    
        console.log(Math.sqrt(value));
    };
    return squareRoot;
})();
const factorial = (function() {
    function factorial() {}
    factorial.prototype.algorithm = function(value) {    
        result = 1;
        for (value; value > 1; value--){
                    result *= value;
                }
                console.log(result);
    };
    return factorial;
})();
// 값 2개
const plus = (function() {
    function plus() {}
    plus.prototype.algorithm = function(value1, value2) {    
        console.log(value1 + value2);
    };
    return plus;
})();
const minus = (function() {
    function minus() {}
    minus.prototype.algorithm = function(value1, value2) {    
        console.log(value1 - value2);
    };
    return minus;
})();
const multiplication = (function() {
    function multiplication() {}
    multiplication.prototype.algorithm = function(value1, value2) {    
        console.log(value1 * value2);
    };
    return multiplication;
})();
const division = (function() {
    function division() {}
    division.prototype.algorithm = function(value1, value2) {    
        console.log(value1 / value2);
    };
    return division;
})();
const exponentiation = (function() {
    function exponentiation() {}
    exponentiation.prototype.algorithm = function(value1, value2) {    
        console.log(Math.pow(value1, value2));
    };
    return exponentiation;
})();


let context = new Context();
// 팩토리얼

context.setStrategy(new factorial());
context.doAlgorithm(3);

// 팩토리얼
context.setStrategy(new absolute());
context.doAlgorithm(-5);





















// 입력
// class input{
//     constructor(){
//         this.read;
//     }
// }

// class Choice extends input{
//     constructor(){
//         this.normOrEngine;
//     }
// }

// class Number extends input{
//     constructor(){
//     }
// }

// Choice.prototype.choiceCalculation = function(){
//     console.log(`계산기를 선택해주세요(1. 공학계산기 2. 일반계산기)`)
//     //공학인지 일반인지 받는 함수 필요 - 변수는 normOrEngine으로
//     if (input == `1`){
//         //공학 계산기 알고리즘 실행
//     }
//     else if(input == `2`){
//         //일반 계산기 알고리즘 실행
//     }
//     else {
//         console.log("다시 입력해주세요!")
//         // while문으로 돌리기
//     }
// }

// Choice.prototype.choiceOperation = function(){
//     console.log(`원하는 공학 연산을 선택해주세요 : `);
//     // 입력받기(operation으로)
// }

// Number.prototype.inputNumber = function(){
//     console.log("숫자를 입력해주세요 : ")
//     //숫자 입력받기
// }

// Choice.prototype.engineChoice = function(){
//     console.log(`원하는 공학 연산을 선택해주세요 : `);
//     // 입력받기(operationChoice로)
//     console.log(`연산할 숫자를 입력해주세요 : `);
//     //  연산할 숫자 입력받기
//     switch(operationChoice){
//         case `루트`:
//             break;
//         case `파이`:
//             break;
//         case `제곱`:
//             break;
//         case `제곱`:
//             break;
//         case `루트`:
//             break;
//         case `루트`:
//             break;
//     }
// }