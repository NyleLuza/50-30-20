
const expensesButton = document.getElementById("btnE");
const purchaseAmount = document.getElementById("purchase");
const purchaseDesc = document.getElementById("purchase1");
const expensesAmount = localStorage.getItem('needs-Amount');
const rightText = document.getElementById("rightLower");
const updatingBalance = document.getElementsByClassName("currentBalance");
expensesButton.addEventListener('click',function(e){
    e.preventDefault();
    let amount = expensesAmount;
    let newAmount = parseFloat(purchaseAmount.value) - amount;
    
    let nT = createEle(newAmount);
    rightText.append(nT);
    
});

function createEle(amount) {
    let textBox = document.createElement("div");
    textBox.setAttribute("id", "txt");
    textBox.innerText = "$" + amount;
    return textBox;
  }