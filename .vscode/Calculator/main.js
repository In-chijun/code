const { BMICalculator } = require('../calculator/Calculator/BMICalculator.js');
const { SalaryCalculator } = require('../calculator/Calculator/salaryCalculator.js');
const { NormalCalculator } = require('../calculator/Calculator/NormalCalculator.js');
const { PercentCalculator } = require('../calculator/Calculator/PercentCalculator.js');
const { GradeCalculator } = require('../calculator/Calculator/GradeCalculator.js');


const CalculatorCreator  = (function () {
    func = function () { };
    func.create = function (calculatorType) {
        return {
            'BMI': BMICalculator,
            'Percent': PercentCalculator,
            'Normal': NormalCalculator,
            'Salary': SalaryCalculator,
            'Grade' : GradeCalculator
        }[calculatorType];
    }
    return Object.freeze(func);
})();

// 전략패턴 
const CalculatorLogic = (function () {
    function CalculatorLogic() {
        this.calculator = null;
    }
    CalculatorLogic.prototype.setCalculator = function (calculator) {
        this.calculator = CalculatorCreator.create(calculator);
    };
    CalculatorLogic.prototype.doIntroduce = function () {
        this.calculator.introduce();
    }
    CalculatorLogic.prototype.doCalculate = function () {
        this.calculator.calculate();
    }
    CalculatorLogic.prototype.doResult = function () {
        this.calculator.result();
    }
    return CalculatorLogic;
})();



const Main = type => {
    let calculatorLogic = new CalculatorLogic();
    console.log(type + "계산기 테스트입니다.");

    calculatorLogic.setCalculator(type);
    calculatorLogic.doIntroduce();
    calculatorLogic.doCalculate();
    calculatorLogic.doResult();
}


// BMI 계산기 
// Main("BMI");

// 퍼센트 계산기 -> 비율에 관한 계산기의비율을 연산해주는 예시 || 템플릿 패턴
// Main("Percent");

// 일반 계산기 -> 1 + 2 를 연산하는 예시 || builder 패턴 
Main("Normal");

// 시급 계산기 -> 시급 + 세금 + 주휴수당 부르는 예시 || 퍼사드 패턴 
// Main("Salary");

// 학점 계산기 
// Main("Grade");



// 빌더 괜히 씀 
// 프록시 나눠야겠다