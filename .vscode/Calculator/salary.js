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

// 각 메서드의 알고리즘에 대하여 주석을 달아 설명하겠습니다!

// 시간 + 일 수 로직 -> 시급과 일한 날을 받아주어 계산해주는 메서드입니다.
// 매개 변수 time(시급의 값을 넣어주는 매개변수)와 매개변수 day(일한 날을 입력받는 매개변수)를 받습니다.
// time * day의 연산을 해주어 값을 return 해준다.
CalculateTimeDay.prototype.calculate = function () {
    console.log("timeDayCalculate 메서드입니다.");
};

// 세금 계산 로직 -> 받는 월급에 세금을 떼는 로직에 대한 설명입니다
// 매개변수 wage(입력하고 싶은 월급의 값), tax(세금 계산을 위한 퍼센트)를 받습니다. 
// 그 후, wage * (100 - tax) 의 연산을 해주어 값을 return 해줍니다. 
CalculateTax.prototype.calculate = function () {
    console.log("taxCalculate 메서드입니다.");
};

// 주휴수당 로직 -> 주휴수당을 추가해주는 로직입니다.
// 매개변수 wage(입력하고 싶은 주급의 값), 매개변수 weekTime(일주일 동안 일한시간을 나타내는 매개변수)와 매개변수 time를 받습니다.
// 그 후, wage += (weekTime/ 40) * 8 * time의 연산을 해주어 wage을 return 해줍니다.
CalculateHolidayPay.prototype.calculate = function () {
    console.log("holidayPayCalculate 메서드입니다.");
};



const CalculateSalary = (function () {
    function CalculateSalary() {
        this.timeDayCalculate = new CalculateTimeDay();
        this.taxCalculate = new CalculateTax();
        this.holidayPayCalculate = new CalculateHolidayPay();
    };
    
    CalculateSalary.prototype.timeDayTaxCaculate = function () {
        this.timeDayCalculate.calculate();
        this.taxCalculate.calculate();
    };
    CalculateSalary.prototype.timeDayHolydayCaculate = function () {
        this.timeDayCalculate.calculate();
        this.holidayPayCalculate.calculate();
    };
    CalculateSalary.prototype.timeDayHolydayTaxCaculate = function () {
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


// 연산
SalaryCalculator.calculate = function () {
    this.CalculateSalary = new CalculateSalary();
    console.log("PercentCalculator의 calculate 메서드입니다.");
    // 퍼사드 패턴 사용부분 
    // 시급 + 세금 계산 
    // this.CalculateSalary.timeDayTaxCaculate();
    // // 시급 + 주휴수당 계산
    // this.CalculateSalary.timeDayHolydayCaculate();
    // 시급 + 주휴수당 + 세금 계산
    this.CalculateSalary.timeDayHolydayTaxCaculate();
};


SalaryCalculator.result = function () {
   console.log("SalaryCalculator의 result 메서드입니다.");
}

module.exports = { SalaryCalculator };