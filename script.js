// Login button event listener
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function(){
    document.getElementById("loginArea").style.display = "none";
    document.getElementById("transactionArea").style.display = "block";
});


// Transaction
function getInputNumber(id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

function updateAmount(id, amount){
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const totalAmount = currentAmount + amount;
    document.getElementById(id).innerText = totalAmount;
}

// Deposit button event listener
const btnDeposit = document.getElementById("btnDeposit");
btnDeposit.addEventListener("click", function(){
    const depositAmount = getInputNumber("depositInput");
    
    updateAmount("currentDeposit", depositAmount);
    updateAmount("currentBalance", depositAmount);
    
    document.getElementById("depositInput").value = "";
});

// Withdraw button event listener
const btnWithdraw = document.getElementById("btnWithdraw");
btnWithdraw.addEventListener("click", function(){
    const withdrawAmount = getInputNumber("withdrawInput");

    updateAmount("currentWithdraw", withdrawAmount);
    updateAmount("currentBalance", -1 * withdrawAmount);

    document.getElementById("withdrawInput").value = "";
});