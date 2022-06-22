const { Section } = require('../NormalCaculatorSection/Section.js');

let RecodeSection = new Section();

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


module.exports={RecodeSection}