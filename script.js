function computerPlay()
{
    //return randomly rock, paper or scissor
    //rock will be 0, paper will be 1, scissor will be 2

    //declare a variable that will hold the random generated number
    let random;
    
    //generate the random number and assign it to the variable
    random = Math.floor(Math.random() * 3);

    //return that variable
    return random;
}

function singleRound( playerSelection, computerSelection)
{
    //confront the cases and decrees the winner
    //tie is 0, win is 1, loss is -1

    //if the player has entered rock
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

    //if the player has entered paper
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

    //if the player has entered scissors
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
    //convert a string to a number
    //0 is rock, 1 is paper, 2 is scissors
    if ( quote == "rock")
        return 0;

    if ( quote == "paper")
        return 1;

    if ( quote == "scissors")
        return 2;
    
    
}

function convertNumber(number)
{
    //convert a number to the mapped string in this game

    if ( number == 0)
        return "rock";
    
    if ( number == 1)
        return "paper";
    
    if ( number == 2)
        return "scissor";
}