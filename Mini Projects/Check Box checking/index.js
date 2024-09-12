const checkbox = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const paypal = document.getElementById("paypal");
const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(checkbox.checked){
        subResult.textContent = "You are Subscribed";
    }
    else{
        subResult.textContent = "You are NOT Subscribed";
    }

    if(visa.checked) {
        paymentResult.textContent = "Payment via Visa Card";
    }
    else if(masterCard.checked) {
        paymentResult.textContent = "Payment via Master Card";
    }
    else if(paypal.checked) {
        paymentResult.textContent = "Payment via Paypal";
    }
    else {
        paymentResult.textContent = "You must Choose payment type";
    }
}

