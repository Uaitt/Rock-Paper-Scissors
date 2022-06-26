//this javascript program will be executed and its instructions will directly affect our main webpage, because it is linked thanks to a <script> element directly on that
//it's like that this program will run through the webpage and performs some action on it(print something to the console, add something to our index.html webpage, remove some elements...)

function computerPlay()
{
    //return randomly rock, paper or scissor
    //rock will be 0, paper will be 1, scissor will be 2

    //declare a variable that will hold the random generated number
    let random;
    
    //generate the random number between 3 possible choices and assign it to the variable
    random = Math.floor(Math.random() * 3);  //if random generates something <= 0,33 we will return a 0, because  0,33 * 3 = 0.99, hence floor (0,99) = 0
                                             //if random generates something that is > 0,33 but <= 0,66 it will return a 1, because 0,66 * 3 =  1.99 
                                             //if random generates something that is > 0,66 but <= 0,99 it will return 2, because 0,99 * 3 = 2.99

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
    //convert a string to a number for the game
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
        return "scissors";
}

function game ()
{
    //set the playerScore and computerScore to 0
    let playerScore = 0;
    let computerScore = 0;

    let inputUser;
    let userSelection;
    let computerSelection;

    //while player score and computer score are both less than 5
    while(playerScore < 5 && computerScore < 5)
    {
        //ask the user for input
        inputUser = window.prompt ("Enter your selection. Choose from rock, paper or scissors");    //the prompt method returns the string entered by the user in the input text field

        //convert the input to lower case, hence the user can input what he/she wants
        inputUser = inputUser.toLowerCase();

        //generate the corresponding number to the user
        userSelection = convertString (inputUser);

        //generate the random computer selection
        computerSelection = computerPlay();

        //if the user won
        if (singleRound(userSelection, computerSelection) == 1)
        {
            //increment the playerScore
            playerScore++;

            console.log("You won!\n");
            console.log(inputUser + " beats " + convertNumber(computerSelection) + "!\n");
        }

        //if the computer won
        if (singleRound(userSelection,computerSelection) == -1)
        {
            computerScore++;

            console.log("You lost!\n");
            console.log(inputUser + " loses to " + convertNumber(computerSelection) + "!\n");
        }

        //if it is a tie don't do anything
    }

    if (playerScore == 5)
        console.log("You won the match!\n");
    
    if (computerScore == 5)
        console.log ("You lost the match!\n");
}

//call in action our program, by invoking the function game
game();