const { BMICalculator } = require('../.vscode/Calculator/BMICalculator.js');
const { SalaryCalculator } = require('../.vscode/Calculator/salaryCalculator.js');
const { NormalCalculator } = require('./Calculator/NormalCalculator.js');
const { PercentCalculator } = require('../.vscode/Calculator/PercentCalculator.js');

// class GradeCalculator extends Calculator { }

const CalculatorFactory = (function () {
    func = function () { };

    func.create = function (calculatorType) {
        return {
            'BMI': BMICalculator,
            'Percent': PercentCalculator,
            'Normal': NormalCalculator,
            'Salary': SalaryCalculator
        }[calculatorType];
    }
    return Object.freeze(func);
})();

const CalculatorStrategy = (function () {
    function CalculatorStrategy() {
        this.calculator = null;
    }
    CalculatorStrategy.prototype.setStrategy = function (calculator) {
        this.calculator = CalculatorFactory.create(calculator);
    };
    CalculatorStrategy.prototype.doIntroduce = function () {
        this.calculator.introduce();
    }
    CalculatorStrategy.prototype.doCalculate = function () {
        this.calculator.calculate();
    }
    CalculatorStrategy.prototype.doPrint = function () {
        this.calculator.print();
    }
    return CalculatorStrategy;
})();

const Main = type => {
    let calculatorStrategy = new CalculatorStrategy();
    console.log(type + "계산기 테스트입니다.");

    calculatorStrategy.setStrategy(type);
    calculatorStrategy.doIntroduce();
    calculatorStrategy.doCalculate();
    calculatorStrategy.doPrint();
}

// BMI 계산기 
// Main("BMI");

// 퍼센트 계산기 -> 비율에 관한 계산기의비율을 연산해주는 예시 || 템플릿 패턴
// Main("Percent");

// 일반 계산기 -> 1 + 2 를 연산하는 예시 || builder 패턴 
Main("Normal");

// 시급 계산기 -> 시급 + 세금 + 주휴수당 부르는 예시 || 퍼사드 패턴 
// Main("Salary");