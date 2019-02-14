const mainDiv = document.getElementById('all');
const numDisplay = document.getElementById('number');
const lowerIn:HTMLInputElement = <HTMLInputElement> document.getElementById('low-bound');
const upperIn:HTMLInputElement = <HTMLInputElement> document.getElementById('up-bound');

//Generates a random number and updates the span text
mainDiv.addEventListener('click', () => {
    try {
        const lower: number = parseInputDivToInteger(lowerIn);
        const upper: number = parseInputDivToInteger(upperIn);

        if (lower < 0) lowerIn.value = '0';
        if (upper <= lower) upperIn.value = ''+(lower+1);

        numDisplay.innerHTML = ''+random(lower,upper);
    }
    catch {  numDisplay.innerHTML = "err"  }
    
    // Generates a pseudorandom number from (lower, upper]
    function random(lower : number, upper : number) : number {
        return Math.ceil((Math.random() * upper) + lower);
    };
});

//Helper function to parse values from input boxes
function parseInputDivToInteger(inputBox: HTMLInputElement): number {
    return Number.parseInt(inputBox.value);
}