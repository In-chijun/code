const { Calculator } = require('../Calculator/Calculator.js');

var BMICalculator = new Calculator();

// 소개
BMICalculator.introduce = function () {
    console.log("BMI 게산기를 선택하셨습니다!\n");
    console.log("체질량지수(BMI = body mass index)는 카우프지수로 비만을 평가하는 지수이며 세계적으로 쓰이는 공통표준 지수입니다.");
};

//키와 체중을 입력 받음
BMICalculator.input = function () {

    // 입력
    this.height = 177;
    console.log("키를 입력해주세요 :" + this.height);
    // this.height = "숫자입력 받기";

    this.weight = 72;
    console.log("체중을 입력해주세요 :" + this.weight);
    // this.weight = "몸무게입력 받기";

    return this.calculate(this.height / 100, this.weight);
};

// 연산
BMICalculator.calculate = function (height, weight) {
    this.result = (weight / (height * height)).toFixed(2);
}


BMICalculator.print = function () {

    console.log("\n다음의 표를 보고 자신의 상태를 체크하세요");
    console.log("결과는" + this.result + "입니다!\n");
    console.log("저체중 : 18.5 | 정상 : 18.5 - 22.9 | 비만 전 단계 : 23 - 24.9\n1단계 비만 : 25 - 29.9 ㅣ2단계 비만 30 - 34-9 | 3단계 비만 : 35보다 높을 경우");
}
module.exports = { BMICalculator }