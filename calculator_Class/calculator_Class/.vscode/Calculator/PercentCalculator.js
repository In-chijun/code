const { Calculator } = require('../Calculator/Calculator.js');

let PercentCalculator = new Calculator();

// 템플릿 패턴
class PercentCalculateLogic {
    constructor() { }
    value = null;
    typeValue = null;
    // 기준 값을 받는 메서드
    valueInput = function () { };
    // 해당 타입마다의 특별한 값을 받는 메서드
    typeValueInput = function () { };
    // 해당 입력 값을 계산해주는 메서드 
    calculate = function () {
    };
    tempCalculate = function () {
        valueInput();
        typeValueInput();
        calculate();
    };
};



// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
class RatioCalculator extends PercentCalculateLogic {
    constructor() { };
    typeValueInput() { };
}
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.
class InDecreaseCalculator extends PercentCalculateLogic {
    constructor() { };
    typeValueInput() { };
}



// 비율에 관한 계산기의 숫자, 비율을 연산해주는 부분
class RatioNumCalculator extends RatioCalculator {
    constructor() { };
    calculate() { };
}
class RatioRateCalculator extends RatioCalculator {
    constructor() { };
    calculate() { };
}


// 증감에 관한 계산기의 숫자, 비율을 연산해주는 부분
class InDecreaseNumCalculator extends InDecreaseCalculator {
    constructor() { };
    calculate() { };
}
class InDecreaseRateCalculator extends InDecreaseCalculator {
    constructor() { };
    calculate() { };
}

// 소개
PercentCalculator.introduce = function () { };


// 연산
PercentCalculator.calculate = function () {
    RatioNumCalculator.tempCalculate();
    RatioRateCalculator.tempCalculate();
    InDecreaseNumCalculator.tempCalculate();
    InDecreaseRateCalculator.tempCalculate();
};


PercentCalculator.print = function () {
}

module.exports = { PercentCalculator };