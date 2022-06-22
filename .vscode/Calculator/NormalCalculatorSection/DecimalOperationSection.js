const { Section } = require('../NormalCaculatorSection/Section.js');

// 진수 변환 섹션
let DecimalOperationSection = new Section();


// 커멘드 패턴 -> 요청을 객체속에 캡슐화 해주기 위해 
DecimalOperationSection = (function () {
    // 생성자
    function DecimalOperationSection() {
        this.number = null;
    };

    // 숫자를 넣어주는 메서드
    DecimalOperationSection.prototype.setNumber = function (number) {
        this.number = number;
        return this;
    };

    // 원하는 연산 전략 실행하기 
    DecimalOperationSection.prototype.doOperation = function (command, args) {
        (function () {
            command.call(null, args);
        })();
    };

    // 전략 연산 실행하는법
    DecimalOperationSection.prototype.operate = function () {
        // 연산 예제 코드 
        this.setNumber(10);
        this.doOperation(decimalOperations.bin, this.number);
    };
    return DecimalOperationSection;
})();

// 연산 메서드 묶어놓는 곳 
let decimalOperations = {
    bin: function (inputNumber) {
        console.log(inputNumber + "에 대한 2진법 변환 연산을 실행합니다");
    },
    oct: function (inputNumber) {
        console.log(inputNumber + "에 대한 8진법 변환 연산을 실행합니다");
    },
    dec: function (inputNumber) {
        console.log(inputNumber + "에 대한 10진법 변환 연산을 실행합니다");
    },
    hex: function (inputNumber) {
        console.log(inputNumber + "에 대한 16진법 변환 연산을 실행합니다");
    },
};


module.exports={DecimalOperationSection}