function calculateProfit() {
    let amount = parseFloat(prompt("Enter initial deposit:"));
    let rate = 0.05; // 5% interest rate
    let profit = amount * rate;
    alert("Profit: " + profit.toFixed(2));
}

calculateProfit();

