// business logic
var customers = [];
var custName;
var customer = function(name, deposit) {
  this.name = name;
  this.balance = deposit;
};

customer.prototype.withDrawal = function(customer, wdAmount) {};

customer.prototype.deposit = function(customer, depAmount) {

};

var customerSearch = function() {
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].name === custName) {
      return parseInt(customers[i].balance);
    }
  }
};

// interface logic
$(document).ready(function() {
  $("#newAccountform").submit(function(event) {
    event.preventDefault();
    var name = $("#customerName").val();
    var deposit = parseInt($("#initialDeposit").val());
    var newCustomer = new customer(name, deposit);
    customers.push(newCustomer)
    $("#showBalance").text(newCustomer.balance);
  })
  $("#depositWithdrawlform").submit(function(event) {
    event.preventDefault();
    custName = $("#customerName").val();
    var lessCash = parseFloat($("#withdrawlAmount").val());
    var newCash = parseFloat($("#depositAmount").val());
    var oldTotal = customerSearch();
    var newTotal = parseFloat(oldTotal + newCash - lessCash);
    alert(newTotal);

    $("#showBalance").text("Hello" + custName + "You're new balance is..." + newTotal);
  })
});
