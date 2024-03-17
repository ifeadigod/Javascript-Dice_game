var score1 = 0;
var score2 = 0;

function Games() {
    var number = parseInt((Math.random()*6)+1);
    var number1 = parseInt((Math.random()*6)+1);

    var dice1 = document.getElementById('player1').src = "images/dice"+number+".png";
    var dice2 = document.getElementById('player2').src = "images/dice"+number1+".png";


    while (true){
        let scores = [];
        if (dice1> dice2){
            score1++;
            scores.push("Player1 "+"("+score1+" - "+score2+")"+" Player2");
            document.getElementById('result').innerHTML = 'Player 1 Wins'+" 😝";
            document.getElementById("scores").innerHTML = scores;
        }else if(dice1 == dice2){
            scores.push("Player1 "+"("+score1+" - "+score2+")"+" Player2");
            document.getElementById('result').innerHTML = 'It a tie'+" 🙂";
            document.getElementById("scores").innerHTML = scores;
    
        }else if(dice1< dice2){
            score2++;
            scores.push("Player1 "+"("+score1+" - "+score2+")"+" Player2");
            document.getElementById('result').innerHTML = 'Player 2 wins'+" 🎉";
            document.getElementById("scores").innerHTML = scores;
        }
        return scores;
    }
}
