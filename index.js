const battleship = () => {

  //step 1

  //objects of players(works)
  let player1 = {
    name: prompt("Player 1, enter your name").toUpperCase(),
    shipCount: 4,
    gameBoard:[
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ]]
    }

    let player2 = {
    name: prompt("Player 2, enter your name").toUpperCase(),
    shipCount: 4,
    gameBoard:[
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ]]

  }


  //step 2(notice number of placed ships are not always consistent when ran. sometimes it shows 4 other times 3 maybe a two. not sure why. if you see what's wrong, please give me feedback. thanks!

  //setup of ships

    let ships;
    let xPos;
    let yPos;
      for (i=0; i<player1.shipCount; i++){
      xPos = Math.floor(Math.random() * 4);
      yPos = Math.floor(Math.random() * 4);
        if(parseInt(player1.gameBoard[xPos][yPos])!==1){
        player1.gameBoard[xPos][yPos] = 1;
        ships++;
        }
      }

      for (i=0; i<player2.shipCount; i++){
      xPos = Math.floor(Math.random() * 4);
      yPos = Math.floor(Math.random() * 4);
        if(parseInt(player2.gameBoard[xPos][yPos])!==1){
          player2.gameBoard[xPos][yPos] = 1;
        ships++;
        }
      }

// i feel logically that if player1 gameboard is shown then player2 should enter those coordinates to win the game not the other way arround. am i right? if so not sure how to fix.
  console.log(player1.gameBoard.toString())


  //step 3
  //play game

  //function playGame(){
  let currentPlayer;
  let otherPlayer;
  let count=0;
    while(true){
    if(+(count%2)===0){
    currentPlayer = player1;
    otherPlayer = player2;
    }else{
    currentPlayer = player2;
    otherPlayer = player1;
    }


  let qxp = prompt(`${currentPlayer.name} Please choose your x coordinate`);
  let qyp = prompt(`${currentPlayer.name} Please choose your y coordinate`);
// it seems to not be changing from 1 to 0. i can hit the same coordinate twice and be a hit.
    if(currentPlayer.gameBoard[qxp][qyp]===1){
    alert("hit");
    otherPlayer.shipCount --;
     }else{
     alert("miss. Next Player");

     }count++;

    if(player1.shipCount===0 || player2.shipCount===0){
      alert("Game Over");
      break;
     }

  }
  // console.log(currentPlayer.shipCount)

  //declare winner

  let winner;
    if(parseInt(player1.shipCount)===0){
      winner = currentPlayer;
       //alert(`${player2.name} is the winner`);

    }else if (parseInt(player2.shipCount)===0){
      alert(`${player1.name} is the winner`);
      winner = currentPlayer;
     } else{
      alert("Error, check your coordinates");
    }
    return `The winner is ${winner.name}!`;
 //}
//playGame()
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
