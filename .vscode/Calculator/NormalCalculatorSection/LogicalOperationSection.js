const { Section } = require('../NormalCaculatorSection/Section.js');

let LogicalOperationSection = new Section();


LogicalOperationSection = (function () {
    // 생성자
    function LogicalOperationSection() {
        this.bools = [];
    };

    // (true or false)값을 넣어주는 메서드
    LogicalOperationSection.prototype.setBools = function (bool) {
        this.bools.push(bool);
        return this;
    };

    // 원하는 연산 전략 실행하기 
    LogicalOperationSection.prototype.doOperation = function (command, args) {
        (function () {
            command.call(null, args);
        })();
    };

    // 전략 연산 실행하는법
    LogicalOperationSection.prototype.operate = function () {
        // 연산 예제 코드 
        this.setBools(true);
        this.setBools(false);
        this.doOperation(logicalOperations.and, this.bools);
    };
    return LogicalOperationSection;
})();

// 컴퓨터 연산 메서드 묶어놓는 곳 
let logicalOperations = {
    and: function (inputBools) {
        console.log(inputBools + "에 대한 AND 연산을 실행합니다");
    },
    or: function (inputBools) {
        console.log(inputBools + "에 대한 OR 연산을 실행합니다");
    },
    xor: function (inputBools) {
        console.log(inputBools + "에 대한 XOR 연산을 실행합니다");
    },
    not: function (inputBool) {
        console.log(inputBool + "에 대한 NOT 연산을 실행합니다");
    },
    nand: function (inputBool) {
        console.log(inputBool + "에 대한 NAND 연산을 실행합니다");
    },
    nor: function (inputBool) {
        console.log(inputBool + "에 대한 NOR 연산을 실행합니다");
    },
};


module.exports={LogicalOperationSection}