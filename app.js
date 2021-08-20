let intialPrice = document.querySelector("#intial-price")
let currentPrice = document.querySelector("#current-price")
let stocksQuantity = document.querySelector("#quantity-of-stocks")
const outputMessage = document.querySelector("#output-message")
let checkButton = document.querySelector("#check-button")

checkButton.addEventListener("click", checkProfitLoss);
function checkProfitLoss(){
    outputMessage.style.display = "none";
    var ip = intialPrice.value;
    let cp = currentPrice.value; 
    let qt = stocksQuantity.value;

    calculateProfitLoss(ip,qt,cp);

}

function calculateProfitLoss(intial,quantity,current){
    if(intial > current){
        let loss = (intial - current) * quantity;
        let lossPercentage = (loss / intial) * 100;
        let flage = true;
        showMessage(`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`)
         

    }
    else if( current > intial){
        let profit =  (current - intial) * quantity;
        let profitPercentage = (profit / current) * 100;
        let flage = false;
        showMessage(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`)
    }

    else{
        showMessage("No loss no gain")
    }
             
}

function showMessage(msg, flage){
  outputMessage.style.display = "block";
  
  outputMessage.innerText = msg;
  
}