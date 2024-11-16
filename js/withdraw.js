document.getElementById("withdraw-btn").addEventListener("click", function(){
// console.log(9)
const newWithdrawAmount = getInputFildValue("withdraw-fild");
const previousWithdrawAmout = getElementValue("Withdraw-total");

const totalWithdrawAmount = previousWithdrawAmout + newWithdrawAmount  ;
setTextElementVslue("Withdraw-total", totalWithdrawAmount);

const previousBalenceTotal = getElementValue("balence-total");
const totalBalence = previousBalenceTotal - newWithdrawAmount;
setTextElementVslue("balence-total", totalBalence);
})