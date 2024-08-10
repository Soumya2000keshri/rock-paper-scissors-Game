let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mssg=document.querySelector("#message");
const user_Score=document.querySelector("#user-score");
const comp_Score=document.querySelector("#comp-score");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});


const playGame = (userChoice)=>{
    console.log("user choice is: ", userChoice);

    // generate comp choice --> modular way of programming(reusable components)
    const compChoice = generateCompChoice();
    console.log("computer choice is: ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        console.log("Game was draw");
        message.innerText=" Game was draw. Play again.";
        message.style.backgroundColor="magenta";
    }
    else{
        let userWin=true;
        if(userChoice ==="rock"){
            //comp choice-> scissors,paper
            userWin= compChoice === "paper"? false :true;
        }
        else if(userChoice ==="paper"){
            //com choice-> rock,scissors
            userWin= compChoice === "rock"? true : false;
        }
        else{
            //comp --> rock,paper
            
            userWin= compChoice==="rock"? false: true;
        }

        showWinner(userWin,userChoice,compChoice);

    }
}

const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        user_Score.innerText=userScore;
        console.log("You win!");
        message.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
        compScore++ ;
        comp_Score.innerText=compScore;
        console.log("You lose!");
        message.innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        message.style.backgroundColor="red";
    }
}

const generateCompChoice=()=>{

    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);// generate random value b/w 0 n 1
    return options[randomIdx];

    //rock,paper,scissors
    
} 