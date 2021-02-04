// back-end logic for register

function Account(name, initialDeposit) {
    this.name = name,
        this.initialDeposit = initialDeposit,
        this.currentBalance = 0
}
// back-end logic for Account

Account.prototype.createAccount = function() {
    return this.currentBalance = this.initialDeposit;
}

Account.prototype.changeFunds = function(deposit, withdrawal) {
        this.currentBalance += deposit;
        this.currentBalance -= withdrawal;
        return this.currentBalance;
    }
    // var account1 = new Account ("account1",100);

$("document").ready(function() {
    var accountName;
    var initialInput;
    var newAccount;
    $("form#formOne").submit(function(event) {
        event.preventDefault();
        accountName = $("input#name").val();
        initialInput = parseFloat($("input#first-deposit").val());
        newAccount = new Account(accountName, initialInput);
        $(".total").text(newAccount.createAccount());
    });
    $("form#formTwo").submit(function(event) {
        event.preventDefault();
        var deposit = parseFloat($("input#deposit").val());
        console.log(deposit);
        var withdrawal = parseFloat($("input#withdrawal").val());
        console.log(withdrawal);
        $(".total").text(newAccount.changeFunds(deposit, withdrawal));
    });
});