const { Calculator } = require('../Calculator/Calculator.js');

let PercentCalculator = new Calculator();

// 템플릿 패턴
function PercentCalculatorLogic() {
    this.value = null;
    this.typeValue = null;
    this.result = null;
    // 기준 값을 받는 메서드
    valueInput = function () {
        console.log("PercentCalculateLogic의 valueInput메서드 입니다.");
    };
    // 해당 타입마다의 특별한 값을 받는 메서드
    PercentCalculatorLogic.prototype.typeValueInput = function () {
        console.log("PercentCalculateLogic의 typeValueInput메서드 입니다.")
    };
    // 해당 입력 값을 계산해주는 메서드 
    PercentCalculatorLogic.prototype.calculate = function () {
        console.log("PercentCalculateLogic의 calculate메서드 입니다.")
    };
    PercentCalculatorLogic.prototype.doLogic = function () {
        valueInput();
        this.typeValueInput();
        this.calculate();
    }
};



// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
let RatioCalculator = new PercentCalculatorLogic();
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.
let InDecreaseCalculator = new PercentCalculatorLogic();

RatioCalculator.typeValueInput = function () {
    console.log("PercentCalculateLogic의 typeValueInput를 재정의한 메서드입니다.");
};
InDecreaseCalculator.typeValueInput = function () {
    console.log("PercentCalculateLogic의 typeValueInput를 재정의한 메서드입니다.");
};


// 비율에 관한 계산기의 숫자, 비율을 연산해주는 부분
let RatioNumberCalculator = RatioCalculator;
let RatioRateCalculator = RatioCalculator;

RatioNumberCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};
RatioRateCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};


// 증감에 관한 계산기의 숫자, 비율을 연산해주는 부분
let InDecreaseNumberCalculator = InDecreaseCalculator;
let InDecreaseRateCalculator = InDecreaseCalculator;

InDecreaseNumberCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};
InDecreaseRateCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};

// 소개
PercentCalculator.introduce = function () {
    console.log("퍼센트 계산기를 선택하셨습니다!");
};


// 연산
PercentCalculator.calculate = function () {
    console.log("퍼센트 계산기의 결과를 나타내는 calculate 메서드");
    RatioNumberCalculator.doLogic();
    // RatioRateCalculator.doLogic();
    // InDecreaseNumberCalculator.doLogic();
    // InDecreaseRateCalculator.doLogic();
};


PercentCalculator.result = function () {
    console.log("PercentCalculator의 result 메서드입니다.");
}

module.exports = { PercentCalculator };