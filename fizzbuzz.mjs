import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});



for(let teller = 1; teller <= 100; teller++){
 
 
    if(teller % 3 == 0 && teller % 5 == 0){
        console.log("FizzBuzz");
        
    }else if(teller % 3 == 0){
        console.log("fizz");

    }else if(teller % 5 == 0){
        console.log("Buzz");
        
    }  else{
        console.log(teller);
        
    }
    
    

}
 


