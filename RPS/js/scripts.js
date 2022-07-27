
function rockPaperScissors() {
   
    let machineEntry;
    let playerEntryPrompt; 
    

    do {
        machineEntry = Math.floor(Math.random()*3);
        playerEntryPrompt = prompt('Ready?...Choose, rock, paper, or scissors');
    
        console.log(machineEntry);

        let playerEntry = playerEntryPrompt.toLowerCase();

        console.log(playerEntry);

        switch(machineEntry) {
            case 0:
                machineEntry = 'rock';
                break;
            case 1:
                machineEntry = 'paper';
                break;
            default:
                machineEntry = 'scissors';
        
        }
        
        console.log(`The machine chooses ${machineEntry}`);

        switch(playerEntry) {
            case 'rock':
                if(machineEntry == 'paper') {
                    alert('Machine chose paper, you lose!');
                } else if(machineEntry == 'scissors') {
                    alert('Machine chose scissors, you win!');
                } else {
                    alert('It\'s a tie!');
                }
                break;

            case 'paper': 
                if(machineEntry == 'rock') {
                    alert('Machine chose rock, you win!');           
                } else if(machineEntry == 'scissors') {
                    alert('Machine chose scissors, you lose!');
                } else {
                    alert('It\'s a tie!');
                }
                break;
            case 'scissors' :
                if(machineEntry =='rock') {
                    alert('Machine chose rock, you lose! ');
                }  else if(machineEntry == 'paper') {
                    alert('Machine chose paper, you win!');
                }  else {
                    alert('It\'s a tie!');
                }
                break;

            default: {
                alert('This isn\'t Big Bang Theory, you can\'t enter that!');
            }
            
            
        }



    } while(playerEntry); 
}

rockPaperScissors();
