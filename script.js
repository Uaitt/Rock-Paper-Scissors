function computerPlay()
{
    //rock will be 0, paper will be 1, scissor will be 2
    //generate the random number between 3 possible choices and assign it to the variable
    let random = Math.floor(Math.random() * 3); 

    return random;
}

function singleRound( playerSelection, computerSelection)
{
    //tie is 0, win is 1, loss is -1
    if (playerSelection == 0 && computerSelection == 0)
        return 0;   //rock vs rock

    if (playerSelection == 0 && computerSelection == 1)
        return -1;  //rock vs paper

    if (playerSelection == 0 && computerSelection == 2)
        return 1;   //rock vs scissors

    if (playerSelection == 1 && computerSelection == 0)
        return 1;   //paper vs rock

    if (playerSelection == 1 && computerSelection == 1)
        return 0;   //paper vs paper

    if (playerSelection == 1 && computerSelection == 2)
        return -1;  //paper vs scissors

    if (playerSelection == 2 && computerSelection == 0)
        return -1;  //scissors vs rock

    if (playerSelection == 2 && computerSelection == 1)
        return 1;   //scissors vs paper

    if (playerSelection == 2 && computerSelection == 2)
        return 0;   //scissors vs scissors
}

function convertString(quote)
{    
    if ( quote == "rock")
        return 0;

    if ( quote == "paper")
        return 1;

    if ( quote == "scissors")
        return 2;      
}

function convertNumber(number)
{
    if ( number == 0)
        return "rock";
    
    if ( number == 1)
        return "paper";
    
    if ( number == 2)
        return "scissors";
}

function game ()
{
    let playerScore = 0;
    let computerScore = 0;

    let computerSelection;

    //get all the references
    let currentRoundResult = document.querySelector("#current-result");
    let playerScoreNode = document.querySelector("#user-score");
    let computerScoreNode = document.querySelector("#computer-score");
    let inputsUser = document.querySelectorAll("button");  //nodeList that will store the references of the buttons

    inputsUser.forEach( (input) => input.addEventListener("click", () => {  /*the forEach method loops through the nodeList and calls 
                                                                              the callback (arrow) function for every item of the list,
                                                                              setting an EventListener that will be triggered for anyone
                                                                              of them once the user clicks on the button*/

        //note that you don't need loops for EventListener, every time the event happens the function will be activated no matter what
        computerSelection = computerPlay();

        if (singleRound(convertString(input.textContent), computerSelection) == 1)  /*this arrow function is a nested function to the first 
                                                                                      callback function passed to forEach method, hence in is a closure.
                                                                                      This means that this function will inherit the variables of the outer
                                                                                      function, such as the variable input*/
        {
            playerScore++;

            currentRoundResult.textContent = "You won!\n";
            currentRoundResult.textContent += input.textContent + " beats " + convertNumber(computerSelection) + "!\n";
        }

        if (singleRound(convertString(input.textContent),computerSelection) == -1)
        {
            computerScore++;

            currentRoundResult.textContent = "You lost!\n";
            currentRoundResult.textContent += input.textContent + " loses to " + convertNumber(computerSelection) + "!\n";
        }

        //output the score at every round
        playerScoreNode.textContent = "Player score " + playerScore;
        computerScoreNode.textContent = "Computer score " + computerScore;

        if (playerScore == 5){
            currentRoundResult.textContent= "You won the match!\n";
            return;
        }
        
        if (computerScore == 5){
            currentRoundResult.textContent="You lost the match!\n";
            return;
        }
    } ));

}

game();
