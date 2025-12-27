boxes = document.querySelectorAll(".box");
reset = document.querySelector("#reset-btn");
newGame = document.querySelector('#new-game');
msgp = document.querySelector('#msg');
msgContainer = document.querySelector('.winMsg');



const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


turn0 = true;
boxClick = 0;

const resetGame = () => {
    enableBoxes();
    turn0 = true;
    for (box of boxes){
        box.innerText="";
        box.classList.remove('boxRed');
        box.classList.remove('boxBlue');
    }
    msgContainer.classList.add('hide');
}

const disableBoxes = () => {
    for (box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () => {
    for (box of boxes){
        box.disabled=false;
    }
}

const showWinner = (winner) => {
    if(winner==="Draw"){
        msgp.innerText = `Game ${winner}`;
        msgContainer.classList.remove('hide');
        return
    }
    msgp.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove('hide');

}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

const checkWin = () =>{
    for (pattern of winPatterns) {
            let val1 = boxes[pattern[0]].innerText;
            let val2 = boxes[pattern[1]].innerText;
            let val3 = boxes[pattern[2]].innerText;
            if(val1 != "" && val2 != "" && val3 != "" ) {
                if(val1 === val2 && val2 === val3){
                    console.log(`${val1} is Winner`);
                    disableBoxes()
                    showWinner(val1);
                }
            }
    }
    if (boxClick === 9){
        showWinner("Draw");
    }
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        boxClick ++;
        if (turn0) {
            box.innerText="O";
            box.classList.add('boxRed')
            turn0 = false;
        }else {
            box.innerText="X";
            box.classList.add('boxBlue')
            turn0 = true;  
        }
        checkWin()
        box.disabled=true;
    })
})


