const { Calculator } = require('../Calculator/Calculator.js');
// https://www.zerocho.com/category/JavaScript/post/580f17ef77023c0015ee9688



// 퍼사드 메서드 패턴.

class CaculateSection{
    constructor(){}
    calculate();
}


class CalculateTimeDay extends CaculateSection {
    constructor(){}
    calculate();
}

class CalculateTax extends CaculateSection {
    constructor(){}
    calculate();
}

class CalculateHolidayPay extends CaculateSection {
    constructor(){}
    calculate();
}


const CalculateSalary = (function () {
    class CalculateSalary {
        constructor() {
            this.timeDayCalculate = new CalculateTimeDay();
            this.taxCalculate = new CalculateTax();
            this.holidayPayCalculate = new CalculateHolidayPay();
        }
        timeDayTaxCaculate() {
            this.timeDayCalculate.calculate();
            this.taxCalculate.calculate();
        }
        timeDayHolydayCaculate() {
            this.timeDayCalculate.calculate();
            this.holidayPayCalculate.calculate();
        }
        timeDayHolydayTaxCaculate() {
            this.timeDayCalculate.calculate();
            this.holidayPayCalculate.calculate();
            this.taxCalculate.calculate();
        }
    };
    
    return CalculateSalary;
})();

class SalaryCalculator extends Calculator{
    constructor() { }
    introduce() { }
    input() { }
    calculate() { }
    print() { }
}



module.exports = { SalaryCalculator };