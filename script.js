function computerPlay()
{
    //rock will be 0, paper will be 1, scissor will be 2

    let random;
    
    //generate the random number between 3 possible choices and assign it to the variable
    random = Math.floor(Math.random() * 3); 

    return random;
}

function singleRound( playerSelection, computerSelection)
{
    //tie is 0, win is 1, loss is -1

    if (playerSelection == 0 && computerSelection == 0)
    {
        return 0;   //rock vs rock
    }

    if (playerSelection == 0 && computerSelection == 1)
    {
        return -1;  //rock vs paper
    }

    if (playerSelection == 0 && computerSelection == 2)
    {
        return 1;   //rock vs scissors
    }

    if (playerSelection == 1 && computerSelection == 0)
    {
        return 1;   //paper vs rock
    }

    if (playerSelection == 1 && computerSelection == 1)
    {
        return 0;   //paper vs paper
    }

    if (playerSelection == 1 && computerSelection == 2)
    {
        return -1;  //paper vs scissors
    }

    if (playerSelection == 2 && computerSelection == 0)
    {
        return -1;  //scissors vs rock
    }

    if (playerSelection == 2 && computerSelection == 1)
    {
        return 1;   //scissors vs paper
    }

    if (playerSelection == 2 && computerSelection == 2)
    {
        return 0;   //scissors vs scissors
    }
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

    let inputUser;
    let userSelection;
    let computerSelection;

    while(playerScore < 5 && computerScore < 5)
    {
        inputUser = window.prompt ("Enter your selection. Choose from rock, paper or scissors");    //the prompt method returns the string entered by the user in the input text field

        inputUser = inputUser.toLowerCase();

        userSelection = convertString (inputUser);

        computerSelection = computerPlay();

        if (singleRound(userSelection, computerSelection) == 1)
        {
            playerScore++;

            console.log("You won!\n");
            console.log(inputUser + " beats " + convertNumber(computerSelection) + "!\n");
        }

        if (singleRound(userSelection,computerSelection) == -1)
        {
            computerScore++;

            console.log("You lost!\n");
            console.log(inputUser + " loses to " + convertNumber(computerSelection) + "!\n");
        }

    }

    if (playerScore == 5)
        console.log("You won the match!\n");
    
    if (computerScore == 5)
        console.log ("You lost the match!\n");
}

game();