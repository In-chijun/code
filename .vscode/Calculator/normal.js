const { Calculator } = require('./Calculator.js');

const { ArithmeticOperationSection } = require('./NormalCaculatorSection/ArithmeticOperationSection.js');
const { EngineOperationSection } = require('./NormalCaculatorSection/EngineOperationSection.js');
const { RecodeSection } = require('./NormalCaculatorSection/RecodeSection.js');
const { LogicalOperationSection } = require('./NormalCaculatorSection/LogicalOperationSection.js');

let NormalCalculator = new Calculator();

// Section을 묶어서 계산기를 생성해줄 수 있는 부분 
let makeCalculator = (function () {
    this.logic = [];
    return {
        addRecode: function () {
            let operate = new RecodeSection();
            logic.push(operate);
            return this;
        },
        addArithmeticOperation: function () {
            let operate = new ArithmeticOperationSection();
            logic.push(operate);
            return this;
        },
        addEngineOperation: function () {
            let operate = new EngineOperationSection();
            logic.push(operate);
            return this;
        },
        addLogicalOperation: function () {
            let operate = new LogicalOperationSection();
            logic.push(operate);
            return this;
        },
        build: function () {
            return logic;
        }
    }
})();

// 소개
NormalCalculator.introduce = function () {
    console.log("일반 계산기를 선택하셨습니다!");
};

// 값을 입력 받음 -> 연산
NormalCalculator.calculate = function () {
    console.log("NormalCalculator 의 calculate 메서드입니다.");

    let builder = makeCalculator.addArithmeticOperation().addEngineOperation().addLogicalOperation().addRecode().build();
    builder[0].operate();
    builder[1].operate();
    builder[2].operate();
    builder[3].operate();
};


NormalCalculator.result = function () {
    console.log("NormalCalculator 의 result 메서드입니다.");
}


module.exports = { NormalCalculator };