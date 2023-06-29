//for main page
let inputAmount = document.getElementById("pay");
let btn = document.getElementById("submit");
let text = document.getElementsByClassName("twoBox");
let wantsTxt = document.getElementById("wantsText");
let needsTxt = document.getElementById("needsText");
let savingsTxt = document.getElementById("savingsText");
let resetButton = document.getElementById("reset");

btn.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = parseFloat(inputAmount.value); //gets total amount
  let needsAmount = calc(50, amount);
  let wantsAmount = calc(30, amount);
  let savingsAmount = calc(20, amount);

  localStorage.setItem('needs-Amount', needsAmount);

  let nT = createEle(needsAmount);
  nT.style.fontSize = "50px";
  let wT = createEle(wantsAmount);
  wT.style.fontSize = "50px";
  let sT = createEle(savingsAmount);
  sT.style.fontSize = "50px";

  needsTxt.append(nT);
  wantsTxt.append(wT);
  savingsTxt.append(sT);
});

resetButton.addEventListener("click", () => {
  needsTxt.innerHTML = "";
  wantsTxt.innerHTML = "";
  savingsTxt.innerHTML = "";
  inputAmount.value = "";
});

function createEle(amount) {
  let textBox = document.createElement("div");
  textBox.setAttribute("id", "txt");
  textBox.innerText = "$" + amount;
  return textBox;
}

function calc(number, amount) {
  let newAmount = (amount / 100) * number;
  return newAmount;
}

//for main page

