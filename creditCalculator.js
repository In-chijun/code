const { Calculator } = require("./계산기/Calculator");

let InputSection = function() {
    func = function(){}
    func.input = function() {
        console.log("InputSection의 input메서드 입니다.");
    }
    return func;
};
let InputMaxCredit = new InputSection();
let InputSubjectCount = new InputSection();
let InputSubject = new InputSection();
let InputScore = new InputSection();
let InputCredit = new InputSection();
let ChangeTo4_5 = new InputSection();

InputMaxCredit.prototype.inputMaxCredit = function(){
    console.log(`최대 학점을 받는 메서드입니다.`);
}
InputSubjectCount.prototype.inputSubjectCount = function(){
    console.log(`과목 수를 받는 메서드입니다.`);
}
InputSubject.prototype.inputSubject = function(){
    console.log(`과목 이름을 받는 메서드입니다.`);
}
InputScore.prototype.inputScore = function(){
    console.log(`점수를 받는 메서드입니다.`);
}
InputCredit.prototype.inputCredit = function(){
    console.log(`해당 과목의 학점을 받는 메서드입니다.`);
}
ChangeTo4_5.prototype.changeTo4_5 = function(){
    console.log(`4.3 기준의 학점을 4.5 계산법으로 바꿔주는 메서드입니다.`);
}

// let CreditCalculator = new Calculator();
// CreditCalculator.prototype.calculate = function(){}
// CreditCalculator.prototype.getCalculateMethod = function(){}

function CreditCalculator(){
    let section = [];
    this.create = function(){};
    this.getSection = function(){
        return section;
    }
    this.addSection = function(section){
        section.push(section);
    }

}

let Credit3 = new CreditCalculator();
Credit3.prototype.create()