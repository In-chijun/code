const { Calculator } = require('../Calculator/Calculator.js');


// 템플릿 패턴
class PercentCalculateLogic {
    constructor() { }
    value = null;
    // 기준 값을 받는 메서드
    valueInput() {};
    // 해당 타입마다의 특별한 값을 받는 메서드
    typeValueInput() {};
    // 해당 입력 값을 계산해주는 메서드 
    calculate() {};
    tempCalculate() {};
};



// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
class RatioCalculator extends PercentCalculateLogic {
    constructor() { }
    typeValueInput();
}
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.
class InDecreaseCalculator extends PercentCalculateLogic {
    constructor() { }
    typeValueInput();
}



class RatioNumCalculator extends RatioCalculator {
    constructor() { }
    calculate();
}
class RatioRateCalculator extends RatioCalculator {
    constructor() { }
    calculate();
}

class InDecreaseNumCalculator extends InDecreaseCalculator {
    constructor() { }
    calculate();
}
class InDecreaseRateCalculator extends InDecreaseCalculator {
    constructor() { }
    calculate();
}

class PercentCalculator extends Calculator {
    constructor() { }
    introduce() { }
    input() { }
    calculate() { }
    print() { }

}

module.exports = { PercentCalculator };