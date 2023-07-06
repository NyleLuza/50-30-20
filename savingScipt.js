const expensesButton = document.getElementById("btnE");
let purchaseAmount = document.getElementById("purchase");
let purchaseDesc = document.getElementById("purchase1");
let expensesAmount = localStorage.getItem('savings-Amount');
let overallBalance = localStorage.getItem('overallB');
const numText = document.getElementById("numberText");
const descText = document.getElementById("descriptionText");
let updatingBalance = document.getElementById("currentBalance");
let expensesBalance = document.getElementById("expensesBalance");
const resetButton = document.getElementById("reset");

    updatingBalance.innerText = ' $'+ overallBalance;
    expensesBalance.innerText = ' $'+ expensesAmount;
expensesButton.addEventListener('click',function(e){
    e.preventDefault();
    expensesAmount = expensesAmount - parseFloat(purchaseAmount.value);
    overallBalance = overallBalance - purchaseAmount.value
    updatingBalance.innerText = '$' + overallBalance;
    purchaseAmount.value = "";
    let nT = createEle(expensesAmount);
    let dT = createText(purchaseDesc);
    purchaseDesc.value="";
    numText.append(nT);
    descText.append(dT);
});
resetButton.addEventListener('click',()=>{
  localStorage.setItem('overallB', overallBalance);
  window.location.href = "index.html";
})

function createEle(amount) {
    let textBox = document.createElement("div");
    textBox.setAttribute("id", "txt");
    textBox.innerText = "$" + amount;
    return textBox;
  }

  function createText(description){
    let descriptionBox = document.createElement("div");
    descriptionBox.setAttribute("id", "userDescription")
    descriptionBox.innerText = description.value;
    return descriptionBox;
  }