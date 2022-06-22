const { Calculator } = require('./Calculator.js');

let NormalCalculator = new Calculator();

let Section = function () { };

let ArithmeticOperationSection = new Section();
let EngineOperationSection = new Section();
let RecodeSection = new Section();
let LogicalOperationSection = new Section();

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
};

RecodeSection = (function () {
    // 생성자 
    function RecodeSection() { }

    RecodeSection.prototype.recodeResult = function () {
        console.log("연산 결과 저장");
    };
    RecodeSection.prototype.recodeCalculationProcess = function () {
        console.log("연산 과정 저장");
    };
    RecodeSection.prototype.operate = function () {
        this.recodeResult();
        this.recodeCalculationProcess();
    };
    return RecodeSection;
})();


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


NormalCalculator.print = function () {
    console.log("NormalCalculator 의 print 메서드입니다.");
}


module.exports = { NormalCalculator };