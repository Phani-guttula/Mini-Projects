const textbox = document.getElementById("textbox");
const Fahrenheit = document.getElementById("toFahrenheit");
const Celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if(Fahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(Celsius.checked) {
        temp = Number(textbox.value);
        temp = (5 / 9) * (temp -  32);
        result.textContent = temp.toFixed(1) + "°F";

    }
    else {
        result.textContent = " Please select a Unit";
    }

}