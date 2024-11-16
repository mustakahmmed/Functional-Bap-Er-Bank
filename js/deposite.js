

document.getElementById("deposite-btn").addEventListener("click",function(){
  const newDepositeAmount = getInputFildValue("deposite-fild");
  const previousDepositeAmount = getElementValue("deposite-total");
  const totalDeposite = previousDepositeAmount + newDepositeAmount;
  setTextElementVslue("deposite-total" ,totalDeposite)
  
  const previousBalence = getElementValue("balence-total");
  const totalBalence = previousBalence + newDepositeAmount;
  setTextElementVslue("balence-total" ,totalBalence);

})
