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
    //rock is 0, paper is 1, scissors is 2
    
    //if the player has entered rock
    if (playerSelection == 0 && computerSelection == 0)
    {
        return "tie";
    }

    if (playerSelection == 0 && computerSelection == 1)
    {
        return "You lost! Rock loses against paper!";
    }

    if (playerSelection == 0 && computerSelection == 2)
    {
        return "You won! Rock beats scissors!";
    }

    //if the player has entered paper
    if (playerSelection == 1 && computerSelection == 0)
    {
        return "You won! Paper beats rock!";
    }

    if (playerSelection == 1 && computerSelection == 1)
    {
        return "Tie!";
    }

    if (playerSelection == 1 && computerSelection == 2)
    {
        return "You lost! Paper loses against scissors";
    }

    //if the player has entered scissors
    if (playerSelection == 2 && computerSelection == 0)
    {
        return "You lost! Scissors loses against rock" ;
    }

    if (playerSelection == 2 && computerSelection == 1)
    {
        return "You won! Scissors beats paper";
    }

    if (playerSelection == 2 && computerSelection == 2)
    {
        return "Tie!";
    }
}