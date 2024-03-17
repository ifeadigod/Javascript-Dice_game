

function Games() {
    var number = parseInt((Math.random()*6)+1);
    var number1 = parseInt((Math.random()*6)+1);

    var dice1 = document.getElementById('player1').src = "images/dice"+number+".png";
    var dice2 = document.getElementById('player2').src = "images/dice"+number1+".png";

    if (dice1> dice2){
        document.getElementById('result').innerHTML = 'Player 1 Wins <i class="fa fa-facebook-f"></i>';
    }else if(dice1 == dice2){
        document.getElementById('result').innerHTML = 'It a tie';
    }else if(dice1< dice2){
        document.getElementById('result').innerHTML = 'Player 2 wins';
    }
}

//store the results
//add icon