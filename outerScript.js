
const expensesButton = document.getElementById("btnE");
const purchaseAmount = document.getElementById("purchase");
const purchaseDesc = document.getElementById("purchase1");
let expensesAmount = localStorage.getItem('needs-Amount');
const numText = document.getElementById("numberText");
const descText = document.getElementById("descriptionText");
let updatingBalance = document.getElementsByClassName("currentBalance");
expensesButton.addEventListener('click',function(e){
    e.preventDefault();
     expensesAmount = expensesAmount - parseFloat(purchaseAmount.value);
    let nT = createEle(expensesAmount);
    let dT = createText(purchaseDesc.value);
    numText.append(nT);
    descText.append(dT);
    
});

function createEle(amount) {
    let textBox = document.createElement("div");
    textBox.setAttribute("id", "txt");
    textBox.innerText = "$" + amount;
    return textBox;
  }

  function createText(description){
    let descriptionBox = document.createElement("div");
    descriptionBox.setAttribute("id", "userDescription")
    descriptionBox.innerText = description;
    return descriptionBox;
  }