// business logic
var name2="jesus";
var customers = [];
var customer = function(name, deposit) {
  this.name = name;
  this.balance = deposit;
};

customer.prototype.withDrawal = function(customer, wdAmount) {

};
customer.prototype.deposit = function(customer, depAmount) {

};

    var customerSearch = function(){
      for (var i=0; i<customers.length;i++) {
    if (customers[i].name === name2) {
        return customers[i].balance;
    } else if (customers[i].name === name2) && ("input#withdrawlAmount") {
        return customer[i] - lessCash;
    } else if (customers[i].name === name2) && ("input#depositAmount") {
        return customer[i] + newCash;
    } else {
      alert("try again stupid");
    }
  }
}
  // };

// interface logic
$(document).ready(function() {
  $("#newAccountform").submit(function(event) {
    event.preventDefault();
    console.log("the submit works");
    var name = $("#customerName").val();
    var deposit = $("#initialDeposit").val();
    var newCustomer = new customer(name, deposit);
    var lessCash = $("#withdrawlAmount").val();
    var newCash = $("#depositAmount").val();
    customers.push(newCustomer)

    $("#showBalance").text(newCustomer.balance);
// console.log(customerSearch());

  // $("#depositWithdrawlform").submit(function(event) {
  //   event.preventDefault();
    // var newDeposit = $("#depositAmount").val();
    // var newWithdrawl = $("#withdrawlAmount").val();
  // });




});
});
