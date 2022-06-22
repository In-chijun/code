const { Section } = require('../NormalCaculatorSection/Section.js');

let ArithmeticOperationSection = new Section();

// 커멘드 패턴 -> 요청을 객체속에 캡슐화 해주기 위해 
ArithmeticOperationSection = (function () {
    // 생성자
    function ArithmeticOperationSection() {
        this.numbers = [];
    };

    // 숫자를 넣어주는 메서드
    ArithmeticOperationSection.prototype.setNumber = function (number) {
        this.numbers.push(number);
        return this;
    };

    // 원하는 연산 전략 실행하기 
    ArithmeticOperationSection.prototype.doOperation = function (command, args) {
        (function () {
            command.call(null, args);
        })();
    };

    // 전략 연산 실행하는법
    ArithmeticOperationSection.prototype.operate = function () {
        // 연산 예제 코드 
        this.setNumber(1);
        this.setNumber(2);
        this.doOperation(arithmeticOperations.plus, this.numbers);
    };
    return ArithmeticOperationSection;
})();

// 연산 메서드 묶어놓는 곳 
let arithmeticOperations = {
    plus: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 덧셈 연산을 실행합니다");
    },
    minus: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 마이너스 연산을 실행합니다");
    },
    multiply: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 곱셈 연산을 실행합니다");
    },
    divide: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 나눗셈 연산을 실행합니다");
    },
    rest: function (inputNumber) {
        console.log(inputNumber + "에 대한 나머지 연산을 실행합니다");
    },
};


module.exports={ArithmeticOperationSection}