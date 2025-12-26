choice = document.querySelectorAll(".choice");
score = document.querySelector(".scores");
result = document.querySelector("#resultMsg");

console.log(score);

let user ={
    score:0,
    choice: "",
}

let opponent = {
    score:0,
    choice:"",
}

const checkWinner = (c1 , c2) => {
    let cond1 =c1 === 'rock' && c2 === 'scissors';
    let cond2 =c1 === 'scissors' && c2 === 'paper';
    let cond3 =c1 === 'paper' && c2 === 'rock';
    let winner = ''
    if( cond1 || cond2 || cond3) {
        console.log('user wins');
        user.score ++;
        winner = 'user'
    }else if(user.choice != '' && user.choice === opponent.choice){
            console.log('draw');   
            winner = 'draw';  
        }else {
            console.log('opponent wins');
            opponent.score ++;
            winner ='opponent';
        }    
        showResult(c1,c2,winner);
    }

const updateScore = () => {
    score.children[1].innerText = `You : ${user.score}`;
    score.children[2].innerText = `Opponent : ${opponent.score}`;
}

const showResult = (c1,c2,w) => {
    if(w === 'user'){
        result.innerText = `${c1} beats ${c2} , You win!`;
        result.classNameList.remove('hide','Opponent','ptsHeading');
        result.classNameList.add('You');
    }else if(w === 'opponent'){
        result.innerText = `${c2} beats ${c1} , Opponent win!`;
        result.classNameList.remove('hide','You','ptsHeading');
        result.classNameList.add('Opponent');   
    }else{
        result.innerText = `Both chose ${c1} , its a Draw`;
        result.classNameList.remove('hide','You','Opponent');
        result.classNameList.add('ptsHeading');
    }
}


choice.forEach(w => {
    w.addEventListener("click" , () =>{
        user.choice = w.classNameList[1];
        console.log(`user : ${user.choice} `);
        opponent.choice = choice[Math.floor(Math.random()*3)].classNameList[1];
        console.log(`opponent : ${opponent.choice} `);
        checkWinner(user.choice , opponent.choice);
        updateScore();
    }
    )
    
});




