const { Calculator } = require('../Calculator/Calculator.js');

let PercentCalculator = new Calculator();

// 템플릿 패턴
function PercentCalculateLogic() {
    this.value = null;
    // 기준 값을 받는 메서드
    valueInput = function () {
        console.log("PercentCalculateLogic의 valueInput메서드 입니다.");
    };
    // 해당 타입마다의 특별한 값을 받는 메서드
    PercentCalculateLogic.prototype.typeValueInput = function () {
        console.log("PercentCalculateLogic의 typeValueInput메서드 입니다.")
    };
    // 해당 입력 값을 계산해주는 메서드 
    PercentCalculateLogic.prototype.calculate = function () {
        console.log("PercentCalculateLogic의 calculate메서드 입니다.")
    };
    PercentCalculateLogic.prototype.tempCalculate = function () {
        valueInput();
        this.typeValueInput();
        this.calculate();
    }
};



// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
let RatioCalculator = new PercentCalculateLogic();
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.
let InDecreaseCalculator = new PercentCalculateLogic();

RatioCalculator.typeValueInput = function () {
    console.log("RatioCalculator의 typeValueInput메서드 입니다.");
};
InDecreaseCalculator.typeValueInput = function () {
    console.log("RatioCalculator의 typeValueInput메서드 입니다.");
};



let RatioNumCalculator = RatioCalculator;
let RatioRateCalculator = RatioCalculator;

RatioNumCalculator.calculate = function () {
    console.log("RatioNumCalculator의 calculate 메서드 입니다.");
};
RatioRateCalculator.calculate = function () {
    console.log("RatioRateCalculator의 calculate 메서드 입니다.");
};


let InDecreaseNumCalculator = InDecreaseCalculator;
let InDecreaseRateCalculator = InDecreaseCalculator;
InDecreaseNumCalculator.calculate = function () {
    console.log("InDecreaseNumCalculator의 calculate 메서드 입니다.");
};
InDecreaseRateCalculator.calculate = function () {
    console.log("InDecreaseRateCalculator의 calculate 메서드 입니다.");
};

// 소개
PercentCalculator.introduce = function () {
    console.log("퍼센트 계산기를 선택하셨습니다!");
};

PercentCalculator.input = function () {
    return this.calculate();
};

// 연산
PercentCalculator.calculate = function () {
    console.log("퍼센트 계산기의 결과를 나타내는 calculate 메서드");
    // RatioNumCalculator.tempCalculate();
    // RatioRateCalculator.tempCalculate();
    // InDecreaseNumCalculator.tempCalculate();
    // InDecreaseRateCalculator.tempCalculate();
};


PercentCalculator.print = function () {
    console.log("PercentCalculator의 print 메서드입니다.");
}

module.exports = { PercentCalculator };
