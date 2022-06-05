var oneValue = function (value) {
    this.value = value
}
var twoValue = function (value1, value2) {
    this.value1 = value1
    this.value2 = value2
}

const setCalculation = (function () {
    function setCalculation() {
        this.strategy = null;
    }
    setCalculation.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    }
    setCalculation.prototype.doAlgorithm = function () {
        this.strategy.algorithm.apply(null, args);
    }
    return setCalculation;
})();

// 공학
const pi = (function () {
    function pi() { }
    pi.prototype.algorithm = function (value) {
        console.log(Math.PI * value);
    };
    return pi;
})();
const absolute = (function () {
    function absolute() { }
    absolute.prototype.algorithm = function (value) {
        console.log(Math.abs(value));
    };
    return absolute;
})();
const squareRoot = (function () {
    function squareRoot() { }
    squareRoot.prototype.algorithm = function (value) {
        console.log(Math.sqrt(value));
    };
    return squareRoot;
})();
const factorial = (function () {
    function factorial() { }
    factorial.prototype.algorithm = function (value) {
        result = 1;
        for (value; value > 1; value--) result *= value;
        console.log(result);
    };
    return factorial;
})();
const exponentiation = (function () {
    function exponentiation() { }
    exponentiation.prototype.algorithm = function (value1, value2) {
        console.log(Math.pow(value1, value2));
    };
    return exponentiation;
})();
// 일반
const plus = (function () {
    function plus() { }
    plus.prototype.algorithm = function (value1, value2) {
        console.log(value1 + value2);
    };
    return plus;
})();
const minus = (function () {
    function minus() { }
    minus.prototype.algorithm = function (value1, value2) {
        console.log(value1 - value2);
    };
    return minus;
})();
const multiplication = (function () {
    function multiplication() { }
    multiplication.prototype.algorithm = function (value1, value2) {
        console.log(value1 * value2);
    };
    return multiplication;
})();
const division = (function () {
    function division() { }
    division.prototype.algorithm = function (value1, value2) {
        console.log(value1 / value2);
    };
    return division;
})();

let oneValue = new OneValue();
oneValue.setStrategy(new factorial());
oneValue.doAlgorithm(3);

var Caculation = (function() {
    function Caculation(value1, value2) {
      this.value1 = value1;
      this.value2 = value2 || 0;
    }
    Caculation.prototype.action = function(value) {
        setCalculation.doAlgorithm(value);
    };
    return Caculation;
  })();
  var makeCalculation = operation => {
        return {
            'factorial': new factorial(),
            'pi': new pi(),
            'squareRoot': new squareRoot(),
            'absolute': new absolute(),
            'plus': new plus(),
            'multiplication': new multiplication(),
            'exponentiation': new exponentiation(),
            'minus': new minus(),
            'division': new division(),
        }[operation];
      };
var galbaLegion = makeLegion('galba').setAdjutant(['otho', 'vindex', 'vitellius']).setArmy(8000).build();
var rufusLegion = makeLegion('rufus').setArmy(10000).build();
console.log(galbaLegion)
console.log(rufusLegion.attack(galbaLegion));
