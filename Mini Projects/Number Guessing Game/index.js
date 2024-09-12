let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1));

let attempts = 0;
let game = true;
let guessNum;

// entering into while loop to run the code
while(game) {
    guessNum =  window.prompt(`Guess a Number btw ${min} to ${max}`);
    guessNum = Number(guessNum);    // to perform typecasting to  convert into a number

    if(isNaN(guessNum)){ // isNan() default fun() to check a num or not
        window.alert("Please enter a valid Number");
    }
    else if(guessNum < min || guessNum > max) {
        window.alert("Please enter a valid Number within the range");
    }
    else
        {
        attempts++;
        if(guessNum < answer){
            window.alert("TOO LOW! Try Again");
        }
        else if(guessNum > answer) {
            window.alert("TOO HIGH! Try Again");
        }
        else {
            window.alert(`Hurray! You Got It. You took ${attempts} attempts to guess the number ${answer} `);
            game = false;
        }
    }

   
}