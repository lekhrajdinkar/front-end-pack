console.log('Building dice game...')
// class player{
//     name;
//     current_score;
//     total_score;
//     is_active;
// }


let player_a = { index:0, name: 'PLAYER-A', total_score: 0, current_score: 0}
let player_b = { index:1, name: 'PLAYER-B', total_score: 0, current_score: 0}
let players = [player_a, player_b];
let active_player = players[0];
let temp_total = 0
let start=false
let game_log = []

function restart()
{
    let players_ = document.querySelectorAll(".player-containor");
    const sure = confirm('Are you Sure ?')

    if(sure){
        let start=true; game_log = []
        document.querySelector(".dice").innerText = '';
        document.querySelector("#action-panel").classList.toggle('hide')
        temp_total = 0;
        players_[0].children[3].innerText = 'Your Turn';
        for(let i=0; i<players.length; i++){
            players_[i].children[0].innerText = prompt("Player -1 Name")
            console.log(players_[i].children[1].children[0].innerText = 0)
            console.log(players_[i].children[2].children[0].innerText = 0)
            players[i].total_score = 0
            players[i].current_score = 0
        } 
    }
}

function roll(){
    let dice = Math.floor(Math.random() * 7);
    while(dice === 0 ) dice = Math.floor(Math.random() * 7);
    
    game_log.push({player: active_player.name, dice: dice})
    if (dice === 1){
        active_player.current_score = 0
        active_player.total_score = 0
        //document.querySelector(".dice").innerText = "BAD LUCK, got 1 !!";
        hold()
    }else{
       
        temp_total = temp_total + dice;
        
        console.log(temp_total)
        if(temp_total >= 25) {
            alert(active_player.name + ' WON !!')
            console.log(game_log)
            document.querySelector("#action-panel").classList.toggle('hide')
            restart()
        }
        else{
            active_player.current_score +=dice
            document.querySelector(".dice").innerText = dice;
            updateScore();
        }
        
    }
   
}

function hold()
{
    let players_ = document.querySelectorAll(".player-containor");
    game_log.push({player: active_player.name, action: 'hold'})
    document.querySelector(".dice").innerText = '?';
    active_player.total_score = active_player.total_score + active_player.current_score;
    active_player.current_score = 0;
    updateScore();
    
    if(active_player.index === 0){
        active_player = player_b;
        players_[0].children[3].innerText = ''
        players_[1].children[3].innerText = 'Your Turn'
    }
    else{
        active_player = player_a;
        players_[0].children[3].innerText = 'Your Turn'
        players_[1].children[3].innerText = ''
    }
    temp_total = active_player.total_score;
    players_[0].classList.toggle('active-player-bg')
    players_[1].classList.toggle('active-player-bg')
}

function updateScore(){
    let players_ = document.querySelectorAll(".player-containor");
    const i = active_player.index;
    players_[i].children[1].children[0].innerText = players[i].total_score
    players_[i].children[2].children[0].innerText = players[i].current_score
}