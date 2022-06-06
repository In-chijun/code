var Borrow = function(){};
var Ruturn = function(){};
var Search = function(){};

Borrow.prototype.BorrowBook = function(){
    console.log("책대여하는 로직 구현 구간")
};
Ruturn.prototype.RuturnBook = function(){
    console.log("책반납하는 로직 구현 구간")
};
Search.prototype.SearchBook = function(){
    console.log("책 검색하는 로직 구현 구간")
};

var Facade = function(){}

Facade.prototype.ReturnSystem = new Ruturn()
Facade.prototype.BorrowSystem = new Borrow()
Facade.prototype.SearchSystem = new Search()
Facade.prototype.ChangeSystem = new Change()

Facade.prototype.BookSystem = function(){
    this.SearchSystem.SearchBook();
    this.BorrowSystem.BorrowBook();
    this.ReturnSystem.RuturnBook();
}
var facade = new Facade()
facade.BookSystem();