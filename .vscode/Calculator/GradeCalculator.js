const { Calculator } = require('../Calculator/Calculator.js');

let GradeCalculator = new Calculator();

// 프록시 패턴 
// 계산하는 법을 비공개 처리하기 위해 사용함 
let GradeCalculation = (function(){
    function GradeCalculation(){
        this.grade = null;
        this.time = null;
        this.username = null;
    };
    GradeCalculation.prototype.calculate = function(){
        console.log("학점을 계산해주는 메서드 입니다.");
    };
    GradeCalculation.prototype.resultCalculate = function(){
        console.log("학점을 모두 계산해주는 메서드 입니다.");

        // 예제 
        this.grade = 4.0;
        this.time = 15;
        this.username = "이삭 그는 누군가?";

        return this;
    };
    return GradeCalculation;
})();


let GradeCalculationProxy = (function(){
    function GradeCalculationProxy(){
        this.GradeCalculation = new GradeCalculation();
    }
    GradeCalculationProxy.prototype.calculate = function(select){
        console.log("입력을 받아 원하는 메서드를 부르는 메서드 입니다.");
        // select ?  this.GradeCalculation.calculate() :  this.GradeCalculation.resultCalculate();        
        this.GradeCalculation.calculate();
        this.GradeCalculation.resultCalculate();
    };
    GradeCalculationProxy.prototype.result = function(){
        console.log("학점 계산기 결과를 출력해주는 메서드 입니다.");
        console.log("이름 :" + this.GradeCalculation.username + " 학점: " +this.GradeCalculation.grade +" 시간 :"+ this.GradeCalculation.time);
    };
    return GradeCalculationProxy;
})();

const gradeCalculationProxy = new GradeCalculationProxy();

// 소개
GradeCalculator.introduce = function () {
    console.log("학점 게산기를 선택하셨습니다!");
};


// 연산
GradeCalculator.calculate = function () {
    console.log("학점 계산기의 연산을 수행해주는 메서드입니다.");
    gradeCalculationProxy.calculate();
}


GradeCalculator.result = function () {
    console.log("학점 계산기의 결과를 나타내주는 메서드입니다.");
    gradeCalculationProxy.result();
}
module.exports = { GradeCalculator }