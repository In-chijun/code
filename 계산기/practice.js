  var Caculation = (function() {
    function Caculation(value1, value2) {
      this.value1 = value1;
      this.value2 = value2 || 0;
    }
    Caculation.prototype.excute = function(value) {
        oneValue.doAlgorithm(value);
    };
    return Caculation;
  })();
  var makeLegion = function(Operation) {
    var adjutants = null;
    var army = null;
    return {
      setAdjutant: function(list) {
        adjutants = list;
        return this;
      },
      setArmy: function(number) {
        army = number;
        return this;
      },
      build: function() {
        return new Legion(leader, adjutants, army);
      }
    }
  };
var galbaLegion = makeLegion('galba').setAdjutant(['otho', 'vindex', 'vitellius']).setArmy(8000).build();
var rufusLegion = makeLegion('rufus').setArmy(10000).build();
console.log(galbaLegion)
console.log(rufusLegion.attack(galbaLegion));