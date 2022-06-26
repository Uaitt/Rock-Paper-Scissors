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

