// deposit
document.getElementById('deposit').addEventListener('click', function(){
    let amount = document.getElementById('deposit-amount');
    let inputAmount = amount.value;
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


    // console.log(mainDepositConvert+parseInt(amount));

    // clear input
    amount.value = "";
})