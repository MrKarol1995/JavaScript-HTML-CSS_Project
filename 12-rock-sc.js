
    let score = JSON.parse(localStorage.getItem('score')) || { wins: 0,
        losses: 0,
        ties: 0};
        
        clean();

        

      function pick(){
        const m = Math.random();
        let com = '';
      
        if (m >=0 && m <1/3){
          com = 'Rock';
        } else if(m > 1/3 && m < 2/3) {
          com = 'Paper';
        } else if (m >= 2/3 && m <1){
          com = 'Scissors';
        }
        return com;
      }


      let isAuto = false;
      let intervalId;

      function autoplay(){
        if(!isAuto){
          intervalId = setInterval(()=>{
            const playerMOve = pick();
  
            play(playerMOve);
  
          }, 500);
          isAuto = true;
        }else{
          clearInterval(intervalId);
          isAuto = false;
        }
      }
      document.querySelector('.js-rock-button').addEventListener('click', ()=>{
        play('Rock');

      });
      document.querySelector('.js-paper-button').addEventListener('click', ()=>{
        play('Paper');

      });
      document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
        play('Scissors');

      });

      document.body.addEventListener('keydown', (event) =>{
        if(event.key === 'r' || event.key === '1'){
          play('Rock');
        }else if(event.key === 'p'|| event.key === '2'){
          play('Paper');

        }else if(event.key === 's'|| event.key === '3'){
          play('Scissors')
        }

      });
      function play(player){
        const com = pick();
        let rem = ''
        if (player == 'Scissors'){
          if(com === 'Rock'){
            rem = 'You Loose. ';
          }else if(com === 'Paper'){
            rem = 'You Win. ';
          } else if (com === 'Scissors'){
            rem = 'Tie. ';
          }

        } else if (player == 'Rock'){
          if(com === 'Rock'){
            rem = 'Tie. ';
          } else if(com === 'Paper'){
            rem = 'You Loose. ';
          } else if (com === 'Scissors'){
            rem = 'You Win. ';
          }

        } else if (player == 'Paper'){
          if(com === 'Rock'){
            rem = 'You Win. ';
          }else if(com === 'Paper'){
            rem = 'Tie. ';
          } else if (com === 'Scissors'){
            rem = 'You Loose. ';
          }
        }

        if (rem === 'You Win. '){
          score.wins +=1;
        } else if (rem === 'You Loose. '){
          score.losses+=1;
        }else if (rem === 'Tie. '){
          score.ties+=1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        clean();

        document.querySelector('.js-result').innerHTML = rem;

        document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${player}-emoji.png" class="move-icon">
      <img src="images/${com}-emoji.png" class="move-icon">
      Computer`;

        /* alert(`You picked ${player}. Computer picked ${com}. ${rem}
      Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`);*/
      }

      function clean(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;

      }
    