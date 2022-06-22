let Calculator =function() {}
Calculator.prototype.introduce = function () { console.log("introduce 메서드를 정의하지 않았어요!"); };
Calculator.prototype.calculate =function () { console.log("연산과정을 의미하는 calculate 메서드를 정의하지 않았어요!"); };
Calculator.prototype.result =function () { console.log("결과를 의미하는 result 메서드를 정의하지 않았어요!"); };

module.exports={Calculator}

