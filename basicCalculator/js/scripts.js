let firstUserEntry;
let secondUserEntry;
let calc;

function gatherData() {
let done = false;
do {
    
    firstUserEntry = parseFloat(prompt('Enter your first number:'));
    if  (isNaN(firstUserEntry) ) {
        alert('Please enter numbers only.');
        continue;
        } 
    secondUserEntry = parseFloat(prompt('Enter your second number:'));
    if  (isNaN(secondUserEntry)) {
        alert('Please enter numbers only.');
        continue;
        }    
    
     
    calc = prompt('What math operation would you like to do with these two numbers? \nEnter:\n "+" for addition \n "-" for subtraction \n "*" for multiplication \n "/" for division');
    if (calc !== '+' && calc !== '-' && calc !== '*' && calc !== '/') {
        alert('Please enter a valid operator');
    continue; }
    if (calc == '/' && secondUserEntry == 0){
        alert('You cannot divide a number by 0.');   
        continue;
    }  
    done = true;
    }while (!done);


}

gatherData();


function basicCalculator() {
   
    switch (calc) {
    case '+':
        answer = firstUserEntry + secondUserEntry; 
        alert(`the sum of your numbers is: ${answer}`);    
            
        break;
    case '-':
        answer = firstUserEntry - secondUserEntry;
        alert(`the difference of your numbers is: ${answer}`);
            
        break;
    case '*':
        answer = firstUserEntry * secondUserEntry;
        alert(`the product of your numbers is: ${answer}`);
            
        break;
    case '/':
        answer = firstUserEntry / secondUserEntry;
        alert(`the quotient of your numbers is: ${answer}`);
        break;
        
    default:
        break;
    }

}
basicCalculator();