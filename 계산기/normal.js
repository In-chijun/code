var oneValue = function(value){
    this.value = value
}
var twoValue = function(value1, value2){
    this.value1 = value1
    this.value2 = value2
}

const OneValue = (function() {
    function OneValue() {
        this.strategy = null;
    }
    OneValue.prototype.setStrategy = function(strategy) {
        this.strategy = strategy;
    }
    OneValue.prototype.doAlgorithm = function(value) {
        this.strategy.algorithm(value);
    }
    return OneValue;
})();
const TwoValue = (function() {
    function TwoValue() {
        this.strategy = null;
    }
    TwoValue.prototype.setStrategy = function(strategy) {
        this.strategy = strategy;
    }
    TwoValue.prototype.doAlgorithm = function(value) {
        this.strategy.algorithm(value);
    }
    return TwoValue;
})();

// 값 1개
const pi = (function() {
    function pi() {}
    pi.prototype.algorithm = function(value) {    
        console.log(Math.PI * value);
    };
    return pi;
})();
const absolute = (function() {
    function absolute() {}
    absolute.prototype.algorithm = function(value) {    
        console.log(Math.abs(value));
    };
    return absolute;
})();
const squareRoot = (function() {
    function squareRoot() {}
    squareRoot.prototype.algorithm = function(value) {    
        console.log(Math.sqrt(value));
    };
    return squareRoot;
})();
const factorial = (function() {
    function factorial() {}
    factorial.prototype.algorithm = function(value) {    
        result = 1;
        for (value; value > 1; value--){
                    result *= value;
                }
                console.log(result);
    };
    return factorial;
})();
// 값 2개
const plus = (function() {
    function plus() {}
    plus.prototype.algorithm = function(value1, value2) {    
        console.log(value1 + value2);
    };
    return plus;
})();
const minus = (function() {
    function minus() {}
    minus.prototype.algorithm = function(value1, value2) {    
        console.log(value1 - value2);
    };
    return minus;
})();
const multiplication = (function() {
    function multiplication() {}
    multiplication.prototype.algorithm = function(value1, value2) {    
        console.log(value1 * value2);
    };
    return multiplication;
})();
const division = (function() {
    function division() {}
    division.prototype.algorithm = function(value1, value2) {    
        console.log(value1 / value2);
    };
    return division;
})();
const exponentiation = (function() {
    function exponentiation() {}
    exponentiation.prototype.algorithm = function(value1, value2) {    
        console.log(Math.pow(value1, value2));
    };
    return exponentiation;
})();


let oneValue = new OneValue();

// 팩토리얼
// oneValue.setStrategy(new factorial());
// oneValue.doAlgorithm(3);
// // 팩토리얼

// oneValue.setStrategy(new absolute());
// oneValue.doAlgorithm(-5);

// const set = {
//     setOperation(operation) {
//       return oneValue.setStrategy(new operation());
//     }
// }
// const dooneValue = {
//     doExecute(number) {
//       return oneValue.doAlgorithm(number);
//     }
// }

const facto = Object.assign({}, OneValue.setStrategy(new factorial()), OneValue.doAlgorithm(3)); // 메서드 팩토리 패턴이 맞는지

// const OneMethod = Operation => {
//     let orderItem = createConstructor(Operation);
    
//     OneValue.setStrategy(orderItem);
//     OneValue.doAlgorithm(3);
  
//     return orderItem;
//   };
  
//   const oneFactory = Operation => {
//     let orderItem;
      
//       if (Operation === 'coffee') {
//         orderItem = new CoffeeOrder();
//       } else if (Operation === 'bread') {
//         orderItem = new BreadOrder();
//       } else if (Operation === 'juice') {
//         orderItem = new JuiceOrder();
//       }
      
//       return orderItem;
//   }

var Section = function(){}
var PersonalSection = new Section();
var AlbumSection = new Section();
var PatentSection = new Section();
var PublicationSection = new Section();

var SNS = function(){
    SNS.prototype.sections = {};
    SNS.prototype.createProfile = function(){};
    SNS.prototype.getSections = function(){
        return this.sections;
    }
    SNS.prototype.addSection = function(section){
        this.sections.push(section)
    }
}

const Facebook = new SNS();
Facebook.prototype.createProfile = function(){
    addSection(new PersonalSection());
    addSection(new PatentSection());
    addSection(new PublicationSection());
}
const Twitter = new SNS();
Twitter.prototype.createProfile = function(){
    addSection(new PersonalSection());
    addSection(new AlbumSection());
}