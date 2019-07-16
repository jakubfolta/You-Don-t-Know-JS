const TAX_RATE, PHONE_PRICE, ACCESSORY_PRICE, SPENDING_TRESHOLD;

TAX_RATE = 0.08;
PHONE_PRICE = 90;
ACCESSORY_PRICE = 9;
var amount;
amount = 0;

function printTreshold() {
    console.log('Your spending treshold is ' + SPENDING_TRESHOLD);
}

function printTotalAmount() {
    console.log('Total amount is $' + PHONE_PRICE + '.' )
}

function calculateAmountWithTax() {
    PHONE_PRICE = PHONE_PRICE + (PHONE_PRICE * TAX_RATE).toFixed(2);
    return PHONE_PRICE;
}
SPENDING_TRESHOLD = prompt('What is your spending treshold? ')
BANK_ACCOUNT_BALANCE = prompt('What is your bank account balance? ')
printTreshold();
while (PHONE_PRICE < BANK_ACCOUNT_BALANCE) {
    amount = calculateAmountWithTax()

}
