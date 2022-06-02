const readline = require('readline');
const { Calculator } = require('../.vscode/Calculator/Calculator.js');
const { BMICalculator } = require('../.vscode/Calculator/BMICalculator.js');
const { SalaryCalculator } = require('../.vscode/Calculator/salaryCalculator.js');
const { NormalCalculator } = require('../.vscode/Calculator/NomalCalculator.js');
const { PercentCalculator } = require('../.vscode/Calculator/PercentCalculator.js');
const { type } = require('os');


// class GradeCalculator extends Calculator { }

const CalculatorFactory = (function () {
    func = function () { };

    func.create = function (calculatorType) {
        return {
            'BMI': BMICalculator,
            'Percent': PercentCalculator,
            'Normal': NormalCalculator,
            // 'Grade': new GradeCalculator(),
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
    CalculatorStrategy.prototype.doAlgorithm = function () {
        this.calculator.introduce();
        this.calculator.input();
        this.calculator.print();
    }
    return CalculatorStrategy;
})();


const Main = type => {
    let check = 0;
    let calculatorStrategy = new CalculatorStrategy();
    do {
        console.log("계산기.\n1. BMI 계산기 2. 퍼센트 계산기 3. 일반(공학)계산기 4. 학점계산기 5. 시급 계산기");
        calculatorStrategy.setStrategy(type);
        calculatorStrategy.doAlgorithm();
    } while (check != 0)
}

// BMI 계산기 선택 후, 키 177, 몸무게 72를 입력했을 때, 나올 수 있는 로직 
Main("Salary");

// node .vscode/calculator_main

