const { Calculator } = require('../Calculator/Calculator.js');

// 계산하는 법을 비공개 처리하기 위해 사용함 
class GradeCalculation{
    constructor(){};
    calculate();
    resultCalculate();
}

class GradeCalculationProxy {
    constructor(){}
    calculate();
    result();
}

class GradeCalculator extends Calculator{
    constructor(){};
    introduce();
    calculate();
    print();
};

module.exports = { GradeCalculator }