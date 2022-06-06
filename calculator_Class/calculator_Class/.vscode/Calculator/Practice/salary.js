class salaryCalculator extends Calculator {
    constructor(){
        super();
        this.weekTime = null;
        this.hourlyWage = null;
        this.tax = null;
        this.allowance = null;
    }
   
introduce() {
    console.log("시급 계산기를 선택하셨습니다!\n");
};

//값 입력 받기
input() {
    // 입력
    this.weekTime = 15;
    console.log("일주일 근무시간을 입력해주세요 :" + this.weekTime);
    // this.weekTime = "근무시간 입력 받기";

    this.hourlyWage = 9160;
    console.log("시급을 입력해주세요 :" + this.hourlyWage);
    // this.weight = "시급 입력 받기";

    this.tax = 3.3;
    console.log("세금 적용여부를 확인합니다.");
    console.log("세금 공제율을 %로 입력해주세요. (ex : 0, 3.3, 9.22\n");
    console.log(" :" + this.hourlyWage) + "%";

    return this.calculate(this.weekTime, this.hourlyWage, tax);
};

//주휴수당 여부에 따라 연산 방법이 다름 (15시간 미만 / 15시간 이상 40시간 미만/ 40시간 이상)
calculate(weekTime, hourlyWage, tax) {
    this.result = (weekTime * hourlyWage) * (tax / 100);
};

print() {
    console.log("이번달 월급은 총 " + this.result + "원 입니다!\n");
   }

}
