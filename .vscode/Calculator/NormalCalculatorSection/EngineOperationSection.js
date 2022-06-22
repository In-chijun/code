const { Section } = require('../NormalCaculatorSection/Section.js');

let EngineOperationSection = new Section();

//공학연산기능 섹션
EngineOperationSection = (function () {
    // 생성자
    function EngineOperationSection() {
        this.numbers = [];
    };

    // 숫자를 넣어주는 메서드
    EngineOperationSection.prototype.setNumber = function (number) {
        this.numbers.push(number);
        return this;
    };

    // 원하는 연산 전략 실행하기 
    EngineOperationSection.prototype.doOperation = function (command, args) {
        (function () {
            command.call(null, args);
        })();
    };

    // 전략 연산 실행하는법
    EngineOperationSection.prototype.operate = function () {
        // 연산 예제 코드 
        this.setNumber(4);
        this.doOperation(engineOperations.factorial, this.numbers);
    };
    return EngineOperationSection;
})();

// 연산 메서드 묶어놓는 곳 
let engineOperations = {
    root: function (inputNumber) {
        console.log(inputNumber + "에 대한 루트 연산을 실행합니다");
    },
    pie: function (inputNumber) {
        console.log(inputNumber + "에 대한 파이 연산을 실행합니다");
    },
    factorial: function (inputNumber) {
        console.log(inputNumber + "에 대한 팩토리얼 연산을 실행합니다");
    },
    absolute: function (inputNumber) {
        console.log(inputNumber + "에 대한 절댓값 연산을 실행합니다");
    },
    logN: function (inputNumber) {
        console.log(inputNumber + "에 대한 log 연산을 실행합니다");
    },
};


module.exports={EngineOperationSection}