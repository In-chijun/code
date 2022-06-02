const { Calculator } = require('../Calculator/Calculator.js');
// https://www.zerocho.com/category/JavaScript/post/580f17ef77023c0015ee9688

var SalaryCalculator = new Calculator();

// 퍼사드 메서드 패턴.
// 시급 계산기 (일 수 입력))  
// 1. 시간 * 일 수 
// 2. 세금 (3.3, 9.2)
// 3. 주휴수당 (15이상 이하, 15 이상, 40시간 이상)

// 시간 * 일 수 || 시간 * 일 수 + 세금 || 시간 * 일 수 + 세금 + 주휴수당
var SalaryCaculate = function () { };

var u = new SalaryCaculate();
// 시간 + 일 수 로직
SalaryCaculate.prototype.timeDayCalculate = function (weekTime, hourlyWage) {
    return weekTime * hourlyWage;
};
// 세금 계산 로직
SalaryCaculate.prototype.taxCalculate = function (tax, result) {
    return (result * ((100 - tax) / 100)).toFixed(2);
};
// 주휴수당 로직
SalaryCaculate.prototype.holidayPayCalculate = function (result, weekTime, hourlyWage) {
    return ( Number(result) + (((weekTime / 40) * 8 )* hourlyWage)).toFixed(2);
};


function SalaryFacade() {
    salaryCalculate = new SalaryCaculate();
};

// 시급 * 날 계산
SalaryFacade.prototype.oneCaculate = function (weekTime, hourlyWage) {
    this.result = salaryCalculate.timeDayCalculate(weekTime, hourlyWage);
    return this.result;
};

SalaryFacade.prototype.twoCaculate = function (weekTime, hourlyWage, tax) {
    this.result = salaryCalculate.timeDayCalculate(weekTime, hourlyWage);
    this.result = salaryCalculate.taxCalculate(tax, this.result);
    return this.result;
};

SalaryFacade.prototype.threeCaculate = function (weekTime, hourlyWage, tax) {
    this.result = salaryCalculate.timeDayCalculate(weekTime, hourlyWage);
    this.result = salaryCalculate.taxCalculate(tax, this.result);
    this.result = salaryCalculate.holidayPayCalculate(this.result, weekTime, hourlyWage);
    return this.result;
};

// 소개
SalaryCalculator.introduce = function () {
    console.log("시급 계산기를 선택하셨습니다!");
};

//키와 체중을 입력 받음
SalaryCalculator.input = function () {

    //  입력
    this.weekTime = 15;
    console.log("일주일 근무시간을 입력해주세요 : " + this.weekTime);
    // this.weekTime = "근무시간 입력 받기";

    this.hourlyWage = 9160;
    console.log("시급을 입력해주세요 : " + this.hourlyWage);
    // this.weight = "시급 입력 받기";

    this.tax = 3.3;
    console.log("세금 적용여부를 입력해주세요 : " + this.tax + "%\n\n");
    // console.log("세금 공제율을 %로 입력해주세요. ex : 3.3, 9.22\n");
    // this.tax = "세금 입력 받기";

    return this.calculate(this.weekTime, this.hourlyWage, this.tax);
};

// 연산
SalaryCalculator.calculate = function (weekTime, hourlyWage, tax) {
    var salaryFacade = new SalaryFacade();

    // 시급 + 날 
    this.result = salaryFacade.oneCaculate(weekTime, hourlyWage);
    // 시급 + 날 + 세금
    this.result = salaryFacade.twoCaculate(weekTime, hourlyWage, tax);
    // 시급 + 날 + 세금 + 주휴수당
    this.result = salaryFacade.threeCaculate(weekTime, hourlyWage, tax);
}


SalaryCalculator.print = function () {
    console.log("결과는 " + this.result + "원 입니다!\n");
}

module.exports = { SalaryCalculator };