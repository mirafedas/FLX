let maxSecretNumber = 5;
let secretNumber = Math.floor(Math.random() * Math.floor(maxSecretNumber));
let prize = 0;
let pricesByAttempt = [0, 2, 5, 10];
let attemptsNumber = 3;

const startGame = () => {
    attemptsNumber = 3;
    const startConfirmation = confirm("Do you want to play a game?");
    if (!startConfirmation) {
        alert("You did not become a millionaire, but can.");
    } else {
        verifyNumber();
    }
}

const verifyNumber = () => {
        while (attemptsNumber) {
        const userNumber = prompt(
            `Enter a number from 0 to ${maxSecretNumber}
            \rAttempts left: ${attemptsNumber}
            \rTotal prize: ${prize}
            \rPossible prize on current attempt: ${pricesByAttempt[attemptsNumber]}         
            `
            );
        if (Number(userNumber) === secretNumber) {
            prize += pricesByAttempt[attemptsNumber];
            attemptsNumber = 0;
            congrats();
        } else {
            attemptsNumber--;
        }
    }
    alert(`Thank you for a game. Your prize is: ${prize}`);
    startGame();
}

const congrats = () => {
    const wantContinue = confirm(`Congratulation! Your prize is: ${prize}. Do you want to continue?`);
    if (!wantContinue) {
        alert(`Thank you for a game. Your prize is: ${prize}`);
        startGame();
    } else {
        maxSecretNumber = maxSecretNumber * 2;
        pricesByAttempt = pricesByAttempt.map(i => i * 3);
        attemptsNumber = 3;
        secretNumber = Math.floor(Math.random() * Math.floor(maxSecretNumber));
        console.log(secretNumber);
    }
}
startGame();