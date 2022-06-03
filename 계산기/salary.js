const { Calculator } = require('../Calculator/Calculator.js');
// https://www.zerocho.com/category/JavaScript/post/580f17ef77023c0015ee9688

var SalaryCalculator = new Calculator();

// 퍼사드 메서드 패턴.

let CaculateSection = function() {
    func = function(){}
    func.calculate = function() {
        console.log("CaculateSection의 calculate메서드 입니다.");
    }
    return func;
};

let CalculateTimeDay = new CaculateSection();
let CalculateTax = new CaculateSection();
let CalculateHolidayPay = new CaculateSection();

// 시간 + 일 수 로직
CalculateTimeDay.prototype.calculate = function () {
    console.log("timeDayCalculate 메서드입니다.");
};
// 세금 계산 로직
CalculateTax.prototype.calculate = function () {
    console.log("taxCalculate 메서드입니다.");
};
// 주휴수당 로직
CalculateHolidayPay.prototype.calculate = function () {
    console.log("holidayPayCalculate 메서드입니다.");
};



const CalculateSalary = (function () {
    function CalculateSalary() {
        this.timeDayCalculate = new CalculateTimeDay();
        this.taxCalculate = new CalculateTax();
        this.holidayPayCalculate = new CalculateHolidayPay();
    };
    
    CalculateSalary.prototype.oneCaculate = function () {
        this.timeDayCalculate.calculate();
        this.taxCalculate.calculate();
    };
    CalculateSalary.prototype.twoCaculate = function () {
        this.timeDayCalculate.calculate();
        this.holidayPayCalculate.calculate();
    };
    CalculateSalary.prototype.threeCaculate = function () {
        this.timeDayCalculate.calculate();
        this.holidayPayCalculate.calculate();
        this.taxCalculate.calculate();
    };
    return CalculateSalary;
})();





// 소개
SalaryCalculator.introduce = function () {
    console.log("시급 계산기를 선택하셨습니다!");
};

//키와 체중을 입력 받음
SalaryCalculator.input = function () {

    console.log("SalaryCalculator의 input메서드 입니다. ")
    return this.calculate();
};

// 연산
SalaryCalculator.calculate = function () {
    this.CalculateSalary = new CalculateSalary();

    //퍼사드 패턴 
    this.CalculateSalary.oneCaculate();
    // this.CalculateSalary.twoCaculate();
    // this.CalculateSalary.threeCaculate();
}


SalaryCalculator.print = function () {
   console.log("SalaryCalculator의 print 메서드입니다.");
}

module.exports = { SalaryCalculator };