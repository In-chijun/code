function AbstractClass(){}

AbstractClass.prototype.hook1= function(){};
AbstractClass.prototype.hook2= function(){};
AbstractClass.prototype.tempCalculator= function(){
    this.hook1();
    this.hook2();
};

ConcreteClass = new AbstractClass();

ConcreteClass.hook1 = function(){
    console.log("hook1");
}


ConcreteClass.hook2 = function(){
    console.log("hook2");
}


ConcreteClass.tempCalculator();

