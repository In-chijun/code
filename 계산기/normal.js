const { Calculator } = require('./Calculator.js');

let NormalCalculator = new Calculator();

let Calculation = (function () {
    function Calculation(operator, value1, value2) {
        this.operator = operator;
        this.value1 = value1 || null;
        this.value2 = value2 || null;
    }
    Calculation.prototype.calculate = function () {
        console.log(this.operator + "연산을" + this.value1 + "과" + this.value2 + "값으로 연산해줍니다");
    }
    return Calculation;
})();

let makeCalculation = function (operator) {
    var value1 = null;
    var value2 = null;
    return {
        setVal1: function (number) {
            value1 = number;
            return this;
        },
        setVal2: function (number) {
            value2 = number;
            return this;
        },
        build: function () {
            return new Calculation(operator, value1, value2);
        }
    };
};

// 소개
NormalCalculator.introduce = function () {
    console.log("일반 계산기를 선택하셨습니다!");
};

// 값을 입력 받음 -> 연산
NormalCalculator.calculate = function (type) {
    console.log("NormalCalculator 의 calculate 메서드입니다.");
    
    // builder 패턴으로 1 + 2라는 연산을 수행해주는 예시 
    var plus = makeCalculation('Plus').setVal1(1).setVal2(2).build();
    plus.calculate();
};


NormalCalculator.print = function () {
    console.log("NormalCalculator 의 print 메서드입니다.");
}


module.exports = { NormalCalculator };