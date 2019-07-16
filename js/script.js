'use strict'

const TAX_RATE = 0.08;
const PHONE_PRICE = 90;
const ACCESSORY_PRICE = 9;
var spendingTreshold, bankAccountBalance, amount;

amount = 0;

while (isNaN(spendingTreshold)) {
    spendingTreshold = prompt('What is your spending treshold? ');
}

while (isNaN(bankAccountBalance)) {
    bankAccountBalance = prompt('What is your bank account balance? ');
}

console.log('Your spending treshold is $' + spendingTreshold + ' and your bank account balance is $' + bankAccountBalance + '.')

function printTotalAmount() {
    console.log('Total amount is $' + amount + '.' );
}

function calculateAmountWithTax(amount) {
    amount = amount + (amount * TAX_RATE);
    return amount.toFixed(2);
}

while (amount < bankAccountBalance) {
    amount = amount + PHONE_PRICE;
    console.log(calculateAmountWithTax(amount));
    if (amount < spendingTreshold) {
        amount = amount + ACCESSORY_PRICE;
        calculateAmountWithTax(amount);
    }
    else {
        break;
    }
}
printTotalAmount();
