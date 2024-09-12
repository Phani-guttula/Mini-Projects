const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");

let age;

myButton.onclick = function() {
    age = myInput.value;
    age = Number(age);

    if(age >= 100) {
        result.textContent = "You Don't Need to Enter this Website";
    }
    else if(age >= 18) {
        result.textContent = "You Are Allowed to Enter this Website";
    }
    else if(age <= 18) {
        result.textContent = "You Are Not Allowed To Enter this Website";
    }
    else if(age < 0) {
        result.textContent = "Age Should Not be Less than 0";
    }

}
