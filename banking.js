function getInput( id ){
    let amount = document.getElementById(id);
    let inputText = amount.value;
    let inputAmountValue = parseFloat(inputText);

    // clear input
    amount.value = "";
    return inputAmountValue;
}


// deposit
document.getElementById('deposit').addEventListener('click', function(){
    let inputAmount = getInput('deposit-amount');
    let mainDeposit = document.getElementById("main-deposit");
    let prevDeposit = mainDeposit.innerText;

    
    // update deposit
    let newDepositAmount = parseFloat(prevDeposit) + parseFloat(inputAmount);
    mainDeposit.innerText = newDepositAmount;

    // update main balance
    let mainBalance = document.getElementById('main-balance');
    let mainBalanceValue = mainBalance.innerText;
    let updateMainValue = parseFloat(inputAmount) + parseFloat(mainBalanceValue);
    mainBalance.innerText = updateMainValue;

})

// witthdraw
document.getElementById("withdraw").addEventListener("click", function(){
    const withdrawAmount = getInput('withdraw-amount');

    const mainWithdraw = document.getElementById('withdraw-balance');
    const prevWitdraw = mainWithdraw.innerText;

    // update withdraw
    let newWithdrawAmount = parseFloat(prevWitdraw) + withdrawAmount;
    mainWithdraw.innerText = newWithdrawAmount;

    // update main balance
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceValue = mainBalance.innerText;
    const updateMainValue = parseFloat(mainBalanceValue) - withdrawAmount;
    mainBalance.innerText = updateMainValue;

})