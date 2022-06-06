const { Calculator } = require('../Calculator/Calculator.js');


var BMICalculator = new Calculator();

// 소개
BMICalculator.introduce = function () {
    console.log("BMI 게산기를 선택하셨습니다!");
};


// 연산
// this.result = (weight / (height / 100 * height / 100)).toFixed(2); -> BMI를 구할 수 있는 알고리즘
BMICalculator.calculate = function () {
    console.log("BMI 계산기의 연산을 수행해주는 메서드입니다.");
}


BMICalculator.print = function () {

    console.log("BMI 계산기의 결과를 나타내주는 메서드입니다.");
}
module.exports = { BMICalculator }