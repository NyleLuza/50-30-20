let inputAmount = document.getElementById("pay");
let btn = document.getElementById("submit");
let text = document.getElementsByClassName("twoBox");
let wantsTxt = document.getElementById("wantsText");
let needsTxt = document.getElementById("needsText");
let savingsTxt = document.getElementById("savingsText");
let resetButton = document.getElementById("reset");

btn.addEventListener("click", () => {
  const amount = parseFloat(inputAmount.value); //gets total amount
  let needsAmount = calc(50, amount);
  let wantsAmount = calc(30, amount);
  let savingsAmount = calc(20, amount);

  let nT = createEle(needsAmount);
  let wT = createEle(wantsAmount);
  let sT = createEle(savingsAmount);

  needsTxt.append(nT);
  wantsTxt.append(wT);
  savingsTxt.append(sT);
});

resetButton.addEventListener("click");
needsTxt;
function resetWeb() {}

function createEle(amount) {
  let textBox = document.createElement("div");
  textBox.innerText = amount;
  return textBox;
}

function calc(number, amount) {
  let newAmount = (amount / 100) * number;
  return newAmount;
}
