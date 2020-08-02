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


  //step 2(works)

  //setup of ships using the random coordinate placments for each players board.

    let ships=0;
    let xPos;
    let yPos;

    while(ships < player1.shipCount){
      xPos = Math.floor(Math.random() * 4);
      yPos = Math.floor(Math.random() * 4);
        if(parseInt(player1.gameBoard[xPos][yPos])!==1){
        player1.gameBoard[xPos][yPos] = 1;
        ships++;
        }

    }
    ships = 0;

    while(ships < player2.shipCount){
      xPos = Math.floor(Math.random() * 4);
      yPos = Math.floor(Math.random() * 4);
        if(parseInt(player2.gameBoard[xPos][yPos])!==1){
        player2.gameBoard[xPos][yPos] = 1;
        ships++;
        }
    }




  //console.log(player1.gameBoard.toString())


  //step 3
  // play game. Used a remainder to switch between players. conditional checks if players coordinants match random

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

        if(otherPlayer.gameBoard[qxp][qyp]===1){
        alert("hit");
        otherPlayer.shipCount --;
        otherPlayer.gameBoard[qxp][qyp]=0;
        }else{
         alert("miss. Next Player");
         }count++;

        if(player1.shipCount===0 || player2.shipCount===0){
          alert("Game Over");
          break;
         }
       }

  //declare winner. conditional checks if any players shipcount is 0. is yes the opponant wins.

    let winner;
      if(parseInt(player1.shipCount)===0){
        winner = currentPlayer;
      }else if (parseInt(player2.shipCount)===0){
        //alert(`${player1.name} is the winner`);
        winner = currentPlayer;
       } else{
        alert("Error, check your coordinates");
      }
       return `The winner is ${winner.name}!`

  //}//playGame()

}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
